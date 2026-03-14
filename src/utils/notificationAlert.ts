import { enqueueSnackbar } from 'notistack';

import type { OptionsObject, VariantType } from 'notistack';

/**
 * Displays a notification alert
 * @param message - The notification message
 * @param variant - The variant type of the alert
 * @param options - Additional snackbar options
 */
const handleNotificationAlert = (message: string, variant: VariantType = 'default', options?: OptionsObject): void => {
  enqueueSnackbar(message, {
    variant,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left',
    },
    ...options,
  });
};

export default handleNotificationAlert;
