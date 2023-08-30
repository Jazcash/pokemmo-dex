import { Type } from "@/model/types";

export function getTypeColor(type: Type) {
    return {
        [Type.BUG]: "#A6B91A",
        [Type.DARK]: "#705746",
        [Type.DRAGON]: "#6F35FC",
        [Type.ELECTRIC]: "#F7D02C",
        [Type.FIGHTING]: "#C22E28",
        [Type.FIRE]: "#EE8130",
        [Type.FLYING]: "#A98FF3",
        [Type.GHOST]: "#735797",
        [Type.GRASS]: "#7AC74C",
        [Type.GROUND]: "#E2BF65",
        [Type.ICE]: "#96D9D6",
        [Type.NORMAL]: "#A8A77A",
        [Type.POISON]: "#A33EA1",
        [Type.PSYCHIC]: "#F95587",
        [Type.ROCK]: "#B6A136",
        [Type.STEEL]: "#B7B7CE",
        [Type.WATER]: "#6390F0",
    }[type];
}