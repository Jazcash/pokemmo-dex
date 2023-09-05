<template>
    <div>
        <Abilities :abilities="abilities" />
    </div>
</template>

<script lang="ts" setup>
import Abilities from "@/components/Abilities.vue";
import { pokedexArrays } from "@/store/store";

const abilities = pokedexArrays.abilities;
</script>

<style lang="scss" scoped></style>