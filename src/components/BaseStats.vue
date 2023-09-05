<template>
    <div class="stats">
        <table>
            <tr v-for="stat of statsObj">
                <td>{{ stat.label }}</td>
                <td>{{ stat.value }}</td>
                <td>
                    <div class="bar"
                        :style="`width: ${(stat.value / stat.max) * 120}px; background-color: ${getColor(stat.value / stat.max)}`">
                    </div>
                </td>
            </tr>
        </table>
    </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps<{
    stats: {
        hp: number;
        attack: number;
        defense: number;
        sp_attack: number;
        sp_defense: number;
        speed: number;
        total: number;
    }
}>();

const statsObj = computed(() => [
    { label: "HP", value: props.stats.hp, max: 125 },
    { label: "Attack", value: props.stats.attack, max: 125 },
    { label: "Defense", value: props.stats.defense, max: 125 },
    { label: "Sp. Attack", value: props.stats.sp_attack, max: 125 },
    { label: "Sp. Defense", value: props.stats.sp_defense, max: 125 },
    { label: "Speed", value: props.stats.speed, max: 125 },
    { label: "Total", value: props.stats.total, max: 600 },
]);

function getColor(percent: number) {
    return `hsl(${percent * 100}, 50%, 50%)`;
}
</script>

<style lang="scss" scoped>
.bar {
    height: 10px;
}

td {
    padding: 0 5px;
}
</style>