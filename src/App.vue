<template lang="pug">
  div#app.container
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {}
</script>

<style lang="scss">
@import "styles/global";

.container {
  display: flex;
  flex-direction: row;
  height: 100vh;
}
</style>
