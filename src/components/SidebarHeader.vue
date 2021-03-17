<template lang="pug">
  .sidebar-header
    profile-block
    .sidebar-header--action
      button-icon(@click="showModal")
        i.fa.fa-plus-circle.btn--icon(aria-hidden="true")
    modal-cmpt(v-if="isModalVisible")
      template(v-slot:header)
        p Add new group
        button-icon(@click='closeModal')
          i.fa.fa-times(aria-hidden="true")
      template(v-slot:body)
        input(v-model="newGroupTitle" placeholder="Enter the group name")
        button-icon(@click="addGroup")
          i.fa.fa-plus-circle.btn--icon(aria-hidden="true")


</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ProfileBlock from "@/components/ProfileBlock.vue";
import { GroupMessage } from "@/models/GroupMessage";
import ModalCmpt from "@/ui-components/ModalCmpt.vue";
import ButtonIcon from "@/ui-components/ButtonIcon.vue";

@Component({
  components: {
    ProfileBlock,
    ModalCmpt,
    ButtonIcon
  }
})
export default class SidebarHeader extends Vue {
  public isModalVisible = false;
  public newGroupTitle = "";

  addGroup(): void {
    this.$store.commit(
      "addGroup",
      new GroupMessage({ title: this.newGroupTitle, messages: [] })
    );
    this.$store.dispatch("saveInfo");
    this.isModalVisible = false;
  }

  showModal(): void {
    this.isModalVisible = true;
  }

  closeModal(): void {
    this.isModalVisible = false;
  }
}
</script>
