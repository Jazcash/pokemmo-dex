<template>
    <div v-if="locations.length">
        <DataTable :value="locations" dataKey="id" sortField="id" :sortOrder="1" paginator :rows="20"
            :rowsPerPageOptions="[20, 50, 1000]" filterDisplay="menu" @row-click="onRowClicked" selectionMode="single"
            stripedRows>
            <Column header="Region" field="region_name" sortable filter style="width: 200px"></Column>
            <Column header="Area" field="location" sortable filter style="width: 200px"></Column>

            <template v-if="locations.length && 'type' in locations?.[0]">
                <Column header="Type" field="type" sortable></Column>
                <Column header="Rarity" field="rarity" sortable></Column>
                <Column header="Min Lvl" field="min_level" sortable></Column>
                <Column header="Max Lvl" field="max_level" sortable></Column>
            </template>
        </DataTable>
    </div>
    <div v-else class="margin-xl" style="border: 1px solid rgba(255, 255, 255, 0.1);">
        No wild locations
    </div>
</template>

<script lang="ts" setup>
import DataTable, { DataTableRowClickEvent } from "primevue/datatable";
import { useRouter } from "vue-router/auto";
import Column from "primevue/column";
import { Location, PokemonLocation } from "@/model/types";

defineProps<{
    locations: Location[] | PokemonLocation[]
}>();

const router = useRouter();

function onRowClicked(event: DataTableRowClickEvent) {
    router.push(`/locations/${event.data.id}`);
}
</script>

<style lang="scss" scoped>
:deep(.p-datatable .p-datatable-tbody > tr > td) {
    padding: 5px 10px;
}

:deep(.p-datatable .p-datatable-thead > tr > th) {
    padding: 7px 10px;
}
</style>