<template>
    <div>
        <Moves :moves="moves" />
    </div>
</template>

<script lang="ts" setup>
import Moves from "@/components/Moves.vue";
import { pokedexArrays } from "@/store/store";

const moves = pokedexArrays.moves;
</script>

<style lang="scss" scoped></style>