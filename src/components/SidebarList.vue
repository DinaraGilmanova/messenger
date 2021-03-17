<template lang="pug">
  .sidebar-list
    .sidebar-list__header
      .sidebar-list__header--title MESSAGES
      .sidebar-list__header--group history
    div(v-for="(item, index) in groupsList")
      sidebar-list-item(:title="item.title" :index="index")
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SidebarListItem from "@/components/SidebarListItem.vue";
import { GroupMessage } from "@/models/GroupMessage";

@Component({
  components: {
    SidebarListItem
  }
})
export default class SidebarList extends Vue {
  get groupsList(): GroupMessage[] {
    return this.$store.state.profile.messageGroups;
  }
}
</script>
