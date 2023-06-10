<template>
  <NavigationMenu :items="items" />
  <slot/>
</template>

<script lang="ts" setup>
import { NavigationMenu } from "@ru-settlements/ui-components";
import { ref } from "@vue/reactivity";

const items = ref([
  {
    link: '#',
    name: 'Новости',
  },
  {
    link: '#',
    name: 'Информация',
  },
  {
    link: '#',
    name: 'Объявления',
  },
  {
    link: '#',
    name: 'История',
  },
  {
    link: '#',
    name: 'Туристу',
  }
])
</script>
