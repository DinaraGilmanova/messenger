<template lang="pug">
  transition(name='modal')
    .modal-mask
      .modal-wrapper
        .modal-container
          header.modal-header
            slot(name='header')
             button.btn-close.btn-right(type='button' @click='close' aria-label='Close modal') x
          section.modal-body
            slot(name='body')
              | I'm the default body!
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ModalCmpt extends Vue {
  close() {
    this.$emit("close");
  }
}
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header {
  border-bottom: 1px solid #eeeeee;
  color: #4aae9b;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
}

.modal-body {
  display: flex;
  padding: 10px;
}
</style>
