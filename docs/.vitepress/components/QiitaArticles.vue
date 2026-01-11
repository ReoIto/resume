<template>
  <div>
    <ContentsContainer :contents="contents" more-link="https://qiita.com/ganbarow-taro" />
  </div>
</template>

<script setup lang="ts">
import { data } from '../data/lapras.data'
import ContentsContainer from './ContentsContainer.vue';

const contents = data.qiitaArticles.map((article) => {
  return {
    isOverlayTitle: false,
    title: article.title,
    url: article.url,
    ogImage: article.ogImage as string
  }
})
</script>

<style lang="scss" scoped></style>
