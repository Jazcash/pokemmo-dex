<template>
    <div>
        <DataTable :value="moves" dataKey="id" sortField="name" :sortOrder="1" paginator :rows="20"
            :rowsPerPageOptions="[20, 50, 1000]" filterDisplay="menu" @row-click="onRowClicked" selectionMode="single"
            stripedRows>
            <Column header="Name" field="name" sortable filter style="width: 200px"></Column>
            <Column header="Type" field="type" sortable style="width: 85px">
                <template #body="slotProps">
                    <TypePill :type="slotProps.data.type" />
                </template>
            </Column>
            <Column header="Damage Type" field="skill_damage_type" sortable style="width: 150px">
                <template #body="slotProps">
                    <DamageType :type="slotProps.data.skill_damage_type" />
                </template>
            </Column>
            <Column header="Power" field="base_power" sortable style="width: 1px"></Column>
            <Column header="Accuracy" field="base_accuracy" sortable style="width: 1px"></Column>
            <Column header="PP" field="base_pp" sortable style="width: 1px"></Column>
            <Column header="Priority" field="priority" sortable style="width: 1px"></Column>
            <Column header="Targets" field="target_type" sortable>
                <template #body="slotProps">
                    {{ MoveTarget[slotProps.data.target_type] }}
                </template>
            </Column>
            <template v-if="'learnType' in moves[0]">
                <Column header="Learn Type" field="learnType" sortable>
                    <template #body="slotProps">
                        {{ getMoveLearnTypeText(slotProps.data.learnType) }}
                    </template>
                </Column>
                <Column header="Level" field="level" sortable></Column>
            </template>
        </DataTable>
    </div>
</template>

<script lang="ts" setup>
import DataTable, { DataTableRowClickEvent } from "primevue/datatable";
import { useRouter } from "vue-router/auto";
import Column from "primevue/column";
import DamageType from "@/components/DamageType.vue";
import TypePill from "@/components/TypePill.vue";
import { Move, LearnedMove, MoveTarget } from "@/model/types";
import { getMoveLearnTypeText } from "@/utils/get-move-learn-type-text";

defineProps<{
    moves: Move[] | LearnedMove[]
}>();

const router = useRouter();

function onRowClicked(event: DataTableRowClickEvent) {
    router.push(`/moves/${event.data.id}`);
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