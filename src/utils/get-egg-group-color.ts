import { EggGroup } from "@/model/types";

export function getEggGroupColor(eggGroup: EggGroup) {
    return {
        [EggGroup.BUG]: "#AAC22A",
        [EggGroup.CANNOT_BREED]: "#333333",
        [EggGroup.CHAOS]: "#8A8A8A",
        [EggGroup.DITTO]: "#A664BF",
        [EggGroup.DRAGON]: "#7A42FF",
        [EggGroup.FAIRY]: "#FFC8F0",
        [EggGroup.FIELD]: "#E0C068",
        [EggGroup.FLYING]: "#B29AFA",
        [EggGroup.GENDERLESS]: "#0080C0",
        [EggGroup.PLANT]: "#82D25A",
        [EggGroup.HUMANOID]: "#D29682",
        [EggGroup.MINERAL]: "#7A6252",
        [EggGroup.MONSTER]: "#D25064",
        [EggGroup.WATER_A]: "#97B5FD",
        [EggGroup.WATER_B]: "#729AFA",
        [EggGroup.WATER_C]: "#5876BE",
    }[eggGroup];
}
