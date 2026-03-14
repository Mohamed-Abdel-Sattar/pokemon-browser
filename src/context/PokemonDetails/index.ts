import { createContext, useContext } from 'react';

import type { Pokemon } from '@/types/pokemon.ts';

// import PokemonPaginationProvider from '@/context/PokemonPagination/provider.tsx'

type PokemonDetailsContextType = {
  loading: boolean;
  pokemon: Pokemon | undefined;
  error: string;
};

export const PokemonDetailsContext = createContext<PokemonDetailsContextType | undefined>(undefined);

export const usePokemonDetails = (): PokemonDetailsContextType => {
  const context = useContext(PokemonDetailsContext);
  if (!context) {
    throw new Error('usePokemonDetails must be used within the PokemonDetails Provider');
  }

  return context;
};
