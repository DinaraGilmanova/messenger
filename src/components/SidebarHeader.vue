<template lang="pug">
  .sidebar-header
    profile-block
    .sidebar-header--action
      i(class="fa fa-plus-circle" aria-hidden="true" style="font-size: 32px;")
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ProfileBlock from "@/components/ProfileBlock.vue";

@Component({
  components: {
    ProfileBlock
  }
})
export default class SidebarHeader extends Vue {}
</script>
<style lang="scss">
.sidebar-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  &--action {
    display: flex;
    color: #fff;
    padding: 10px;
    opacity: 0.5;
    align-items: center;
  }
}
</style>
