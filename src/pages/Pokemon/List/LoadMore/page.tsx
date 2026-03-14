import type { FC } from 'react';

import PokemonListProvider from '@/context/PokemonList/provider';

import LoadMoreContent from './LoadMore';

const LoadMorePage: FC = () => {
  return (
    <PokemonListProvider accumulate>
      <LoadMoreContent />
    </PokemonListProvider>
  );
};

export default LoadMorePage;
