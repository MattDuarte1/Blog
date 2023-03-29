import { useState, useEffect, forwardRef } from 'react';
import { useBlogContext } from '@/contexts/Theme/hook';

import * as Styled from './styles';

const ToggleTheme = forwardRef<HTMLInputElement>(() => {
  const [checked, setChecked] = useState(false);
  const { changeTheme } = useBlogContext();

  useEffect(() => {
    const themeStorage = localStorage.getItem('theme');
    if (!themeStorage) return;

    const newTheme = JSON.parse(themeStorage);

    if (newTheme.name === 'inverted') setChecked(true);
  }, []);

  useEffect(() => {
    changeTheme(checked ? 'inverted' : 'default');
  }, [checked, changeTheme]);

  const handleChange = () => {
    setChecked((prev) => !prev);
    changeTheme(checked ? 'inverted' : 'default');
  };

  return (
    <Styled.Container>
      <Styled.Label>
        toggle change theme
        <Styled.Input
          type="checkbox"
          value="Dark mode active"
          onChange={handleChange}
          checked={checked}
        />
        <Styled.Slider></Styled.Slider>
      </Styled.Label>
    </Styled.Container>
  );
});

ToggleTheme.displayName = 'Toggle Theme Component';

export default ToggleTheme;
