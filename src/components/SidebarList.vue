<template lang="pug">
  .sidebar-list
    .vsm-subtitle
      .vsm-subtitle--title MESSAGES
      .vsm-subtitle--group history
    div(v-for="item in groupsList")
      sidebar-list-item(:item="item")
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SidebarListItem from "@/components/SidebarListItem.vue";

@Component({
  components: {
    SidebarListItem
  }
})
export default class SidebarList extends Vue {
  public groupsList: { title: string; count: number }[] = [
    { title: "My Questions", count: 188 },
    { title: "Messenger", count: 345 },
    { title: "Community QA", count: 5323 },
    { title: "FAQ", count: 0 }
  ];
}
</script>
<style lang="scss">
.sidebar-list {
  display: flex;
  flex-direction: column;
}
.vsm-subtitle {
  display: flex;
  flex-direction: column;
  color: #fff;
  margin-bottom: 10px;
}
.vsm-subtitle--title {
  font-size: 1rem;
  font-weight: 600;
}
.vsm-subtitle--group {
  font-size: 0.8rem;
  opacity: 0.5;
}
</style>
