import { SERVICE_ENDPOINTS } from '@/services/globals';
import RestClient from '@/services/RestClient';
import { formatRoute } from '@/utils/formatRoute.ts';

import type { PaginationData } from '@/types/api.ts';
import type { Pokemon, PokemonListResponse } from '@/types/pokemon.ts';
import type { AxiosError, AxiosResponse } from 'axios';

export const getPokemonList = (
  paginationData?: PaginationData,
  signal?: AbortSignal,
  defaultErrorMessage = ''
): Promise<AxiosResponse<PokemonListResponse> | AxiosError | undefined> =>
  RestClient.get<PokemonListResponse>(
    SERVICE_ENDPOINTS.pokemon.list,
    { signal, params: paginationData || undefined },
    defaultErrorMessage,
    undefined,
    true
  );

export const getPokemonById = (
  id: string | number,
  signal: AbortSignal | undefined = undefined,
  defaultErrorMessage = '',
  shouldRedirect: (redirect: boolean) => void
): Promise<AxiosResponse<Pokemon> | AxiosError | undefined> => {
  if (!id) {
    throw new Error('Invalid Pokemon Data');
  }

  return RestClient.get<Pokemon>(
    formatRoute(SERVICE_ENDPOINTS.pokemon.view, { id }),
    { signal },
    defaultErrorMessage,
    undefined,
    true,
    shouldRedirect
  );
};
