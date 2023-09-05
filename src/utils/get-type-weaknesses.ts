import { Type } from "@/model/types";

const defendingTypeEffectiveness: Record<Type, { immuneTo: Type[]; weakTo: Type[]; resistantTo: Type[] }> = {
    [Type.BUG]: {
        resistantTo: [Type.FIGHTING, Type.GRASS, Type.GROUND],
        weakTo: [Type.FIRE, Type.FLYING, Type.ROCK],
        immuneTo: [],
    },
    [Type.DARK]: {
        resistantTo: [Type.DARK, Type.GHOST],
        weakTo: [Type.BUG, Type.FIGHTING],
        immuneTo: [Type.PSYCHIC],
    },
    [Type.DRAGON]: {
        resistantTo: [Type.ELECTRIC, Type.FIRE, Type.GRASS, Type.WATER],
        weakTo: [Type.DRAGON, Type.ICE],
        immuneTo: [],
    },
    [Type.ELECTRIC]: {
        resistantTo: [Type.ELECTRIC, Type.FLYING, Type.STEEL],
        weakTo: [Type.GROUND],
        immuneTo: [],
    },
    [Type.FIGHTING]: {
        resistantTo: [Type.BUG, Type.DARK, Type.ROCK],
        weakTo: [Type.FLYING, Type.PSYCHIC],
        immuneTo: [],
    },
    [Type.FIRE]: {
        resistantTo: [Type.BUG, Type.FIRE, Type.GRASS, Type.ICE, Type.STEEL],
        weakTo: [Type.GROUND, Type.ROCK, Type.WATER],
        immuneTo: [],
    },
    [Type.FLYING]: {
        resistantTo: [Type.BUG, Type.FIGHTING, Type.GRASS],
        weakTo: [Type.ELECTRIC, Type.ICE, Type.ROCK],
        immuneTo: [Type.GROUND],
    },
    [Type.GHOST]: {
        resistantTo: [Type.BUG, Type.POISON],
        weakTo: [Type.DARK, Type.GHOST],
        immuneTo: [Type.FIGHTING, Type.NORMAL],
    },
    [Type.GRASS]: {
        resistantTo: [Type.ELECTRIC, Type.GRASS, Type.GROUND, Type.WATER],
        weakTo: [Type.BUG, Type.FIRE, Type.FLYING, Type.ICE, Type.POISON],
        immuneTo: [],
    },
    [Type.GROUND]: {
        resistantTo: [Type.POISON, Type.ROCK],
        weakTo: [Type.GRASS, Type.ICE, Type.WATER],
        immuneTo: [Type.ELECTRIC],
    },
    [Type.ICE]: {
        resistantTo: [Type.ICE],
        weakTo: [Type.FIGHTING, Type.FIRE, Type.ROCK, Type.STEEL],
        immuneTo: [],
    },
    [Type.NORMAL]: {
        resistantTo: [],
        weakTo: [Type.FIGHTING],
        immuneTo: [Type.GHOST],
    },
    [Type.POISON]: {
        resistantTo: [Type.BUG, Type.FIGHTING, Type.GRASS, Type.POISON],
        weakTo: [Type.GROUND, Type.PSYCHIC],
        immuneTo: [],
    },
    [Type.PSYCHIC]: {
        resistantTo: [Type.FIGHTING, Type.PSYCHIC],
        weakTo: [Type.BUG, Type.DARK, Type.GHOST],
        immuneTo: [],
    },
    [Type.ROCK]: {
        resistantTo: [Type.FIRE, Type.FLYING, Type.NORMAL, Type.POISON],
        weakTo: [Type.FIGHTING, Type.GRASS, Type.GROUND, Type.STEEL, Type.WATER],
        immuneTo: [],
    },
    [Type.STEEL]: {
        resistantTo: [
            Type.BUG,
            Type.DARK,
            Type.DRAGON,
            Type.FLYING,
            Type.GHOST,
            Type.GRASS,
            Type.ICE,
            Type.NORMAL,
            Type.PSYCHIC,
            Type.ROCK,
            Type.STEEL,
        ],
        weakTo: [Type.FIGHTING, Type.FIRE, Type.GROUND],
        immuneTo: [Type.POISON],
    },
    [Type.WATER]: {
        resistantTo: [Type.FIRE, Type.ICE, Type.STEEL, Type.WATER],
        weakTo: [Type.ELECTRIC, Type.GRASS],
        immuneTo: [],
    },
};

export function getDefendingTypeEffectiveness(typeA: Type, typeB: Type): Record<Type, number> {
    const effectiveness: any = {};
    for (const type in Type) {
        effectiveness[type] =
            getEffectivenessMultiplier(type as Type, typeA) *
            (typeA !== typeB ? getEffectivenessMultiplier(type as Type, typeB) : 1);
    }

    return effectiveness;
}

export function getEffectivenessMultiplier(attackingType: Type, defendingType: Type): number {
    const defenderEffectiveness = defendingTypeEffectiveness[defendingType];

    if (defenderEffectiveness.resistantTo.includes(attackingType)) {
        return 0.5;
    } else if (defenderEffectiveness.weakTo.includes(attackingType)) {
        return 2;
    } else if (defenderEffectiveness.immuneTo.includes(attackingType)) {
        return 0;
    }

    return 1;
}
