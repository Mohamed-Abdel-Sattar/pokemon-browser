import type { FC } from 'react';

import { Spinner, Text, Wrapper } from './styles';

type Props = {
  text?: string;
  above?: boolean;
};
const SpinnerLoading: FC<Props> = ({ text = 'Loading...', above }) => {
  return (
    <Wrapper className={above ? 'above' : ''}>
      <Spinner />
      <Text>{text}</Text>
    </Wrapper>
  );
};

export default SpinnerLoading;
