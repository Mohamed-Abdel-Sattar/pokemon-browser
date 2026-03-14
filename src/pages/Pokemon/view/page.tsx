import { Navigate, useParams } from 'react-router-dom';

import { namedRoutes } from '@/AppRoutes.tsx';
import PokemonDetailsProvider from '@/context/PokemonDetails/provider.tsx';

import DetailedContent from './view';

const DetailedPage = () => {
  const { id } = useParams<{ id: string }>();
  return id ? (
    <PokemonDetailsProvider id={id}>
      <DetailedContent />
    </PokemonDetailsProvider>
  ) : (
    <Navigate to={namedRoutes.pokemon.list.pagination} />
  );
};

export default DetailedPage;
