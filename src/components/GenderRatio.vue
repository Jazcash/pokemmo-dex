<template>
    <div class="pill">
        <div class="content">{{ genderInfo.text }}</div>
    </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { getGenderInfo } from "@/utils/get-gender-info";

const props = defineProps<{
    genderRatio: number
}>();

const genderInfo = computed(() => getGenderInfo(props.genderRatio));
const percent = computed(() => `${genderInfo.value.femalePercent * 100}%`);
const displayFemaleBar = computed(() => genderInfo.value.femalePercent > 0 ? "visible" : "none");
const backgroundColor = computed(() => props.genderRatio !== 255 ? "rgb(65, 135, 255)" : "#333");
</script>

<style lang="scss" scoped>
.pill {
    color: #fff;
    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.4);
    font-size: 12px;
    font-weight: 600;
    padding: 3px 7px;
    border-radius: 3px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: inset 0 0 1px 0 rgba(0, 0, 0, 0.4);
    background: v-bind(backgroundColor);
    position: relative;
    width: 100px;
    text-align: center;
    &:before {
        content: "";
        position: absolute;
        top: -1px;
        left: -1px;
        width: v-bind(percent);
        height: 100%;
        background: rgb(255, 141, 255);
        border-radius: 3px;
        border: 1px solid rgba(255, 255, 255, 0.3);
        display: v-bind(displayFemaleBar);
    }
    .content {
        position: relative;
        z-index: 1;
    }
    &.genderless {
        background: #333;
    }
}
</style>