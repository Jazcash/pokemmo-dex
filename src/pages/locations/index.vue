<template>
    <div>
        <Locations :locations="locations" />
    </div>
</template>

<script lang="ts" setup>
import Locations from "@/components/Locations.vue";
import { pokedexArrays } from "@/store/store";

const locations = pokedexArrays.locations;
</script>

<style lang="scss" scoped></style>