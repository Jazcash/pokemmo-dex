import pokedex from "@/assets/pokedex.json";
import { Pokemon, Move, Ability, Location } from "@/model/types";

const pokemon: Record<number, Pokemon> = {};
const moves: Record<number, Move> = {};
const abilities: Record<number, Ability> = {};
const locations: Record<string, Location> = {};

const pokemonArr = pokedex.pokemon as Pokemon[];
const abilitiesArr: Ability[] = [];
const locationsArr: Location[] = [];
const movesArr: Move[] = [];

for (const move of pokedex.moves) {
    const mov = {
        ...move,
        learnedBy: [],
    };

    moves[move.id] = mov;
    movesArr.push(mov);
}

for (const poke of pokemonArr) {
    for (const move of poke.moves) {
        if (!moves[move.id].learnedBy.includes(poke.id)) {
            moves[move.id].learnedBy.push(poke.id);
        }
    }

    for (const ability of poke.abilities) {
        if (ability.description) {
            if (!abilities[ability.id]) {
                const abil: Ability = {
                    id: ability.id,
                    name: ability.name,
                    description: ability.description,
                    learnedBy: [],
                };
                abilities[ability.id] = abil;
                abilitiesArr.push(abil);
                abilities[ability.id].learnedBy = [];
            }
            abilities[ability.id].learnedBy.push(poke.id);
        }
    }

    for (const location of poke.locations) {
        const locationId = `${location.region_name}_${location.location}`
            .toLowerCase()
            .replace(/[ \/]/g, "-")
            .replace(/[\(\)\.']/g, "");
        if (locations[locationId]) {
            locations[locationId].pokemonFound.push({
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
            locations[locationId] = loc;
            locationsArr.push(loc);
        }
    }

    pokemon[poke.id] = poke;
}

export const pokedexArrays = {
    pokemon: pokemonArr,
    moves: movesArr,
    abilities: abilitiesArr,
    locations: locationsArr,
};

export const pokedexLookups = { pokemon, moves, abilities, locations };
