import { type FC } from 'react';

import { ErrorAlert } from '@/components/ErrorAlert';
import { ListPagination } from '@/components/ListPagination';
import PokemonCard from '@/components/PokemonCard/PokemonCard';
import { SkeletonLoading } from '@/components/SkeletonLoading';
import SpinnerLoading from '@/components/SpinnerLoading/SpinnerLoading';
import { usePokemonList } from '@/context/PokemonList';
import { Grid } from '@/pages/Pokemon/styles';

import type { AxiosError } from 'axios';

const PaginationContent: FC = () => {
  const { PAGE_SIZE, items, loading, error, page, handlePageChange, pagingData } = usePokemonList();

  return (
    <>
      {loading ? pagingData.current ? <SpinnerLoading text="Loading Pokémon..." above /> : <SkeletonLoading /> : ''}
      {error ? <ErrorAlert error={{ message: error } as AxiosError} /> : ''}

      {items?.length ? (
        <>
          <Grid>
            {items?.map(pokemon => (
              <PokemonCard key={pokemon?.name} pokemon={pokemon} />
            ))}
          </Grid>
          {pagingData.current && pagingData.current?.count > PAGE_SIZE && (
            <ListPagination
              currentPage={page}
              totalPages={Math.ceil(pagingData.current?.count / PAGE_SIZE)}
              pageSize={PAGE_SIZE}
              totalItems={pagingData.current?.count}
              onPageChange={handlePageChange}
            />
          )}
        </>
      ) : (
        ''
      )}
    </>
  );
};

export default PaginationContent;
