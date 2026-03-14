import type { FC } from 'react';

import type { FallbackProps } from 'react-error-boundary';

import { Alert } from './styles';

const ErrorFallback: FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
  const message = error instanceof Error ? error.message : JSON.stringify(error);
  return (
    <Alert role="alert">
      <h2>Something went wrong</h2>
      <pre>{message}</pre>
      <button onClick={resetErrorBoundary}>Retry</button>
    </Alert>
  );
};

export default ErrorFallback;
