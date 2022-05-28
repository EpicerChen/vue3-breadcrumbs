<template>
    <span class="breadcrumbs" :class="'breadcrumbs-' + i"
        v-for="(el, i) in nameDictionary != undefined ? map(node, nameDictionary) : node" :key="i">
        <span class="symbol" v-if="i > 0" v-html="symbol" />
        <button class="item" @click="goTo(i)">
            {{ el == "" ? "/" : el }}
        </button>
    </span>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { RouteLocationNormalizedLoaded, Router } from "vue-router";

const props = withDefaults(
    defineProps<{
        route: RouteLocationNormalizedLoaded;
        router: Router;
        symbol?: string;
        nameDictionary?: {
            [key: string]: string
        };
    }>(),
    {
        symbol: " > ",
    })

const fullpath = computed(() => { return props.route.fullPath })
const node = computed(() =>
    fullpath.value == "/" ? [""] : fullpath.value.split("/"))

const map = (
    items: string[],
    nameDictionary: { [key: string]: string }) =>
    items.map((el) =>
        nameDictionary[el] != undefined ? nameDictionary[el] : el)

const goTo = (endIndex: number) => {
    let path = node.value.slice(0, endIndex + 1).join("/")
    props.router!.push(path == "" ? "/" : path)
}
</script>

<style>
.breadcrumbs .item {
    background-color: transparent;
    border-style: none;
}
</style>