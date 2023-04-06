import { forwardRef } from 'react';
import * as Styled from './styles';

type ToggleThemeProps = {
  checked: boolean;
  onChange: () => void;
};

const ToggleTheme = forwardRef<HTMLDivElement, ToggleThemeProps>(
  ({ checked, onChange, ...props }, ref) => {
    return (
      <Styled.Container ref={ref} {...props}>
        <Styled.Label>
          toggle change theme
          <Styled.Input
            type="checkbox"
            value="Dark mode active"
            onChange={onChange}
            checked={checked}
          />
          <Styled.Slider></Styled.Slider>
        </Styled.Label>
      </Styled.Container>
    );
  },
);

ToggleTheme.displayName = 'Toggle Theme Component';

export default ToggleTheme;
