<template>
    <div class="container">
        <div class="main flex-col flex-grow gap-md">
            <div class="flex-row flex-center-items gap-md">
                <div>Visible Columns</div>
                <MultiSelect id="multiselect" v-model="selectedColumns" :options="columns" placeholder="Toggle Columns"
                    :maxSelectedLabels="0" />

                <MoveSelector v-model="move" />
            </div>

            <DataTable :value="pokemon" v-model:filters="filters" dataKey="id" sortField="id" sort-mode="multiple"
                :multiSortMeta="presortMetadata" paginator :rows="20" :rowsPerPageOptions="[10, 20, 50, 1000]"
                filterDisplay="menu" selectionMode="single" @row-select="onRowSelected" stripedRows>
                <Column v-if="selectedColumns.includes('ID')" header="ID" field="id" sortable></Column>
                <Column v-if="selectedColumns.includes('Name')" header="Name" field="name" sortable style="width: 1px">
                    <template #body="{ data }">
                        <div class="flex-row flex-center-items gap-sm">
                            <div :class="`monstericon-${data.id} pixelart`"></div>
                            <div class="name">{{ data.name }}</div>
                        </div>
                    </template>
                    <template #filter="{ filterModel }">
                        <InputText v-model="filterModel.value" type="text" class="p-column-filter"
                            placeholder="Search by name" />
                    </template>
                </Column>
                <Column v-if="selectedColumns.includes('Tier')" header="Tier" field="tier" sortable
                    :showFilterMatchModes="false">
                    <template #body="{ data }">
                        {{ tiers.find(tier => tier.id === data.tier)?.label }}
                    </template>
                    <template #filter="{ filterModel }">
                        <MultiSelect v-model="filterModel.value" :options="tiers" option-value="id" optionLabel="label"
                            placeholder="Any" class="p-column-filter">
                            <template #option="slotProps">
                                <div class="flex align-items-center gap-2">
                                    <span>{{ slotProps.option.label }}</span>
                                </div>
                            </template>
                        </MultiSelect>
                    </template>
                </Column>
                <Column v-if="selectedColumns.includes('Type')" header="Type" sortable
                    :field="data => `${data.types[0]}, ${data.types[1]}`">
                    <template #body="{ data }">
                        <div class="flex-row flex-center-items" style="gap: 3px">
                            <TypePill :type="data.types[0]" />
                            <TypePill v-if="data.types[1] && data.types[1] !== data.types[0]" :type="data.types[1]" />
                        </div>
                    </template>
                </Column>
                <Column v-if="selectedColumns.includes('Egg Group')" header="Egg Group" sortable
                    :field="data => `${data.egg_groups[0]}, ${data.egg_groups[1]}`">
                    <template #body="{ data }">
                        <div class="flex-row flex-center-items" style="gap: 3px">
                            <EggGroup :eggGroup="data.egg_groups[0]" />
                            <EggGroup v-if="data.egg_groups[1]" :eggGroup="data.egg_groups[1]" />
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
                    <template #body="{ data }">
                        <GenderRatio :genderRatio="data.gender_ratio" />
                    </template>
                </Column>
                <Column v-if="selectedColumns.includes('Catch Rate')" header="Catch" field="catchRate" sortable></Column>
                <Column v-if="selectedColumns.includes('Held Items')" header="Items" sortable
                    :field="data => data.held_items.join(',')">
                    <template #body="{ data }">
                        <div class="flex-row flex-center-items">
                            <div v-for="item in data.held_items" :class="`itemicon-${item.id}`"></div>
                        </div>
                    </template>
                </Column>
                <Column v-if="selectedColumns.includes('Stats')" class="hp" header="HP" field="stats.hp" sortable></Column>
                <Column v-if="selectedColumns.includes('Stats')" class="atk" header="Atk" field="stats.attack" sortable>
                </Column>
                <Column v-if="selectedColumns.includes('Stats')" class="def" header="Def" field="stats.defense" sortable>
                </Column>
                <Column v-if="selectedColumns.includes('Stats')" class="spa" header="SpA" field="stats.sp_attack" sortable>
                </Column>
                <Column v-if="selectedColumns.includes('Stats')" class="spd" header="SpD" field="stats.sp_defense" sortable>
                </Column>
                <Column v-if="selectedColumns.includes('Stats')" class="spe" header="Spe" field="stats.speed" sortable>
                </Column>
                <Column v-if="selectedColumns.includes('Stats')" class="sum" header="Sum" field="stats.total" sortable>
                </Column>

                <template v-if="'rarity' in pokemon[0]">
                    <Column header="Method" field="type" sortable></Column>
                    <Column header="Rarity" field="rarity" sortable></Column>
                    <Column header="Level" field="min_level" sortable>
                        <template #body="{ data }">
                            {{ data.min_level }} - {{ data.max_level }}
                        </template>
                    </Column>
                </template>

                <!-- <template v-if="move">
                    <Column header="Learn Type">
                        <template #body="{ data }">
                            {{ getMoveLearnTypeText(getPokemonMove(data.id, move.id)!.learnType) }}
                        </template>
                    </Column>
                    <Column header="Level">
                        <template #body="{ data }">
                            <span v-if="getPokemonMove(data.id, move.id)">
                                {{ getPokemonMove(data.id, move.id)!.level }}</span>
                        </template>
                    </Column>
                </template> -->
            </DataTable>
        </div>
    </div>
