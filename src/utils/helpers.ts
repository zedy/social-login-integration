// libs
import toast from 'react-hot-toast';

// The purpose of this file is to provide helper functions that can be used
// throughout the app. This is a good place to put functions that are used
// in multiple places and don't belong to a specific component or context.

export const genericToastError = () => {
  toast.error('An error occurred. Please try again later', {
    id: 'error',
  });
};

export const messageToastError = (message: string) => {
  toast.error(message, {
    id: message,
  });
};
