<template lang="pug">
  .main-block
    .main-block--header
      .header--title Questions Messenger
      .header--group All Questions
    .main-block-wrapper
      div(v-for="item in questions")
        message-item(:item="item")
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SideBar from "@/components/SideBar.vue";
import MessageItem, { Question } from "@/components/MessageItem.vue";

@Component({
  components: {
    SideBar,
    MessageItem
  }
})
export default class MainBlock extends Vue {
  public questions: Question[] = [
    {
      code: "Q2343",
      title: "Hello, what is the delivery time?",
      author: "Guest",
      createDate: "today, 14:32",
      status: "open",
      success: false
    },
    {
      code: "Q7643",
      title: "Hello, do you have this item in stock?",
      author: "Guest",
      createDate: "10 Oct, 14:32",
      status: "open",
      success: false
    },
    {
      code: "Q7545",
      title: "Does this come in the colour blue?",
      author: "Guest",
      createDate: "10 Oct, 14:32",
      status: "open",
      success: false
    }
  ];
}
</script>

<style lang="scss">
.main-block {
  display: flex;
  flex-direction: column;
  flex-grow: 2;

  &--header {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 1rem;

    .header--title {
      font-size: 1.5rem;
      font-weight: 600;
      color: #6e6e6e;
    }

    .header--group {
      font-size: 1rem;
      opacity: 0.4;
    }
  }

  .main-block-wrapper {
    padding: 20px;
    background-color: #dae8f3;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
}
</style>
