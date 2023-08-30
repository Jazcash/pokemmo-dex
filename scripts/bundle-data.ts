// make sure latest PokeMMO exported client data is exported to the data/ dir. Include battlesprites, itemicons, monstericons and pokedex info

import fs from "fs";

const pokemon: any[] = [];
const moves: any[] = [];

const pokedexFiles = await fs.promises.readdir("data/info");
const catchRatesStr = await fs.promises.readFile("data/catch_rates.json", { encoding: "utf-8" });
const catchRates = JSON.parse(catchRatesStr);

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

await fs.promises.writeFile("src/assets/pokedex.json", JSON.stringify({ pokemon, moves }));

await fs.promises.mkdir("public/battlesprites", { recursive: true });
await fs.promises.mkdir("public/itemicons", { recursive: true });
await fs.promises.mkdir("public/monstericons", { recursive: true });

for (const poke of pokemon) {
    if (fs.existsSync(`data/battlesprites/${poke.id}-front-n.png`)) {
        await fs.promises.copyFile(`data/battlesprites/${poke.id}-front-n.png`, `public/battlesprites/${poke.id}.png`);
    } else if (fs.existsSync(`data/battlesprites/${poke.id}-front-n-f.png`)) {
        await fs.promises.copyFile(`data/battlesprites/${poke.id}-front-n-f.png`, `public/battlesprites/${poke.id}.png`);
    }

    await fs.promises.copyFile(`data/monstericons/${poke.id}-0.png`, `public/monstericons/${poke.id}.png`);
}

await fs.promises.cp("data/itemicons", "public/itemicons", { recursive: true, force: true });
