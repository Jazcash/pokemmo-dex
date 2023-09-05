<route lang="json5">
{ props: true }
</route>

<template>
    <div>
        <h1>{{ ability.name }}</h1>
        <div>{{ ability.description }}</div>
        <PokemonList :pokemon="pokemon" />
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { pokedexLookups } from "@/store/store";
import PokemonList from "@/components/PokemonList.vue";

const props = defineProps<{
    id: string
}>();

const ability = computed(() => pokedexLookups.abilities[parseInt(props.id)]);

const pokemon = computed(() => ability.value.learnedBy.map(id => pokedexLookups.pokemon[id]));
</script>

<style lang="scss" scoped>
.battlesprite {
    display: flex;
    border: 1px dashed rgba(255, 255, 255, 0.2);
    position: relative;
    max-height: 192px;
    max-width: 192px;

    img {
        width: 192px;
        height: 192px;
    }

    .type {
        position: absolute;
        bottom: 7px;
        left: 7px;
        display: flex;
        gap: 5px;
    }
}

h1 {
    font-size: 48px;
    width: 100%;
    display: flex;
}

a {
    text-decoration: underline;
    color: #eee;

    &:hover {
        color: #fff;
    }
}

.gridform {
    row-gap: 8px;
    column-gap: 10px;
}

.label {}

.value {
    font-weight: 600;
}
</style>