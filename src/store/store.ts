import pokedex from "@/assets/pokedex.json";
import { Pokemon, Move, Ability, Location, LearnMoveType, Type } from "@/model/types";

const pokemonLookup: Record<number, Pokemon> = {};
const movesLookup: Record<number, Move> = {};
const abilitiesLookup: Record<number, Ability> = {};
const locationsLookup: Record<string, Location> = {};

const pokemonArr = pokedex.pokemon as Pokemon[];
const abilitiesArr: Ability[] = [];
const locationsArr: Location[] = [];
const movesArr: Move[] = [];

for (const move of pokedex.moves) {
    const mov: Move = {
        ...move,
        type: move.type as Type,
        learnedBy: [],
    };

    movesLookup[move.id] = mov;
    movesArr.push(mov);
}

for (const poke of pokemonArr) {
    for (const ability of poke.abilities) {
        if (ability.description) {
            if (!abilitiesLookup[ability.id]) {
                const abil: Ability = {
                    id: ability.id,
                    name: ability.name,
                    description: ability.description,
                    learnedBy: [],
                };
                abilitiesLookup[ability.id] = abil;
                abilitiesArr.push(abil);
                abilitiesLookup[ability.id].learnedBy = [];
            }
            abilitiesLookup[ability.id].learnedBy.push(poke.id);
        }
    }

    for (const location of poke.locations) {
        const locationId = `${location.region_name}_${location.location}`
            .toLowerCase()
            .replace(/[ \/]/g, "-")
            .replace(/[\(\)\.']/g, "");
        if (locationsLookup[locationId]) {
            locationsLookup[locationId].pokemonFound.push({
                pokemonId: poke.id,
                ...location,
            });
        } else {
            const loc = {
                id: locationId,
                region_id: location.region_id,
                region_name: location.region_name,
                location: location.location,
                pokemonFound: [
                    {
                        pokemonId: poke.id,
                        ...location,
                    },
                ],
            };
            locationsLookup[locationId] = loc;
            locationsArr.push(loc);
        }
    }

    pokemonLookup[poke.id] = poke;
}

for (const poke of pokemonArr) {
    for (const move of poke.moves) {
        const evolutions = getAllEvolutions(poke.id);
        evolutions.forEach((ev, i) => {
            if (!movesLookup[move.id].learnedBy.includes(ev.id)) {
                movesLookup[move.id].learnedBy.push(ev.id);

                if (i > 0 && move.learnType === LearnMoveType.EGG_MOVE) {
                    ev.moves.push(move);
                }
            }
        });
    }
}

movesArr.sort((a, b) => a.name.localeCompare(b.name));

export const pokedexArrays = {
    pokemon: pokemonArr,
    moves: movesArr,
    abilities: abilitiesArr,
    locations: locationsArr,
};

export const pokedexLookups = {
    pokemon: pokemonLookup,
    moves: movesLookup,
    abilities: abilitiesLookup,
    locations: locationsLookup,
};

export function getAllEvolutions(id: number): Pokemon[] {
    const poke = pokemonLookup[id]!;
    const evolutions: Pokemon[] = [poke];

    for (const ev of poke.evolutions) {
        evolutions.push(...getAllEvolutions(ev.id));
    }

    return evolutions;
}
