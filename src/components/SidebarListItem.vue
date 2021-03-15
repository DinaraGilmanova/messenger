<template lang="pug">
  .vsm--item
    .vsm--icon
      i(class="fa fa-archive" aria-hidden="true")
    .vsm--link
      span {{item.title}}
      span(v-if="item.count") ({{item.count}})
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class SidebarListItem extends Vue {
  @Prop() private item!: { title: string; count: number };
}
</script>
<style lang="scss">
.vsm--item {
  display: flex;
  flex-direction: row;
  color: #fff;
  align-items: center;
  opacity: 0.8;
  padding: 2px 0;
}

.vsm--link {
  cursor: pointer;
  display: flex;
  font-size: 14px;
  text-decoration: none;
  user-select: none;
  &_active {
    font-weight: 600;
  }
}

.vsm--icon {
  display: inline-block;
  margin-right: 10px;
}
</style>
