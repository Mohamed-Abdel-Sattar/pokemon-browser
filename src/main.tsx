import { SnackbarProvider } from 'notistack';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { SnackbarCloseButton } from '@/components/SnackbarCloseButton';
import { GlobalStyles } from '@/styles.ts';

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <>
    <GlobalStyles />
    <SnackbarProvider
      maxSnack={3}
      autoHideDuration={3000}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      action={snackbarId => <SnackbarCloseButton id={snackbarId} />}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SnackbarProvider>
  </>
);
