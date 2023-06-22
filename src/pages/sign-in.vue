<template>
  <div class="sign-in">
    <SignInForm/>
  </div>
</template>

<script setup lang="ts">
import SignInForm from "~/features/sign-in-form.vue";

definePageMeta({
  layout: 'guest'
})
</script>

<style lang="scss">
.sign-in {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
