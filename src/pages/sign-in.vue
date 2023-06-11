<template>
  <form action="" class="sign-in">
    <UIInput label="Логин / Эл. почта" />
  </form>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'guest'
})
</script>

<style lang="scss">
.sign-in {
  padding-inline: 10px;
  padding-block: 10px;
}
</style>
