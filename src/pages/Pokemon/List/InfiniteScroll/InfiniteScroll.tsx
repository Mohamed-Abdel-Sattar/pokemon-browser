import { type FC } from 'react';

import InfiniteScroll from 'react-infinite-scroll-component';

import { ErrorAlert } from '@/components/ErrorAlert';
import PokemonCard from '@/components/PokemonCard/PokemonCard';
import { SkeletonLoading } from '@/components/SkeletonLoading';
import SpinnerLoading from '@/components/SpinnerLoading/SpinnerLoading';
import { usePokemonList } from '@/context/PokemonList';
import { Grid, Summary, Wrapper } from '@/pages/Pokemon/styles';

import type { AxiosError } from 'axios';

const InfiniteScrollContent: FC = () => {
  const { loading, items, error, page, handlePageChange, pagingData } = usePokemonList();

  return loading && !pagingData.current ? (
    <SkeletonLoading />
  ) : (
    <InfiniteScroll
      dataLength={items.length}
      next={() => handlePageChange(page + 1)}
      style={{ width: '100%' }}
      hasMore={pagingData.current?.count ? pagingData.current?.count > items.length : false}
      loader={pagingData.current ? <SpinnerLoading text="Loading Pokémon..." /> : <SkeletonLoading />}
      endMessage={
        <Wrapper>
          <p>No More Pokémon</p>
        </Wrapper>
      }
    >
      <Grid>
        {items?.map(pokemon => (
          <PokemonCard key={pokemon?.name} pokemon={pokemon} />
        ))}
      </Grid>

      <Wrapper>
        <Summary>({items?.length} Pokemon shown)</Summary>
      </Wrapper>

      {error ? <ErrorAlert error={{ message: error } as AxiosError} /> : ''}
    </InfiniteScroll>
  );
};

export default InfiniteScrollContent;
