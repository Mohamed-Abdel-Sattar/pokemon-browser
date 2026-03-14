import type { FC } from 'react';

import { closeSnackbar } from 'notistack';

import { CloseButton } from './styles.ts';

type Props = {
  id: string | number;
};
const SnackbarCloseButton: FC<Props> = ({ id }) => {
  return <CloseButton onClick={() => closeSnackbar(id)}>✕</CloseButton>;
};

export default SnackbarCloseButton;
