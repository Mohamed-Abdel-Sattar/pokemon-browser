import { type ReactEventHandler, useRef } from 'react';

import { Link } from 'react-router-dom';

import pokemonIcon from '@/assets/pokemon.svg';
import { ErrorAlert } from '@/components/ErrorAlert';
import { SEO } from '@/components/SEO';
import SpinnerLoading from '@/components/SpinnerLoading/SpinnerLoading.tsx';
import { usePokemonDetails } from '@/context/PokemonDetails';
import { capitalizeWords } from '@/utils';

import type { PokemonAbility, PokemonStat, PokemonType } from '@/types/pokemon.ts';
import type { AxiosError } from 'axios';

import {
  AbilityRow,
  AbilitySection,
  AbilityWrapper,
  Body,
  Card,
  DataSection,
  ExperienceNumber,
  Header,
  Image,
  ImageWrapper,
  Specs,
  StateItem,
  StateLine,
  StateLineWrapper,
  StateValue,
  TypeItem,
  TypesWrapper,
} from '../styles';

const DetailedContent = () => {
  const { pokemon, loading, error } = usePokemonDetails();
  const useFallback = useRef<boolean>(true);

  const handleError: ReactEventHandler<HTMLImageElement> = e => {
    if (useFallback.current) {
      e.currentTarget.onerror = null;
      e.currentTarget.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${pokemon?.id || 1}.png`;
      useFallback.current = false;
    }
  };

  return (
    <>
      <SEO
        title={capitalizeWords(pokemon?.name || 'Pokémon')}
        pathname={window.location.origin}
        titleTemplate="Pokédex"
        description="Pokémon detailed page"
      />

      <Link to="/pagination">← Back to List</Link>
      {loading ? <SpinnerLoading text="Loading Pokémon..." above /> : ''}
      {error ? <ErrorAlert error={{ message: error } as AxiosError} /> : ''}
      {Object.keys(pokemon || {})?.length ? (
        <Card>
          <Header>
            <h1 style={{ margin: 0, textTransform: 'capitalize' }}>
              <img src={pokemonIcon} alt="Pokemon Icon" /> {pokemon?.name}
            </h1>
            <p style={{ margin: '8px 0 0' }}>#{String(pokemon?.id).padStart(3, '0')}</p>
          </Header>

          <Body>
            <DataSection>
              <ImageWrapper>
                <Image
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${pokemon?.id || 1}.png`}
                  alt={pokemon?.name}
                  loading="lazy"
                  onError={handleError}
                />
              </ImageWrapper>
              <TypesWrapper>
                {pokemon?.types?.map((type: PokemonType) => (
                  <TypeItem key={type?.type?.name}>{type?.type?.name}</TypeItem>
                ))}
              </TypesWrapper>
              <Specs>
                {pokemon?.height && (
                  <div>
                    <span>Height</span>
                    <strong>{pokemon?.height} m</strong>
                  </div>
                )}
                {pokemon?.height && (
                  <div>
                    <span>Weight</span>
                    <strong>{pokemon?.weight} Kg</strong>
                  </div>
                )}
              </Specs>
            </DataSection>

            <DataSection>
              {pokemon?.stats?.length ? (
                <>
                  <h2>Base Stats</h2>
                  {pokemon?.stats?.map((stat: PokemonStat) => (
                    <StateItem key={stat?.stat?.name}>
                      <StateValue>
                        <h4>{stat?.stat?.name}</h4>
                        <strong>{stat.base_stat}</strong>
                      </StateValue>
                      <StateLineWrapper>
                        <StateLine
                          style={{
                            width: `${Math.ceil((stat.base_stat / 250) * 100)}%`,
                          }}
                        />
                      </StateLineWrapper>
                    </StateItem>
                  ))}
                </>
              ) : (
                ''
              )}
              {pokemon?.abilities?.length ? (
                <AbilitySection>
                  <h2>Abilities</h2>
                  <AbilityWrapper>
                    {pokemon?.abilities?.map((ability: PokemonAbility) => (
                      <AbilityRow key={ability?.ability?.name}>
                        <h4>{ability?.ability?.name}</h4>
                        {ability?.is_hidden ? <span>(Hidden)</span> : ''}
                      </AbilityRow>
                    ))}
                  </AbilityWrapper>
                </AbilitySection>
              ) : (
                ''
              )}

              <AbilitySection>
                <h2>Base Experience</h2>
                <ExperienceNumber>{pokemon?.base_experience || 0} XP</ExperienceNumber>
              </AbilitySection>
            </DataSection>
          </Body>
        </Card>
      ) : (
        ''
      )}
    </>
  );
};

export default DetailedContent;
