<template lang="pug">
  .main-block-wrapper--item
    .item-info
      .item-info--key {{item.code}}
      .item-info--status {{item.status}}
    .item-subcard
      .item-subcard--title {{item.title}}
      .item-subcard--bottom
        .subcard-autor
          span {{item.author}} {{item.createDate}}
        .subcard-action
          i(class="fa fa-plus-circle" aria-hidden="true" style="font-size: 32px;")
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import SideBar from "@/components/SideBar.vue";

export interface Question {
  code: string;
  title: string;
  author: string;
  createDate: string;
  status: string;
  success: boolean;
}

@Component({
  components: {
    SideBar
  }
})
export default class MessageItem extends Vue {
  @Prop() private item!: Question;
}
</script>

<style lang="scss">
.main-block-wrapper {
  padding: 20px;
  background-color: #dae8f3;
  height: 100vh;
  display: flex;
  flex-direction: column;

  &--item {
    background-color: #f2f4f7;
    color: #6e6e6e;
    margin-bottom: 1rem;
    padding: 0.7rem;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    min-height: 15vh;

    .item-info {
      display: flex;
      flex-direction: column;
      flex-grow: 0;
      padding: 5px;
      background-color: #cecccc;
      border-radius: 4px;

      &--key {
        font-weight: 600;
      }

      &--status {
      }
    }

    .item-subcard {
      display: flex;
      flex-direction: column;
      flex-grow: 5;
      margin-left: 10px;
      justify-content: space-between;

      &--title {
        display: flex;
      }

      &--bottom {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;

        .subcard-autor {
          font-size: 0.9rem;
          opacity: 0.5;
          align-self: center;
        }

        .subcard-action {
          display: flex;
          opacity: 0.5;
        }
      }
    }
  }
}
</style>
