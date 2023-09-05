<template>
    <div class="egg-group" :style="{ 'background-color': getEggGroupColor(eggGroup) }">
        <div :class="`monstericon-650 pixelart egg`"></div>
        {{ eggGroup }}
    </div>
</template>

<script lang="ts" setup>
import { EggGroup } from "@/model/types";
import { getEggGroupColor } from "@/utils/get-egg-group-color";

defineProps<{
    eggGroup: EggGroup
}>();
</script>

<style lang="scss" scoped>
.egg-group {
    color: #fff;
    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.4);
    font-size: 10px;
    font-weight: 600;
    padding: 3px 7px 3px 18px;
    border-radius: 3px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    text-transform: capitalize;
    white-space: nowrap;
    display: inline-flex;
    position: relative;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
}

.egg {
    position: absolute;
    left: 9px;
    top: 7px;
    transform: translateX(-50%) translateY(-50%);
}
</style>