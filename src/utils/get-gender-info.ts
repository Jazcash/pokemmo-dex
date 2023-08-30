const genderLookup: Record<number, { femalePercent: number, text: string }> = {
    0: { femalePercent: 0, text: "Only Male" },
    31: { femalePercent: 0.125, text: "87.5% Male" },
    63: { femalePercent: 0.25, text: "75% Male" },
    127: { femalePercent: 0.5, text: "50% Male" },
    191: { femalePercent: 0.75, text: "25% Male" },
    223: { femalePercent: 0.875, text: "12.5% Male" },
    254: { femalePercent: 1, text: "Only Female" },
    255: { femalePercent: 0, text: "Genderless" },
};

export function getGenderInfo(genderRatio: number) {
    return genderLookup[genderRatio] ?? { femalePercent: 0, text: "N/A" };
}