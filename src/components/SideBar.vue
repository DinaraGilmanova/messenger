<template lang="pug">
  .v-sidebar-menu
      sidebar-header
      hr
      sidebar-list
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import SidebarHeader from "@/components/SidebarHeader.vue";
import SidebarList from "@/components/SidebarList.vue";

@Component({
  components: {
    SidebarHeader,
    SidebarList
  }
})
export default class Sidebar extends Vue {
  @Prop() private msg!: string;
  public hover = false;
  public active = false;

  get itemLinkClass(): { [key: string]: boolean }[] {
    return [
      { "vsm--link": true },
      { "vsm--link_hover": this.hover },
      { "vsm--link_active": this.active }
    ];
  }

  mouseOverEvent(event: Event) {
    event.stopPropagation();
    this.hover = true;
  }

  mouseOutEvent(event: Event) {
    event.stopPropagation();
    this.hover = false;
  }
}
</script>

<style lang="scss"></style>
