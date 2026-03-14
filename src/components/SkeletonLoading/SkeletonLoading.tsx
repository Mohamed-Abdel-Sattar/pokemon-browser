import type { FC } from 'react';

import { SkeletonCard } from '@/components/SkeletonCard';

import { Wrapper } from './styles.ts';

const SkeletonLoading: FC = () => {
  return (
    <Wrapper>
      {Array.from({ length: 8 })?.map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </Wrapper>
  );
};

export default SkeletonLoading;
