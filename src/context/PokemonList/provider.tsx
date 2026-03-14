import { type ReactNode, useCallback, useEffect, useRef, useState } from 'react';

import { getPokemonList } from '@/services/consumers/Pokemon/services';
import { getIdFromUrl } from '@/utils';

import type { PaginationData } from '@/types/api';
import type { PokemonListItem, PokemonListPagination, PokemonListResponse } from '@/types/pokemon';
import type { AxiosError, AxiosResponse } from 'axios';

import { PokemonListContext } from '.';

interface PokemonListProviderProps {
  accumulate?: boolean;
  children: ReactNode;
}
const PAGE_SIZE = 12;
function PokemonListProvider({ accumulate, children }: PokemonListProviderProps) {
  const [items, setItems] = useState<PokemonListItem[]>([]);
  const [page, setPage] = useState<number>(1);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const pagingData = useRef<PokemonListPagination>(undefined);
  useEffect(
    () => {
      const controller = new AbortController();
      const load = async () => {
        setLoading(true);
        setError('');
        const paging: PaginationData = { limit: PAGE_SIZE, offset: PAGE_SIZE * (page - 1) };
        getPokemonList(paging, controller.signal, 'Failed to load Pokémon.')
          .then(result => {
            if (result && result?.status && ['200', '201', '204'].includes(result?.status?.toString())) {
              const data = (result as AxiosResponse<PokemonListResponse>)?.data;
              const { results, ...paginationData } = data;
              pagingData.current = paginationData;
              const pokemonWithId: PokemonListItem[] = (results || [])?.map(pokemon => ({ ...pokemon, id: getIdFromUrl(pokemon?.url) }));
              if (accumulate) {
                setItems(prev => [...prev, ...pokemonWithId]);
              } else {
                setItems(pokemonWithId);
              }
            } else {
              if (!controller.signal.aborted) {
                setError(((result as AxiosError)?.response?.data as string) || 'Failed to load Pokémon.');
              }
            }
          })
          .finally(() => {
            setLoading(false);
          });
      };

      load();

      return () => controller.abort();
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [page]
  );

  const handlePageChange = useCallback((pageNumber: number) => setPage(pageNumber), []);

  return (
    <PokemonListContext.Provider value={{ loading, PAGE_SIZE, page, items, error, handlePageChange, pagingData }}>
      {children}
    </PokemonListContext.Provider>
  );
}

export default PokemonListProvider;
