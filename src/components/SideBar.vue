<template lang="pug">
  .sidebar
    sidebar-header
    hr.hr-line
    sidebar-list
    .bottom-btn
      button.btn-green(@click="fillTestData") Заполнить тестовыми данными
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SidebarHeader from "@/components/SidebarHeader.vue";
import SidebarList from "@/components/SidebarList.vue";

@Component({
  components: {
    SidebarHeader,
    SidebarList
  }
})
export default class Sidebar extends Vue {
  fillTestData() {
    this.$store.dispatch("fillTestData");
  }
}
</script>

<style lang="scss">
.btn-green {
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2px;
  padding: 0.5rem 0.3rem;
}

.bottom-btn {
  position: fixed;
  bottom: 0;
}
</style>
