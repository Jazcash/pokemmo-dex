import { LearnMoveType } from "@/model/types";

const learnTypeDescriptions = {
    [LearnMoveType.LEVEL]: "Level",
    [LearnMoveType.TM]: "TM",
    [LearnMoveType.EGG_MOVE]: "Egg Move",
    [LearnMoveType.SPECIAL]: "Special",
    [LearnMoveType.TUTOR]: "Move Tutor",
};

export function getMoveLearnTypeText(learnMoveType: LearnMoveType): string {
    return learnTypeDescriptions[learnMoveType];
}
