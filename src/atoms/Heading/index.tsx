import { forwardRef } from 'react';
import * as Styled from './styles';

export type HeadingProps = {
  children: React.ReactNode;
  size?:
    | 'xxsmall'
    | 'xsmall'
    | 'small'
    | 'medium'
    | 'large'
    | 'xlarge'
    | 'xxlarge'
    | 'huge'
    | 'xhuge';
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  color?:
    | 'white'
    | 'lightGrey1'
    | 'lightGrey2'
    | 'grey'
    | 'darkGrey'
    | 'black'
    | 'blue';
  uppercase?: boolean;
};

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    {
      children,
      size = 'huge',
      as = 'h1',
      color = 'white',
      uppercase = false,
      ...props
    },
    ref,
  ) => {
    return (
      <Styled.Container
        size={size}
        ref={ref}
        as={as}
        color={color}
        uppercase={uppercase}
        {...props}
      >
        {children}
      </Styled.Container>
    );
  },
);

Heading.displayName = 'HeadingComponent';
export default Heading;
