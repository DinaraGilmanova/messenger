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
export default class App extends Vue {}
</script>

<style lang="scss">
@import "styles/global";
@import url("https://netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css");

.container {
  display: flex;
  flex-direction: row;
  height: 100vh;
}
</style>
