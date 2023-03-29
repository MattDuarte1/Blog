import { forwardRef } from 'react';
import * as Styled from './styles';

const Logo = forwardRef<HTMLDivElement>(() => {
  return <Styled.Container>BlogZin</Styled.Container>;
});

Logo.displayName = 'Logo Component';

export default Logo;
