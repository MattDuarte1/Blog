import { forwardRef } from 'react';
import * as Styled from './styles';

type ButtonProps = {
  text: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  type?: 'button' | 'submit' | 'reset';
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ text, onClick, type, disabled, ...props }, ref) => {
    return (
      <Styled.Container
        ref={ref}
        disabled={disabled}
        onClick={onClick}
        type={type}
        {...props}
      >
        {text}
      </Styled.Container>
    );
  },
);

Button.displayName = 'Button Component';

export default Button;
