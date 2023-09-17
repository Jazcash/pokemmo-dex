export interface Pokemon {
    id: number;
    name: string;
    exp_type: string;
    obtainable: boolean;
    gender_ratio: number;
    height: number;
    weight: number;
    egg_groups: EggGroup[];
    abilities: LearnedAbility[];
    forms: Form[];
    evolutions: Evolution[];
    moves: LearnedMove[];
    types: Type[];
    stats: Stats;
    yields: Yields;
    held_items: any[];
    locations: PokemonLocation[];
    tier: string;
    catchRate: number;
}

export interface LearnedAbility {
    id: number;
    name: string;
    description: string;
}

export type Ability = LearnedAbility & { learnedBy: number[] };

export interface Form {
    form_id: number;
    id: number;
    name: string;
}

export interface Evolution {
    id: number;
    name: string;
    type: string;
    val: number;
}

export interface LearnedMove {
    id: number;
    name: string;
    learnType: LearnMoveType;
    level?: number;
}

export interface Stats {
    hp: number;
    attack: number;
    defense: number;
    speed: number;
    sp_attack: number;
    sp_defense: number;
    total: number;
}

export interface Yields {
    exp: number;
    ev_hp: number;
    ev_attack: number;
    ev_defense: number;
    ev_speed: number;
    ev_sp_attack: number;
    ev_sp_defense: number;
}

export interface PokemonLocation {
    id: string;
    type: string;
    region_id: number;
    region_name: string;
    location: string;
    min_level: number;
    max_level: number;
    rarity: string;
}

export interface Location {
    id: string;
    region_id: number;
    region_name: string;
    location: string;
    pokemonFound: Array<{ pokemonId: number } & Omit<PokemonLocation, "region_id" | "region_name" | "location">>;
}

export interface Move {
    id: number;
    name: string;
    skill_damage_type: string;
    base_power: number;
    base_accuracy: number;
    base_pp: number;
    priority: number;
    type: Type;
    target_type: number;
    true_damage: boolean;
    learnedBy: number[];
}

export enum Type {
    BUG = "BUG",
    DARK = "DARK",
    DRAGON = "DRAGON",
    ELECTRIC = "ELECTRIC",
    FIGHTING = "FIGHTING",
    FIRE = "FIRE",
    FLYING = "FLYING",
    GHOST = "GHOST",
    GRASS = "GRASS",
    GROUND = "GROUND",
    ICE = "ICE",
    NORMAL = "NORMAL",
    POISON = "POISON",
    PSYCHIC = "PSYCHIC",
    ROCK = "ROCK",
    STEEL = "STEEL",
    WATER = "WATER",
}

export enum EggGroup {
    BUG = "bug",
    CANNOT_BREED = "cannot breed",
    CHAOS = "chaos",
    DITTO = "ditto",
    DRAGON = "dragon",
    FAIRY = "fairy",
    FIELD = "field",
    FLYING = "flying",
    GENDERLESS = "genderless",
    PLANT = "plant",
    HUMANOID = "humanoid",
    MINERAL = "mineral",
    MONSTER = "monster",
    WATER_A = "water a",
    WATER_B = "water b",
    WATER_C = "water c",
}

export enum MoveTarget {
    SINGLE_ADJACENT = 0,
    USER_OR_SINGLE_ADJACENT = 1,
    SINGLE_ALLY = 2,
    SINGLE_ADJACENT_FOE = 3,
    ALL_ADJACENT = 4,
    ALL_ADJACENT_FOES = 5,
    ALL_ALLIES = 6,
    SELF = 7,
    ALL = 8,
    USER_AND_RANDOM_ADJACENT = 9,
    ALL_2 = 10,
    ALL_FOES = 11,
    ALL_ALLIES_2 = 12,
    SELF_2 = 13,
    ANY_SINGLE = 14,
}

export enum LearnMoveType {
    TM = "move_learner_tools",
    LEVEL = "level",
    EGG_MOVE = "egg_moves",
    SPECIAL = "special_moves",
    TUTOR = "move_tutor",
}
