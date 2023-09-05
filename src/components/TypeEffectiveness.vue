<template>
    <div class="type-effectiveness">
        <template v-for="(effectiveness, type) in typeEffectiveness">
            <TypePill :type="type" />
            <div :class="`effectiveness multiplier-${effectiveness * 100}`">x{{ effectiveness }}</div>
        </template>
    </div>
</template>

<script lang="ts" setup>
import { Type } from "@/model/types";
import { getDefendingTypeEffectiveness } from "@/utils/get-type-weaknesses";
import { computed } from "vue";
import TypePill from "@/components/TypePill.vue";

const props = defineProps<{
    type: Type[];
}>();

const typeEffectiveness = computed(() => getDefendingTypeEffectiveness(props.type[0], props.type[1]));
</script>

<style lang="scss" scoped>
:deep(.type-pill) {
    border-radius: 3px 0 0 3px !important;
}

.type-effectiveness {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    align-items: center;
    grid-row-gap: 5px;
}

.effectiveness {
    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.5);
    font-size: 14px;
    font-weight: 600;
    padding-top: 2px;
    padding-bottom: 1px;
    text-align: center;
    border-radius: 0 3px 3px 0;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-left: none;
    width: 50px;
    box-shadow: -1px 0 0 rgba(255, 255, 255, 0.3), inset 3px 0 1px rgba(0, 0, 0, 0.2);

    &.multiplier-0 {
        background: rgb(24, 24, 24);
    }

    &.multiplier-25 {
        background: red;
    }

    &.multiplier-50 {
        background: rgb(121, 34, 34);
    }

    &.multiplier-100 {
        background: rgb(129, 129, 129);
    }

    &.multiplier-200 {
        background: rgb(42, 107, 17);
    }

    &.multiplier-400 {
        background: rgb(50, 202, 12);
    }
}
</style>