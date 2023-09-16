<template>
    <DefineTemplate v-slot="{ data }">
        <div class="move">
            <TypePill class="type-pill" :type="data.type" />
            <img class="damage-type special" v-if="data.skill_damage_type === 'SPECIAL'" :src="special">
            <img class="damage-type physical" v-else-if="data.skill_damage_type === 'PHYSICAL'" :src="physical">
            <img class="damage-type status" v-else :src="status">
            {{ data.name }}
        </div>
    </DefineTemplate>

    <Dropdown v-model="modelValue" :options="moves" optionLabel="name" placeholder="Select a Move" filter autoFilterFocus>
        <template #value="slotProps">
            <ReuseTemplate v-if="slotProps.value" :data="slotProps.value" />
        </template>
        <template #option="slotProps">
            <ReuseTemplate :data="slotProps.option" />
        </template>
    </Dropdown>
</template>

<script lang="ts" setup>
import Dropdown from "primevue/dropdown";
import { pokedexArrays } from "@/store/store";
import special from "@/assets/special.png";
import physical from "@/assets/physical.png";
import status from "@/assets/status.png";
import TypePill from "@/components/TypePill.vue";
import { createReusableTemplate } from '@vueuse/core'
import { Move } from "@/model/types";

const [DefineTemplate, ReuseTemplate] = createReusableTemplate<{ data: Move }>()
const moves = pokedexArrays.moves;

// const emits = defineEmits<{
//     "update:modelValue": [move: Move]
// }>();
const { modelValue } = defineModels<{
    modelValue?: ModelOptions<Move | null, { defaultValue: null }>
}>();
</script>

<style lang="scss" scoped>
.move {
    display: flex;
    gap: 7px;
    align-items: center;
}

.type-pill {
    min-width: 75px;
    max-width: 75px;
}

.damage-type {
    max-height: 14px;
}
</style>