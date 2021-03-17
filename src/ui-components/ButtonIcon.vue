<template lang="pug">
  button.btn(@click="click()")
    slot
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ButtonIcon extends Vue {
  click() {
    this.$emit("click");
  }
}
</script>
