import { type FC } from 'react';

import { ErrorAlert } from '@/components/ErrorAlert';
import PokemonCard from '@/components/PokemonCard/PokemonCard';
import { SkeletonLoading } from '@/components/SkeletonLoading';
import SpinnerLoading from '@/components/SpinnerLoading/SpinnerLoading';
import { usePokemonList } from '@/context/PokemonList';
import { Grid, LoadMoreBtn, Summary, Wrapper } from '@/pages/Pokemon/styles';

import type { AxiosError } from 'axios';

const LoadMoreContent: FC = () => {
  const { items, loading, error, page, handlePageChange, pagingData } = usePokemonList();

  return (
    <>
      {items?.length ? (
        <Grid>
          {items?.map(pokemon => (
            <PokemonCard key={pokemon?.name} pokemon={pokemon} />
          ))}
        </Grid>
      ) : (
        ''
      )}

      {loading ? pagingData.current ? <SpinnerLoading text="Loading Pokémon..." /> : <SkeletonLoading /> : ''}
      {error ? <ErrorAlert error={{ message: error } as AxiosError} /> : ''}

      {pagingData.current?.count ? (
        <Wrapper>
          {pagingData.current?.count > items?.length ? (
            <LoadMoreBtn onClick={() => handlePageChange(page + 1)} disabled={loading}>
              Load More
            </LoadMoreBtn>
          ) : (
            'No More Pokémon'
          )}
          <Summary>({items?.length} Pokemon shown)</Summary>
        </Wrapper>
      ) : (
        ''
      )}
    </>
  );
};

export default LoadMoreContent;
