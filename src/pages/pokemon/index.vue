<template>
    <div>
        <PokemonList :pokemon="pokemon" />
    </div>
</template>

<script lang="ts" setup>
import { pokedexArrays } from "@/store/store";
import PokemonList from "@/components/PokemonList.vue";

const pokemon = pokedexArrays.pokemon;
</script>

<style lang="scss" scoped></style>