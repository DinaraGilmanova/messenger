<template lang="pug">
  .profile-block
    .profile-block--avatar
      img(:src="userAvatar")
    .profile-block--info
      .profile-block--name {{userName}}
      .profile-block--status {{status}}
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ProfileBlock extends Vue {
  public status = "online";

  get userName(): string {
    return this.$store.state.profile.name;
  }
  get userAvatar(): string {
    console.log(this.$store.state.profile);
    return this.$store.state.profile.avatar;
  }
}
</script>
