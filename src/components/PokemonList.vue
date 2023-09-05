<template>
    <div class="container">
        <div class="main flex-col flex-grow gap-md">
            <div class="flex-row flex-center-items gap-md">
                <div>Visible Columns</div>
                <MultiSelect id="multiselect" v-model="selectedColumns" :options="columns" placeholder="Toggle Columns"
                    :maxSelectedLabels="0" />
            </div>

            <DataTable :value="pokemon" dataKey="id" sortField="id" :sortOrder="1" paginator :rows="20"
                :rowsPerPageOptions="[10, 20, 50, 1000]" filterDisplay="menu" selectionMode="single"
                @row-click="onRowClicked" stripedRows>
                <Column v-if="selectedColumns.includes('ID')" header="ID" field="id" sortable></Column>
                <Column v-if="selectedColumns.includes('Name')" header="Name" field="name" sortable>
                    <template #body="slotProps">
                        <div class="flex-row flex-center-items gap-sm">
                            <div :class="`monstericon-${slotProps.data.id} pixelart`"></div>
                            <div class="name">{{ slotProps.data.name }}</div>
                        </div>
                    </template>
                </Column>
                <Column v-if="selectedColumns.includes('Tier')" header="Tier" field="tier" sortable>
                    <template #body="slotProps">
                        <span v-if="slotProps.data.tier === 'Over Used'">OU</span>
                        <span v-else-if="slotProps.data.tier === 'Under Used'">UU</span>
                        <span v-else-if="slotProps.data.tier === 'Never Used'">NU</span>
                        <span v-else-if="slotProps.data.tier === 'Untiered'">--</span>
                        <span v-else>{{ slotProps.data.tier }}</span>
                    </template>
                </Column>
                <Column v-if="selectedColumns.includes('Type')" header="Type" sortable
                    :field="data => `${data.types[0]}, ${data.types[1]}`">
                    <template #body="slotProps">
                        <div class="flex-row flex-center-items" style="gap: 3px">
                            <TypePill :type="slotProps.data.types[0]" />
                            <TypePill v-if="slotProps.data.types[1] && slotProps.data.types[1] !== slotProps.data.types[0]"
                                :type="slotProps.data.types[1]" />
                        </div>
                    </template>
                </Column>
                <Column v-if="selectedColumns.includes('Egg Group')" header="Egg Group" sortable
                    :field="data => `${data.egg_groups[0]}, ${data.egg_groups[1]}`">
                    <template #body="slotProps">
                        <div class="flex-row flex-center-items" style="gap: 3px">
                            <EggGroup :eggGroup="slotProps.data.egg_groups[0]" />
                            <EggGroup v-if="slotProps.data.egg_groups[1]" :eggGroup="slotProps.data.egg_groups[1]" />
                        </div>
                    </template>
                </Column>
                <Column v-if="selectedColumns.includes('Ability 1')" header="Ability 1" sortable
                    :field="data => data.abilities[0].name"></Column>
                <Column v-if="selectedColumns.includes('Ability 2')" header="Ability 2" sortable
                    :field="data => data.abilities[1].name"></Column>
                <Column v-if="selectedColumns.includes('Hidden Ability')" header="HA" sortable
                    :field="data => data.abilities[2].name"></Column>
                <Column v-if="selectedColumns.includes('Gender Ratio')" header="Gender" sortable field="gender_ratio">
                    <template #body="slotProps">
                        <GenderRatio :genderRatio="slotProps.data.gender_ratio" />
                    </template>
                </Column>
                <Column v-if="selectedColumns.includes('Catch Rate')" header="Catch" field="catchRate" sortable></Column>
                <Column v-if="selectedColumns.includes('Held Items')" header="Items" sortable
                    :field="data => data.held_items.join(',')">
                    <template #body="slotProps">
                        <div class="flex-row flex-center-items">
                            <div v-for="item in slotProps.data.held_items" :class="`itemicon-${item.id}`"></div>
                        </div>
                    </template>
                </Column>
                <Column v-if="selectedColumns.includes('Stats')" header="HP" field="stats.hp" sortable></Column>
                <Column v-if="selectedColumns.includes('Stats')" header="Atk" field="stats.attack" sortable></Column>
                <Column v-if="selectedColumns.includes('Stats')" header="Def" field="stats.defense" sortable></Column>
                <Column v-if="selectedColumns.includes('Stats')" header="SpA" field="stats.sp_attack" sortable></Column>
                <Column v-if="selectedColumns.includes('Stats')" header="SpD" field="stats.sp_defense" sortable></Column>
                <Column v-if="selectedColumns.includes('Stats')" header="Spe" field="stats.speed" sortable></Column>
                <Column v-if="selectedColumns.includes('Stats')" header="Sum" field="stats.total" sortable></Column>

                <template v-if="'rarity' in pokemon[0]">
                    <Column header="Method" field="type" sortable></Column>
                    <Column header="Rarity" field="rarity" sortable></Column>
                    <Column header="Level" field="min_level" sortable>
                        <template #body="slotProps">
                            {{ slotProps.data.min_level }} - {{ slotProps.data.max_level }}
                        </template>
                    </Column>
                </template>

                <template v-if="move">
                    <Column header="Learn Type">
                        <template #body="slotProps">
                            {{ getMoveLearnTypeText(getPokemonMove(slotProps.data.id, move.id)!.learnType) }}
                        </template>
                    </Column>
                    <Column header="Level">
                        <template #body="slotProps">
                            <span v-if="getPokemonMove(slotProps.data.id, move.id)!.level">
                                {{ getPokemonMove(slotProps.data.id, move.id)!.level }}</span>
                        </template>
                    </Column>
                </template>
            </DataTable>
        </div>
    </div>
</template>

<script lang="ts" setup>
import DataTable, { DataTableRowClickEvent } from "primevue/datatable";
import Column from "primevue/column";
import TypePill from "@/components/TypePill.vue";
import EggGroup from "@/components/EggGroup.vue";
import GenderRatio from "@/components/GenderRatio.vue";
import MultiSelect from 'primevue/multiselect';
import { ref } from "vue";
import { useRouter } from "vue-router/auto";
import { Move, Pokemon } from "@/model/types";
import { getMoveLearnTypeText } from "@/utils/get-move-learn-type-text";
import { pokedexLookups } from "@/store/store";

const props = withDefaults(defineProps<{
    pokemon: Pokemon[],
    initialColumns?: string[]
    move?: Move
}>(), {
    initialColumns: () => [
        "Name",
        "Tier",
        "Type",
        "Egg Group",
        "Gender Ratio",
        "Held Items",
        "Stats"
    ]
});

const router = useRouter();

const selectedColumns = ref(props.initialColumns);
const columns = ref([
    "ID",
    "Name",
    "Tier",
    "Type",
    "Egg Group",
    "Ability 1",
    "Ability 2",
    "Hidden Ability",
    "Gender Ratio",
    "Held Items",
    "Stats"
]);

function onRowClicked(event: DataTableRowClickEvent) {
    router.push(`/pokemon/${event.data.id}`);
}

function getPokemonMove(pokemonId: number, moveId: number) {
    return pokedexLookups.pokemon[pokemonId].moves.find(mov => mov.id === moveId);
}
</script>

<style lang="scss" scoped>
.container {
    position: relative;
    display: flex;
    gap: 10px;
}

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