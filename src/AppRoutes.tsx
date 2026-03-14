import { lazy, Suspense } from 'react';

import { ErrorBoundary } from 'react-error-boundary';
import { Routes, Route, Navigate } from 'react-router-dom';

import { ErrorFallback } from '@/components/ErrorFallback';
import SpinnerLoading from '@/components/SpinnerLoading/SpinnerLoading';

const PaginationPage = lazy(() => import('./pages/Pokemon/List/Pagination/page'));
const LoadMorePage = lazy(() => import('./pages/Pokemon/List/LoadMore/page'));
const InfiniteScrollPage = lazy(() => import('./pages/Pokemon/List/InfiniteScroll/page'));
const DetailedPage = lazy(() => import('./pages/Pokemon/view/page'));

export const namedRoutes = {
  home: '/',

  pokemon: {
    list: {
      pagination: '/pagination',
      loadMore: '/load-more',
      infiniteScroll: '/infinite-scroll',
    },
    view: '/pokemon/:id',
  },
};

const AppRoutes = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<SpinnerLoading above />}>
        <Routes>
          <Route path="/" element={<Navigate to={namedRoutes.pokemon.list.pagination} replace />} />
          <Route path={namedRoutes.pokemon.list.pagination} element={<PaginationPage />} />
          <Route path={namedRoutes.pokemon.list.loadMore} element={<LoadMorePage />} />
          <Route path={namedRoutes.pokemon.list.infiniteScroll} element={<InfiniteScrollPage />} />
          <Route path={namedRoutes.pokemon.view} element={<DetailedPage />} />

          <Route path="*" element={<Navigate to={namedRoutes.pokemon.list.pagination} replace />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
};

export default AppRoutes;
