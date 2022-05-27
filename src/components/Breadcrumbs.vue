<template>
    <span v-for="(el, i) in nameDictionary != {} ? map(items) : items" :key="i">
        <span v-if="i > 0" v-html="symbol" />
        <button @click="goTo(i)">{{ el }}</button>
    </span>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from "vue";

export default defineComponent({
    name: "Breadcrumbs",
    props: {
        'symbol': {
            type: String,
            unique: false,
            default: '>>'
        },
        path: {
            type: String,//改成Router
            unique: true,
            default: ''
        },
        nameDictionary: {
            type: Object as PropType<{ [key: string]: string }>,
            unique: false,
            default: {}
        }
    },
    setup(props) {
        const { path } = toRefs(props)
        const items: string[] = path.value.split("/");

        const map = (items: string[]) => {
            let pItems: string[] = []
            items.forEach(el => {
                pItems.push(
                    props.nameDictionary[el] != undefined
                        ? props.nameDictionary[el] : el)
            });
            return pItems
        }

        const goTo = (endPathIndex: number) => {
            let goToParh = ""
            for (let i = 0; i <= endPathIndex; i++) {
                goToParh += `${items[i]}/`
            }
            console.log(goToParh)
        }

        return { items, goTo,   map }
    }
})
</script>
