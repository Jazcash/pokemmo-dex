<template>
    <div class="container">
        <div class="main flex-col flex-grow gap-md">
            <div class="flex-row flex-center-items gap-md">
                Visible Columns
                <MultiSelect id="multiselect" v-model="selectedColumns" :options="columns" placeholder="Toggle Columns"
                    :maxSelectedLabels="0" />
            </div>

            <DataTable :value="pokemon" dataKey="id" sortField="id" :sortOrder="1" paginator :rows="15"
                :rowsPerPageOptions="[15, 50, 1000]" filterDisplay="menu" selectionMode="single"
                v-model:selection="selectedPokemon">
                <Column v-if="selectedColumns.includes('ID')" header="ID" field="id" sortable></Column>
                <Column v-if="selectedColumns.includes('Name')" header="Name" field="name" sortable>
                    <template #body="slotProps">
                        <div class="cell" style="gap: 1px">
                            <img :src="`/monstericons/${slotProps.data.id}.png`">
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
                        <div class="cell" style="gap: 3px">
                            <TypePill :type="slotProps.data.types[0]" />
                            <TypePill v-if="slotProps.data.types[1] && slotProps.data.types[1] !== slotProps.data.types[0]"
                                :type="slotProps.data.types[1]" />
                        </div>
                    </template>
                </Column>
                <Column v-if="selectedColumns.includes('Egg Group')" header="Egg Group" sortable
                    :field="data => `${data.egg_groups[0]}, ${data.egg_groups[1]}`">
                    <template #body="slotProps">
                        <div class="cell" style="gap: 3px">
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
                        <div class="cell">
                            <img v-for="item in slotProps.data.held_items" :src="`/itemicons/${item.id}.png`">
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
            </DataTable>
        </div>
        <div v-if="selectedPokemon" class="sidebar">
            <Sidebar :pokemonId="selectedPokemon.id" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import pokedex from "@/assets/pokedex.json"
import TypePill from "@/components/TypePill.vue";
import EggGroup from "@/components/EggGroup.vue";
import GenderRatio from "@/components/GenderRatio.vue";
import MultiSelect from 'primevue/multiselect';
import Sidebar from "@/components/Sidebar.vue";
import { ref } from "vue";

const pokemon = pokedex.pokemon;

const selectedColumns = ref([
    "Name",
    "Tier",
    "Type",
    "Egg Group",
    "Gender Ratio",
    "Stats"
]);
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

const selectedPokemon = ref();
</script>

<style lang="scss" scoped>
.container {
    position: relative;
    display: flex;
    gap: 15px;
}

.main {
    width: 60%;
}

.sidebar {
    background: rgb(7, 20, 38);
    border: 1px solid rgba(255, 255, 255, 0.1);
    width: 40%;
}

@media screen and (max-width: 1600px) {
    .container {
        flex-wrap: wrap;
    }

    .main,
    .sidebar {
        width: 100%;
    }
}

.p-datatable {
    border: 1px solid rgba(255, 255, 255, 0.1);
}

:deep(.p-datatable .p-datatable-tbody > tr > td) {
    padding: 0 10px 3px 10px;
}

:deep(.p-datatable .p-datatable-thead > tr > th) {
    padding: 7px 10px;
}

.cell {
    display: flex;
    align-items: center;
}

.icon {
    margin: unset;
}
</style>