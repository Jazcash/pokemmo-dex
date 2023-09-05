<template>
    <div class="type-pill" :style="{ 'background-color': getTypeColor(type) }">
        {{ type }}
    </div>
</template>

<script lang="ts" setup>
import { Type } from "@/model/types";
import { getTypeColor } from "@/utils/get-type-color";

defineProps<{
    type: Type
}>();
</script>

<style lang="scss" scoped>
.type-pill {
    color: #fff;
    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.4);
    font-size: 10px;
    font-weight: 600;
    padding: 3px 7px;
    border-radius: 3px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    display: inline-flex;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    max-height: 22px;
    justify-content: center;
}
</style>