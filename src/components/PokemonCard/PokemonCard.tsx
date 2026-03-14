import { type FC, type ReactEventHandler, useRef } from 'react';

import { namedRoutes } from '@/AppRoutes';
import { formatRoute } from '@/utils/formatRoute';

import type { PokemonListItem } from '@/types/pokemon.ts';

import { Card, Id, Image, ImageWrapper, Name } from './styles';

type Props = {
  pokemon: PokemonListItem;
};
const PokemonCard: FC<Props> = ({ pokemon }) => {
  const useFallback = useRef<boolean>(true);
  const handleError: ReactEventHandler<HTMLImageElement> = e => {
    if (useFallback.current) {
      e.currentTarget.onerror = null;
      e.currentTarget.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon?.id || 1}.png`;
      // e.currentTarget.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/brilliant-diamond-shining-pearl/${pokemon?.id || 1}.png`;
      useFallback.current = false;
    }
  };
  return (
    <Card to={formatRoute(namedRoutes.pokemon.view, { id: pokemon?.id || pokemon?.name })}>
      <ImageWrapper>
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${pokemon?.id || 1}.png`}
          alt={pokemon?.name}
          loading="lazy"
          onError={handleError}
        />
      </ImageWrapper>
      <Name>{pokemon?.name}</Name>
      <Id>#{String(pokemon?.id).padStart(3, '0')}</Id>
    </Card>
  );
};

export default PokemonCard;
