import { type ReactNode, useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { namedRoutes } from '@/AppRoutes.tsx';
import { getPokemonById } from '@/services/consumers/Pokemon/services';

import type { Pokemon } from '@/types/pokemon';
import type { AxiosError, AxiosResponse } from 'axios';

import { PokemonDetailsContext } from '.';

interface PokemonDetailsProviderProps {
  id: number | string;
  children: ReactNode;
}
function PokemonDetailsProvider({ id, children }: PokemonDetailsProviderProps) {
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState<Pokemon | undefined>(undefined);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [shouldRedirect, setShouldRedirect] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();
    const load = async () => {
      setLoading(true);
      setError('');
      getPokemonById(id, controller.signal, 'Failed to load the Pokémon.', setShouldRedirect)
        .then(result => {
          if (result && result?.status && ['200', '201', '204'].includes(result?.status?.toString())) {
            setPokemon((result as AxiosResponse<Pokemon>)?.data);
          } else {
            if (!controller.signal.aborted) {
              setError(((result as AxiosError)?.response?.data as string) || 'Failed to load the Pokémon.');
            }
          }
        })
        .finally(() => {
          setLoading(false);
        });
    };

    load();

    return () => controller.abort();
  }, [id]);

  useEffect(() => {
    if (shouldRedirect) {
      navigate(namedRoutes.pokemon.list.pagination);
    }
  }, [shouldRedirect, navigate]);

  return <PokemonDetailsContext.Provider value={{ loading, pokemon, error }}>{children}</PokemonDetailsContext.Provider>;
}

export default PokemonDetailsProvider;
