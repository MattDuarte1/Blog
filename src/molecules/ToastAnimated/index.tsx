import React, { forwardRef } from 'react';
import 'react-toastify/dist/ReactToastify.min.css';
import styled, { css } from 'styled-components';
import { toast, ToastContainer } from 'react-toastify';
import { ToastContainerProps } from 'react-toastify/dist/types';

const Toast = styled(ToastContainer)`
  ${({ theme }) => css`
    .Toastify__toast {
      background-color: ${theme.colors.white};
    }
    .Toastify__toast-body {
      color: ${theme.colors.black};
    }
  `}
`;

type showToastProps = {
  type: string;
  message?: string;
};

export const showToast = ({ type, message }: showToastProps) => {
  const options = {
    position: toast.POSITION.BOTTOM_CENTER,
  };
  switch (type) {
    case 'success':
      toast.success(message, options);
      break;
    case 'warn':
      toast.warn(message, options);
      break;
    case 'error':
      toast.error(message, options);
      break;
  }
};

const ToastAnimated = forwardRef<HTMLDivElement, ToastContainerProps>(() => {
  return <Toast />;
});

ToastAnimated.displayName = 'ToastAnimated component';

export default ToastAnimated;
