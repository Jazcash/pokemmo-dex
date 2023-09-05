<route lang="json5">
{ props: true }
</route>

<template>
    <div>
        <h1>{{ location.region_name }} - {{ location.location }}</h1>

        <PokemonList :pokemon="pokemon" :initial-columns="['Name', 'Type', 'Egg Group', 'Gender Ratio', 'Held Items']" />
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { pokedexLookups } from "@/store/store";
import PokemonList from "@/components/PokemonList.vue";

const props = defineProps<{
    id: string
}>();

const location = computed(() => pokedexLookups.locations[props.id]);

const pokemon = computed(() => location.value.pokemonFound.map(entry => ({ ...entry, ...pokedexLookups.pokemon[entry.pokemonId] })));
</script>

<style lang="scss" scoped>
.p-datatable {
    border: 1px solid rgba(255, 255, 255, 0.1);
}

:deep(.p-datatable .p-datatable-tbody > tr > td) {
    padding: 0 10px;
}

:deep(.p-datatable .p-datatable-thead > tr > th) {
    padding: 7px 10px;
}
</style>