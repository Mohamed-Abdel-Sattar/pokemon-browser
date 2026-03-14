import type { FC } from 'react';

import PokemonListProvider from '@/context/PokemonList/provider';

import InfiniteScrollContent from './InfiniteScroll';

const InfiniteScrollPage: FC = () => {
  return (
    <PokemonListProvider accumulate>
      <InfiniteScrollContent />
    </PokemonListProvider>
  );
};

export default InfiniteScrollPage;
