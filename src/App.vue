<template>
  <Breadcrumbs :route="route" :router="router" :name-dictionary='nameDictionary' />
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';

const router = useRouter()
const route = useRoute()

const nameDictionary = {
  "a": "第一層",
  "b": "第二層",
  "c": "第三層"
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
