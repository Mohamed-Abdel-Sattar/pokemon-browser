import { createContext, type RefObject, useContext } from 'react';

import type { PokemonListItem, PokemonListPagination } from '@/types/pokemon.ts';

type PokemonListContextType = {
  loading: boolean;
  PAGE_SIZE: number;
  page: number;
  items: PokemonListItem[];
  error: string;
  handlePageChange: (pageNumber: number) => void;
  pagingData: RefObject<PokemonListPagination | undefined>;
};

export const PokemonListContext = createContext<PokemonListContextType | undefined>(undefined);

export const usePokemonList = (): PokemonListContextType => {
  const context = useContext(PokemonListContext);
  if (!context) {
    throw new Error('usePokemonList must be used within the PokemonList Provider');
  }

  return context;
};
