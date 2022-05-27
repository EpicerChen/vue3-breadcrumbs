<template>
    <span v-for="(el, i) in nameDictionary != {} ? map(node) : node" :key="i">
        <span v-if="i > 0" v-html="symbol" />
        <button @click="goTo(i)">{{ el }}</button>
    </span>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from "vue";
import { RouteLocationNormalizedLoaded, Router } from "vue-router";

export default defineComponent({
    name: "Breadcrumbs",
    props: {
        path: {
            type: String,
            unique: true,
            default: ''
        },
        router: {
            type: Object as PropType<Router>,
            unique: true,
        },
         symbol: {
            type: String,
            unique: false,
            default: '>>'
        },
        nameDictionary: {
            type: Object as PropType<{ [key: string]: string }>,
            unique: false,
            default: {}
        }
    },
    setup(props) {
        const { path } = toRefs(props)
        const node: string[] = path.value.split("/");

        const map = (items: string[]) =>
            items.map((el) => props.nameDictionary[el] != undefined
                ? props.nameDictionary[el] : el)

        const goTo = (endIndex: number) => {
            let path = node.slice(0, endIndex + 1).join("/")
            props.router!.push(path == "" ? "/" : path)
        }

        return { node, goTo, map }
    }
})
</script>
