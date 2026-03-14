import type { FC } from 'react';

import type { AxiosError } from 'axios';

import { Alert } from './styles';

type Props = {
  error: AxiosError;
};
const ErrorAlert: FC<Props> = ({ error }) => {
  return (
    <Alert role="alert">
      <h2>Something went wrong</h2>
      <pre>{error?.message}</pre>
    </Alert>
  );
};

export default ErrorAlert;
