import { toast } from 'react-toastify';

const toastAlert = (
  msg: string | unknown,
  type: 'success' | 'error' | 'custom-error',
  toastID?: string
): void => {
  if (type === 'success') {
    toast.success(msg as string, {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: 'light',
      toastId: toastID,
    });
  } else {
    toast.error('Server Error', {
      position: 'top-right',
      icon: false,
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: 'light',
      toastId: toastID,
    });
  }
};

export default toastAlert;
