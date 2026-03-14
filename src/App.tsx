import { useMemo } from 'react';

import { matchPath, useLocation } from 'react-router-dom';

import AppRoutes, { namedRoutes } from '@/AppRoutes.tsx';
import { BackToTopButton } from '@/components/BackToTopButton';
import { NavigationHeader } from '@/components/NavigationHeader';
import { Main } from '@/styles.ts';

const App = () => {
  const location = useLocation();

  const pageType = useMemo(
    () => {
      const { pathname } = location;
      if (matchPath(namedRoutes.pokemon.view, pathname)) {
        return 'view';
      }
      if (pathname.startsWith(namedRoutes.pokemon.list.loadMore)) {
        return 'load more';
      }
      if (pathname.startsWith(namedRoutes.pokemon.list.infiniteScroll)) {
        return 'infinite scroll';
      }
      return 'page controls';
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [location.pathname]
  );

  return (
    <div className={`main-content ${pageType.replaceAll(' ', '-').toLowerCase()}`}>
      {pageType !== 'view' ? <NavigationHeader listType={pageType} /> : ''}

      <Main>
        <AppRoutes />
        <BackToTopButton />
      </Main>
    </div>
  );
};

export default App;
