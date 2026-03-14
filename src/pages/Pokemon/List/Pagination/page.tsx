import type { FC } from 'react';

import PokemonListProvider from '@/context/PokemonList/provider';

import PaginationContent from './Pagination';

const PaginationPage: FC = () => {
  return (
    <PokemonListProvider>
      <PaginationContent />
    </PokemonListProvider>
  );
};

export default PaginationPage;