</template>

<script lang="ts" setup>
import DataTable, { DataTableRowSelectEvent, DataTableFilterMeta, DataTableSortMeta } from "primevue/datatable";
import Column from "primevue/column";
import TypePill from "@/components/TypePill.vue";
import EggGroup from "@/components/EggGroup.vue";
import GenderRatio from "@/components/GenderRatio.vue";
import MoveSelector from "@/components/MoveSelector.vue";
import MultiSelect from 'primevue/multiselect';
import { ref } from "vue";
import { useRouter } from "vue-router/auto";
import { Move, Pokemon } from "@/model/types";
//import { getMoveLearnTypeText } from "@/utils/get-move-learn-type-text";
import { pokedexLookups } from "@/store/store";
import InputText from "primevue/inputtext";
import { FilterMatchMode, FilterService } from 'primevue/api';

const { move } = defineModels<{
    move?: ModelOptions<Move | null, { defaultValue: null }>
}>();

const props = withDefaults(defineProps<{
    pokemon: Pokemon[],
    initialColumns?: string[]
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

const tiers = ref([
    { id: "Ubers", label: "Ubers" },
    { id: "Over Used", label: "OU" },
    { id: "Under Used", label: "UU" },
    { id: "Never Used", label: "NU" },
    { id: "Untiered", label: "None" },
]);

const presortMetadata: DataTableSortMeta[] = [
    { field: "stats.total", order: -1 },
    { field: "stats.speed", order: -1 }
]

FilterService.register("filterByMove", (id: number) => {
    if (!move.value) {
        return true;
    }
    return pokedexLookups.moves[move.value.id].learnedBy.includes(id);
});

const filters = ref<DataTableFilterMeta>({
    id: { value: 0, matchMode: "filterByMove" },
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    tier: { value: ["Over Used", "Under Used", "Never Used", "Untiered"], matchMode: FilterMatchMode.IN },
});

function onRowSelected(event: DataTableRowSelectEvent) {
    if ("ctrlKey" in event.originalEvent && event.originalEvent.ctrlKey) {
        window.open(`/#/pokemon/${event.data.id}`, "_blank");
    } else {
        router.push(`/pokemon/${event.data.id}`);
    }
}

// function getPokemonMove(pokemonId: number, moveId: number) {
//     return pokedexLookups.pokemon[pokemonId].moves.find(mov => mov.id === moveId);
// }
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

:deep(.hp) {
    background-color: rgba(0, 255, 0, 0.1) !important;
}

:deep(.atk) {
    background-color: rgba(255, 0, 0, 0.1) !important;
}

:deep(.def) {
    background-color: rgba(255, 187, 0, 0.1) !important;
}

:deep(.spa) {
    background-color: rgba(255, 0, 200, 0.1) !important;
}

:deep(.spd) {
    background-color: rgba(255, 238, 0, 0.1) !important;
}

:deep(.spe) {
    background-color: rgba(0, 162, 255, 0.1) !important;
}
</style>