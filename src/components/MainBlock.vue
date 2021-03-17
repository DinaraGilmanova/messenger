<template lang="pug">
  .main
    .main--header
      .header--title Questions Messenger
      .header--group All Questions
    .main__list(v-if="messageGroup")
      template(v-for="item in messages")
        message-item(:item="item")
      .main__list--item
        textarea.item--textarea(v-model="text" placeholder="Write a new message...")
        button-icon.subcard-action.bottom-row(@click="addMessage")
          i.fa.fa-plus-circle.btn--icon(aria-hidden="true")
    .main__list--empty(v-else) Add a group to add a new message

</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SideBar from "@/components/SideBar.vue";
import MessageItem from "@/components/MessageItem.vue";
import { Message } from "@/models/Message";
import ButtonIcon from "@/ui-components/ButtonIcon.vue";
import { GroupMessage } from "@/models/GroupMessage";

@Component({
  components: {
    SideBar,
    MessageItem,
    ButtonIcon
  }
})
export default class MainBlock extends Vue {
  public text = "";

  get currentMessageGroupIndex(): number {
    return this.$store.state.currentMessageGroupIndex;
  }

  get messages(): Message[] {
    return (
      this.$store.state.profile.messageGroups[this.currentMessageGroupIndex]
        ?.messages || []
    );
  }

  get messageGroup(): GroupMessage | undefined {
    return this.$store.state.profile.messageGroups[
      this.currentMessageGroupIndex
    ];
  }

  addMessage() {
    const message = new Message();
    message.title = this.text;
    message.author = this.$store.state.profile.name;

    this.$store.commit("addMessage", message);
    this.$store.dispatch("saveInfo");
    this.text = "";
  }
}
</script>
<style lang="scss">
.bottom-row {
  display: flex;
  align-items: flex-end;
}
</style>
