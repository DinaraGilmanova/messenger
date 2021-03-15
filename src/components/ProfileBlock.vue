<template lang="pug">
  .profile-block
    .profile-block--avatar
      img(:src="require('../assets/logo.png')")
    .profile-block--info
      .profile-block--name David Hill
      .profile-block--status online
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ProfileBlock extends Vue {}
</script>
<style lang="scss">
.profile-block {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px;

  &--avatar {
    height: 40px;
    width: 40px;
    overflow: hidden;
    text-decoration: none;
    border-radius: 4px;

    img {
      display: block;
      width: 100%;
    }
  }

  &--info {
    display: flex;
    flex-direction: column;
    color: #fff;
    padding: 10px;

    .profile-block--name {
      font-size: 1.2rem;
    }

    .profile-block--status {
      font-size: 0.8rem;
      opacity: 0.5;
    }
  }
}
</style>
