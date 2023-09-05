import { MoveTarget } from "@/model/types";

const targetTypeDescriptions = {
    [MoveTarget.SINGLE_ADJACENT]: "Targets a single adjacent Pokémon.",
    [MoveTarget.USER_OR_SINGLE_ADJACENT]: "Targets either the user or an adjacent Pokémon on the user's team.",
    [MoveTarget.SINGLE_ALLY]: "Targets an adjacent Pokémon on the user's team.",
    [MoveTarget.SINGLE_ADJACENT_FOE]: "Targets a single adjacent foe, but not an ally.",
    [MoveTarget.ALL_ADJACENT]: "Targets all adjacent Pokémon.",
    [MoveTarget.ALL_ADJACENT_FOES]: "Targets all adjacent foes.",
    [MoveTarget.ALL_ALLIES]: "Targets all Pokémon on the user's team.",
    [MoveTarget.SELF]: "Targets the user.",
    [MoveTarget.ALL]: "Targets the entire field.",
    [MoveTarget.USER_AND_RANDOM_ADJACENT]: "Targets the user, but hits a random adjacent opponent.",
    [MoveTarget.ALL_2]: "Targets the entire field.",
    [MoveTarget.ALL_FOES]: "Targets all Pokémon on the opposing field.",
    [MoveTarget.ALL_ALLIES_2]: "Targets all Pokémon on the users team",
    [MoveTarget.SELF_2]: "Targets the user.",
    [MoveTarget.ANY_SINGLE]: "Targets any single Pokémon on the field including non-adjacent ones.",
};

export function getTargetText(targetType: MoveTarget): string {
    return targetTypeDescriptions[targetType];
}
