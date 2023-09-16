<route lang="json5">
{ props: true }
</route>

<template>
    <div>
        <h1>
            <a :href="`https://pokemondb.net/move/${move.name.replace(' ', '-')}`">
                {{ move.name }}
            </a>
        </h1>
        <div class="gridform">
            <div>ID</div>
            <div>{{ move.id }}</div>

            <div>Damage Type</div>
            <div>{{ move.skill_damage_type }}</div>

            <div>Power</div>
            <div>{{ move.base_power }}</div>

            <div>Accuracy</div>
            <div>{{ move.base_accuracy }}</div>

            <div>PP</div>
            <div>{{ move.base_pp }}</div>

            <div>Priority</div>
            <div>{{ move.priority }}</div>

            <div>Type</div>
            <div>{{ move.type }}</div>

            <div>Target Type</div>
            <div>{{ move.target_type }}</div>

            <div>True Damage</div>
            <div>{{ move.true_damage }}</div>
        </div>

        <PokemonList :pokemon="pokemon" :move="move" />
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { pokedexLookups } from "@/store/store";
import PokemonList from "@/components/PokemonList.vue";

const props = defineProps<{
    id: string
}>();

const move = computed(() => pokedexLookups.moves[parseInt(props.id)]);

const pokemon = computed(() => move.value.learnedBy.map(id => pokedexLookups.pokemon[id]));
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