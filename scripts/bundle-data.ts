// make sure latest PokeMMO exported client data is exported to the data/ dir. Include battlesprites, itemicons, monstericons and pokedex info

import fs from "fs";
import nsg from "node-sprite-generator";
import path from "path";

const pokemon: any[] = [];
const moves: any[] = [];

const pokedexFiles = await fs.promises.readdir("data/info");
const catchRatesStr = await fs.promises.readFile("data/catch_rates.json", { encoding: "utf-8" });
const catchRates = JSON.parse(catchRatesStr);

const abilitiesStr = await fs.promises.readFile("data/abilities.json", { encoding: "utf-8" });
const abilitiesArr = JSON.parse(abilitiesStr);
const abilities: Record<string, string> = {};
for (const ability of abilitiesArr) {
    abilities[ability.name] = ability.description;
}

for (const file of pokedexFiles) {
    if (file.endsWith("json")) {
        const pokedexEntryStr = await fs.promises.readFile(`data/info/${file}`, { encoding: "utf-8" });
        const pokedexEntry = JSON.parse(pokedexEntryStr);

        pokedexEntry.tier = pokedexEntry.tiers[0];
        delete pokedexEntry.tiers;

        const poke = catchRates.find((poke: any) => poke.id === pokedexEntry.id);
        pokedexEntry.catchRate = poke.catchRate;

        pokedexEntry.stats.total =
            pokedexEntry.stats.hp + pokedexEntry.stats.attack + pokedexEntry.stats.defense + pokedexEntry.stats.sp_attack + pokedexEntry.stats.sp_defense + pokedexEntry.stats.speed;

        for (const ability of pokedexEntry.abilities) {
            if (abilities[ability.name]) {
                ability.description = abilities[ability.name];
            }
        }

        for (const move of pokedexEntry.moves) {
            move.learnType = move.type;
            delete move.type;
        }

        pokemon.push(pokedexEntry);
    }
}

const moveFiles = await fs.promises.readdir("data/info/skills");
for (const file of moveFiles) {
    if (file.endsWith("json")) {
        const moveEntryStr = await fs.promises.readFile(`data/info/skills/${file}`, { encoding: "utf-8" });
        const moveEntry = JSON.parse(moveEntryStr);
        moves.push(moveEntry);
    }
}

const itemsStr = await fs.promises.readFile("data/items.json", { encoding: "utf-8" });
const itemsArr = JSON.parse(itemsStr);
const items: Record<string, string> = {};
for (const item of itemsArr) {
    items[item.id] = item.name.english;
}

await fs.promises.writeFile("src/assets/pokedex.json", JSON.stringify({ pokemon, moves, abilities, items }));

const battleSpritePaths = pokemon.flatMap((poke) => {
    const normalPath = getFirstValidFilePath([`data/battlesprites/${poke.id}-front-n.png`, `data/battlesprites/${poke.id}-front-n-f.png`, `data/battlesprites/${poke.id}-front-n-m.png`]);
    const shinyPath = normalPath.replace("-n", "-s");

    return [normalPath, shinyPath];
});

nsg(
    {
        src: battleSpritePaths,
        stylesheet: "css",
        spritePath: "src/assets/battlesprites.png",
        stylesheetPath: "src/assets/battlesprites.css",
        stylesheetOptions: {
            /** @ts-ignore */
            nameMapping: (filePath: string) => `battlesprite-${path.parse(filePath).name}`.replace(/\-f$|\-m$/g, ""),
        },
        compositor: "jimp",
        layout: "packed",
    },
    (err) => {
        if (err) {
            console.error(err);
        }
    }
);

nsg(
    {
        src: ["data/monstericons/*-0.png"],
        stylesheet: "css",
        spritePath: "src/assets/monstericons.png",
        stylesheetPath: "src/assets/monstericons.css",
        stylesheetOptions: {
            /** @ts-ignore */
            nameMapping: (filePath: string) => `monstericon-${path.parse(filePath).name.split("-")[0]}`,
        },
        compositor: "jimp",
        layout: "packed",
    },
    (err) => {
        if (err) {
            console.error(err);
        }
    }
);

nsg(
    {
        src: ["data/itemicons/*.png"],
        stylesheet: "css",
        spritePath: "src/assets/itemicons.png",
        stylesheetPath: "src/assets/itemicons.css",
        stylesheetOptions: {
            /** @ts-ignore */
            nameMapping: (filePath: string) => `itemicon-${path.parse(filePath).name}`,
        },
        compositor: "jimp",
        layout: "packed",
    },
    (err) => {
        if (err) {
            console.error(err);
        }
    }
);

function getFirstValidFilePath(paths: string[]): string {
    for (const path of paths) {
        if (fs.existsSync(path)) {
            return path;
        }
    }
}
