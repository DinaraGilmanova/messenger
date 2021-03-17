<template lang="pug">
  div#app.container
    sidebar
    main-block
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Sidebar from "@/components/SideBar.vue";
import MainBlock from "@/components/MainBlock.vue";

@Component({
  components: {
    Sidebar,
    MainBlock
  }
})
export default class App extends Vue {
  created() {
    this.$store.dispatch("getInfo");
  }
}
</script>
