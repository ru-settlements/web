<template>
  <h1>заголовок</h1>
  <NewsFilters />
  <div v-for="item of [1, 2, 3, 4]" :key="item">
    <NewsRow>
      <template #meta>
        <NewsItemActions />
      </template>
    </NewsRow>
  </div>
</template>

<script lang="ts" setup>
import { NewsFilters } from "~/features/news-filters";
import { NewsRow } from "~/entities/news";
import { NewsItemActions } from "~/features/news-item-actions";
</script>

<style lang="scss"></style>
