<template lang="pug">
  .group-item(@click="setCurrentMessageGroupIndex" :class="{'group-item--active': currentMessageGroupIndex === index}")
    .group-item--icon
      i(class="fa fa-archive" aria-hidden="true")
    .group-item--link
       p
         span {{title}}
         span(v-if="messagesCount")  ({{messagesCount}})
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class SidebarListItem extends Vue {
  @Prop() private title!: string;
  @Prop() private index!: number;

  get messagesCount(): number {
    return this.$store.getters.messagesCount(this.index);
  }

  setCurrentMessageGroupIndex() {
    this.$store.state.currentMessageGroupIndex = this.index;
  }

  get currentMessageGroupIndex() {
    return this.$store.state.currentMessageGroupIndex;
  }
}
</script>
