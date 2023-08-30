<template>
    <div v-if="pokemon" class="container">
        <div class="flex-row gap-lg">
            <div class="battlesprite">
                <img class="pixelart" :src="`/battlesprites/${pokemon.id}.png`">
                <div class="type">
                    <TypePill :type="pokemon.types[0]" />
                    <TypePill v-if="pokemon.types[1] && pokemon.types[1] !== pokemon.types[0]" :type="pokemon.types[1]" />
                </div>
            </div>

            <div class="flex-col fullwidth gap-sm">
                <h1 class="flex-row flex-space-between">
                    <span>{{ pokemon.name }}</span>
                    <span>#{{ String(pokemon.id).padStart(3, "0") }}</span>
                </h1>

                <div class="flex-row gap-lg">
                    <div class="gridform">
                        <div>Tier</div>
                        <div>{{ pokemon.tier }}</div>

                        <div>Egg Group</div>
                        <div class="flex-row gap-sm">
                            <EggGroup :eggGroup="pokemon.egg_groups[0]" />
                            <EggGroup v-if="pokemon.egg_groups[1]" :eggGroup="pokemon.egg_groups[1]" />
                        </div>

                        <div>Gender Ratio</div>
                        <div>
                            <GenderRatio :genderRatio="pokemon.gender_ratio" />
                        </div>

                        <div>Held Items</div>
                        <div class="items flex-row">
                            <template v-if="pokemon.held_items.length">
                                <img v-for="item in pokemon.held_items" :src="`/itemicons/${item.id}.png`" class="pixelart">
                            </template>
                            <template v-else>
                                None
                            </template>
                        </div>
                    </div>

                    <div class="gridform" style="row-gap: 5px">
                        <div>Weight</div>
                        <div>{{ pokemon.weight / 10 }}kg</div>

                        <div>Yields</div>
                        <div class="flex-row gap-md">
                            <span>
                                Exp: {{ pokemon.yields.exp }}
                            </span>
                            <span v-if="pokemon.yields.ev_hp">
                                HP: {{ pokemon.yields.ev_hp }}
                            </span>
                            <span v-if="pokemon.yields.ev_attack">
                                Atk: {{ pokemon.yields.ev_attack }}
                            </span>
                            <span v-if="pokemon.yields.ev_defense">
                                Def: {{ pokemon.yields.ev_defense }}
                            </span>
                            <span v-if="pokemon.yields.ev_sp_attack">
                                SpA: {{ pokemon.yields.ev_sp_attack }}
                            </span>
                            <span v-if="pokemon.yields.ev_sp_defense">
                                SpD: {{ pokemon.yields.ev_sp_defense }}
                            </span>
                            <span v-if="pokemon.yields.ev_speed">
                                Spe: {{ pokemon.yields.ev_speed }}
                            </span>
                        </div>

                        <div>Catch Rate</div>
                        <div>
                            {{ pokemon.catchRate }}
                        </div>

                        <div>Levelling Rate</div>
                        <div>
                            {{ pokemon.exp_type }}
                        </div>
                    </div>
                </div>


                <!-- <div>
                    {{ pokemon.abilities[0].name }} /
                    {{ pokemon.abilities[1].name }} /
                    {{ pokemon.abilities[2].name }}
                </div> -->
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import pokedex from "@/assets/pokedex.json";
import { computed } from "vue";
import TypePill from "@/components/TypePill.vue";
import EggGroup from "@/components/EggGroup.vue";
import GenderRatio from "@/components/GenderRatio.vue";
import { Pokemon } from "@/model/types";

const props = defineProps<{
    pokemonId: number;
}>();

const pokemon = computed(() => pokedex.pokemon.find((poke: any) => poke.id === props.pokemonId) as Pokemon);
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 15px;
}

.battlesprite {
    display: flex;
    border: 1px dashed rgba(255, 255, 255, 0.2);
    position: relative;
    max-height: 192px;
    max-width: 192px;

    img {
        width: 192px;
        height: 192px;
    }

    .type {
        position: absolute;
        bottom: 7px;
        left: 7px;
        display: flex;
        gap: 5px;
    }
}

h1 {
    font-size: 48px;
    margin: 0;
    width: 100%;
    display: flex;
}

.gridform {
    row-gap: 8px;
}
</style>