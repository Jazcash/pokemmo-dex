<template>
    <div>
        <DataTable :value="abilities" dataKey="id" sortField="name" :sortOrder="1" paginator :rows="20"
            :rowsPerPageOptions="[20, 50, 1000]" filterDisplay="menu" @row-select="onRowSelected" selectionMode="single"
            stripedRows>
            <Column header="Name" field="name" sortable filter style="width: 200px"></Column>
            <Column header="Description" field="description" sortable filter style="width: 200px"></Column>
            <Column header="Amount" field="learnedBy.length" sortable filter style="width: 200px"></Column>
        </DataTable>
    </div>
</template>

<script lang="ts" setup>
import DataTable, { DataTableRowSelectEvent } from "primevue/datatable";
import { useRouter } from "vue-router/auto";
import Column from "primevue/column";
import { LearnedAbility } from "@/model/types";

defineProps<{
    abilities: LearnedAbility[]
}>();

const router = useRouter();

function onRowSelected(event: DataTableRowSelectEvent) {
    if ("ctrlKey" in event.originalEvent && event.originalEvent.ctrlKey) {
        window.open(`/#/abilities/${event.data.id}`, "_blank");
    } else {
        router.push(`/abilities/${event.data.id}`);
    }
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