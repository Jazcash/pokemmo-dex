<template>
    <div>
        <DataTable :value="abilities" dataKey="id" sortField="id" :sortOrder="1" paginator :rows="20"
            :rowsPerPageOptions="[20, 50, 1000]" filterDisplay="menu" @row-click="onRowClicked" selectionMode="single"
            stripedRows>
            <Column header="Name" field="name" sortable filter style="width: 200px"></Column>
            <Column header="Description" field="description" sortable filter style="width: 200px"></Column>
        </DataTable>
    </div>
</template>

<script lang="ts" setup>
import DataTable, { DataTableRowClickEvent } from "primevue/datatable";
import { useRouter } from "vue-router/auto";
import Column from "primevue/column";
import { LearnedAbility } from "@/model/types";

defineProps<{
    abilities: LearnedAbility[]
}>();

const router = useRouter();

function onRowClicked(event: DataTableRowClickEvent) {
    router.push(`/abilities/${event.data.id}`);
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