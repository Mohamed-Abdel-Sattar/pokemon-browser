export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonListItem[];
}

export type PokemonListItem = {
  name: string;
  url: string;
  id?: number;
};

export interface PokemonListPagination {
  count: number;
  next: string | null;
  previous: string | null;
}

export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  order: number;
  is_default: boolean;

  abilities: PokemonAbility[];
  forms: NamedAPIResource[];
  game_indices: GameIndex[];
  held_items: HeldItem[];
  location_area_encounters: string;

  moves: PokemonMove[];

  species: NamedAPIResource;
  sprites: PokemonSprites;

  stats: PokemonStat[];
  types: PokemonType[];
}

export interface NamedAPIResource {
  name: string;
  url: string;
}

export interface PokemonAbility {
  is_hidden: boolean;
  slot: number;
  ability: NamedAPIResource;
}

export interface GameIndex {
  game_index: number;
  version: NamedAPIResource;
}

export interface HeldItem {
  item: NamedAPIResource;
  version_details: {
    rarity: number;
    version: NamedAPIResource;
  }[];
}

export interface PokemonMove {
  move: NamedAPIResource;
  version_group_details: {
    level_learned_at: number;
    move_learn_method: NamedAPIResource;
    version_group: NamedAPIResource;
  }[];
}

export interface PokemonType {
  slot: number;
  type: NamedAPIResource;
}

export interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: NamedAPIResource;
}

export interface PokemonSprites {
  front_default: string | null;
  front_shiny: string | null;
  back_default: string | null;
  back_shiny: string | null;
}
