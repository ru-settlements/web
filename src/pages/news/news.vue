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

<script lang="ts" src="./news.ts" />
<style src="./news.scss" lang="scss"/>
