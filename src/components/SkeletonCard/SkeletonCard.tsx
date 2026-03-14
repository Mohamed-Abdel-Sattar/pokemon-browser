import type { FC } from 'react';

import { Card, ImageWrapper, Text } from './styles';

const SkeletonCard: FC = () => {
  return (
    <Card>
      <ImageWrapper />
      <Text />
      <Text style={{ width: '60%' }} />
    </Card>
  );
};

export default SkeletonCard;
