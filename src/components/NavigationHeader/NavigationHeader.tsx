import type { FC } from 'react';

import { Link } from 'react-router-dom';

import { namedRoutes } from '@/AppRoutes.tsx';
import pokemonIcon from '@/assets/pokemon.svg';
import { SEO } from '@/components/SEO'
import { capitalizeWords } from '@/utils'

import { Header, Nav, NavLinkButton, Subtitle, Title } from './styles.ts';

type Props = {
  listType: string;
};
const NavigationHeader: FC<Props> = ({ listType }) => {
  return (
    <>
      <SEO title={capitalizeWords(listType)}
           pathname={window.location.origin}
           titleTemplate='Pokédex'
           description={`Discover and explore Pokemon with ${listType}`}
      />
    <Header>
      <Title>
        <Link to="/pagination">
          <img src={pokemonIcon} alt="Pokemon Icon" /> Pokédex
        </Link>
      </Title>
      <Subtitle>Discover and explore Pokemon with {listType}</Subtitle>

      <Nav>
        <NavLinkButton to={namedRoutes.pokemon.list.pagination}>Page Controls</NavLinkButton>
        <NavLinkButton to={namedRoutes.pokemon.list.loadMore}>Load More</NavLinkButton>
        <NavLinkButton to={namedRoutes.pokemon.list.infiniteScroll}>Infinite Scroll</NavLinkButton>
      </Nav>
    </Header>
    </>
  );
};

export default NavigationHeader;
