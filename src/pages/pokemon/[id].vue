<route lang="json5">
{ props: true }
</route>

<template>
    <div v-if="pokemon" class="flex-col flex-grow gap-lg padding-lg">
        <div class="flex-row gap-lg">
            <div class="battlesprite">
                <div :class="`battlesprite-${pokemon.id}-front-n pixelart img`"></div>
                <div class="type">
                    <TypePill :type="pokemon.types[0]" />
                    <TypePill v-if="pokemon.types[1] && pokemon.types[1] !== pokemon.types[0]" :type="pokemon.types[1]" />
                </div>
            </div>

            <div class="flex-col fullwidth gap-sm">
                <h1 class="flex-row flex-space-between">
                    <a :href="`https://pokemondb.net/pokedex/${pokemon.name}`">
                        {{ pokemon.name }}
                    </a>
                    <span>#{{ String(pokemon.id).padStart(3, "0") }}</span>
                </h1>

                <div class="flex-row flex-space-between gap-lg">
                    <div class="gridform">
                        <div class="label">Tier</div>
                        <div class="value">{{ pokemon.tier }}</div>

                        <div class="label">Egg Group</div>
                        <div class="flex-row gap-sm">
                            <EggGroup :eggGroup="pokemon.egg_groups[0]" />
                            <EggGroup v-if="pokemon.egg_groups[1]" :eggGroup="pokemon.egg_groups[1]" />
                        </div>

                        <div class="label">Gender Ratio</div>
                        <div>
                            <GenderRatio :genderRatio="pokemon.gender_ratio" />
                        </div>

                        <div class="label">Held Items</div>
                        <div class="value items flex-row">
                            <template v-if="pokemon.held_items.length">
                                <div v-for="item in pokemon.held_items" :class="`itemicon-${item.id}`"></div>
                            </template>
                            <template v-else>
                                None
                            </template>
                        </div>
                    </div>

                    <div class="gridform" style="row-gap: 5px">
                        <div class="label">Weight</div>
                        <div class="value">{{ pokemon.weight / 10 }}kg</div>

                        <div class="label">Yields</div>
                        <div class="value flex-row gap-md">
                            <span>
                                {{ pokemon.yields.exp }} EXP
                            </span>
                            <span v-if="pokemon.yields.ev_hp">
                                {{ pokemon.yields.ev_hp }} HP
                            </span>
                            <span v-if="pokemon.yields.ev_attack">
                                {{ pokemon.yields.ev_attack }} Atk
                            </span>
                            <span v-if="pokemon.yields.ev_defense">
                                {{ pokemon.yields.ev_defense }} Def
                            </span>
                            <span v-if="pokemon.yields.ev_sp_attack">
                                {{ pokemon.yields.ev_sp_attack }} SpA
                            </span>
                            <span v-if="pokemon.yields.ev_sp_defense">
                                {{ pokemon.yields.ev_sp_defense }} SpD
                            </span>
                            <span v-if="pokemon.yields.ev_speed">
                                {{ pokemon.yields.ev_speed }} Spe
                            </span>
                        </div>

                        <div class="label">Catch Rate</div>
                        <div class="value">
                            {{ pokemon.catchRate }}
                        </div>

                        <div class="label">Levelling Rate</div>
                        <div class="value">
                            {{ levellingRate }}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex-col gap-md">
            <h2>Abilities</h2>

            <template v-for="(ability, i) of pokemon.abilities" class="flex-col">
                <div v-if="ability.description">
                    <h3>
                        <router-link :to="`/abilities/${ability.id}`">
                            {{ ability.name }}
                        </router-link>
                        <span v-if="i === 2"> (Hidden Ability)</span>
                    </h3>
                    <p>{{ ability.description }}</p>
                </div>
            </template>
        </div>

        <div class="flex-row gap-lg flex-space-between">
            <div class="flex-col gap-md">
                <h2>Stats</h2>
                <BaseStats :stats="pokemon.stats" />
            </div>
            <div class="flex-col gap-md">
                <h2>Type Defenses</h2>
                <TypeEffectiveness :type="pokemon.types" />
            </div>
        </div>

        <TabView>
            <TabPanel header="Moves">
                <Moves :moves="moves" />
            </TabPanel>
            <TabPanel header="Locations">
                <Locations :locations="pokemon.locations" />
            </TabPanel>
        </TabView>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { pokedexLookups } from "@/store/store";
import TypePill from "@/components/TypePill.vue";
import Moves from "@/components/Moves.vue";
import EggGroup from "@/components/EggGroup.vue";
import Locations from "@/components/Locations.vue";
import GenderRatio from "@/components/GenderRatio.vue";
import BaseStats from "@/components/BaseStats.vue";
import TypeEffectiveness from "@/components/TypeEffectiveness.vue";
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';


const props = defineProps<{
    id: string
}>();

const pokemon = computed(() => pokedexLookups.pokemon[parseInt(props.id)]);
const moves = computed(() => pokemon.value.moves.map(move => ({ ...pokedexLookups.moves[move.id], ...move })));
const levellingRate = computed(() => pokemon.value.exp_type.toLocaleLowerCase().split("_").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" "));

</script>

<style lang="scss" scoped>
.battlesprite {
    display: flex;
    border: 1px dashed rgba(255, 255, 255, 0.2);
    position: relative;
    min-width: 192px;
    min-height: 192px;

    .img {
        transform: scale(2);
        transform-origin: 0 0;
    }

    .type {
        position: absolute;
        bottom: 7px;
        left: 7px;
        display: flex;
        gap: 5px;
    }
}

.gridform {
    row-gap: 8px;
    column-gap: 10px;
}

.label {}

.value {
    font-weight: 600;
}
</style>