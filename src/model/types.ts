export interface Pokemon {
    id: number
    name: string
    exp_type: string
    obtainable: boolean
    gender_ratio: number
    height: number
    weight: number
    egg_groups: EggGroup[]
    abilities: Ability[]
    forms: Form[]
    evolutions: Evolution[]
    moves: Move[]
    types: Type[]
    stats: Stats
    yields: Yields
    held_items: any[]
    locations: Location[]
    tier: string
    catchRate: number
  }

export interface Ability {
    id: number
    name: string
  }
  
  export interface Form {
    form_id: number
    id: number
    name: string
  }
  
  export interface Evolution {
    id: number
    name: string
    type: string
    val: number
  }
  
  export interface Move {
    id: number
    name: string
    type: string
    level?: number
  }
  
  export interface Stats {
    hp: number
    attack: number
    defense: number
    speed: number
    sp_attack: number
    sp_defense: number
    total: number
  }
  
  export interface Yields {
    exp: number
    ev_hp: number
    ev_attack: number
    ev_defense: number
    ev_speed: number
    ev_sp_attack: number
    ev_sp_defense: number
  }
  
  export interface Location {
    type: string
    region_id: number
    region_name: string
    location: string
    min_level: number
    max_level: number
    rarity: string
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
};

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