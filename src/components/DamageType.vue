<template>
    <div class="damage-type">
        <img class="special" v-if="type === 'SPECIAL'" :src="special">
        <img class="physical" v-else-if="type === 'PHYSICAL'" :src="physical">
        <img class="status" v-else :src="status">

        {{ type }}
    </div>
</template>

<script lang="ts" setup>
import special from "@/assets/special.png";
import physical from "@/assets/physical.png";
import status from "@/assets/status.png";

defineProps<{
    type: "PHYSICAL" | "SPECIAL" | "STATUS"
}>();
</script>

<style lang="scss" scoped>
.damage-type {
    display: inline-flex;
    background: rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.1);
    align-items: center;
    gap: 5px;
    padding: 1px 8px;
    border-radius: 3px;
    font-size: 12px;
    font-weight: 700;

    img {
        max-height: 14px;

        &.physical {
            filter: brightness(0) saturate(100%) invert(28%) sepia(100%) saturate(1408%) hue-rotate(341deg) brightness(83%) contrast(89%);
        }

        &.special {
            filter: brightness(0) saturate(100%) invert(37%) sepia(67%) saturate(1373%) hue-rotate(184deg) brightness(86%) contrast(89%);
        }
    }
}
</style>