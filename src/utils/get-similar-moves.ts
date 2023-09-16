import { pokedexArrays } from "@/store/store";

const similarMoves = [
    ["U-Turn", "Volt Switch", "Teleport"],
    ["Recover", "Roost", "Synthesis", "Moonlight", "Morning Sun", "Milk Drink", "Slack Off", "Soft-Boiled", "Wish"],
    ["Stealth Rock", "Spikes", "Toxic Spikes"],
];

const similiarMoveIds = similarMoves.map((moves) => {
    return moves.map((moveName) => {
        const moveObj = pokedexArrays.moves.find((move) => move.name === moveName);
        if (!moveObj) {
            throw new Error(`Could not find move with name: ${moveName}`);
        }
        return moveObj.id;
    });
});

export function getSimilarMoves(searchMoveId: number): number[] {
    for (const moveIds of similiarMoveIds) {
        for (const moveId of moveIds) {
            if (moveId === moveId) {
                return moveIds;
            }
        }
    }

    return [searchMoveId];
}
