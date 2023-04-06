import { useState, useEffect } from 'react';
import { useBlogContext } from '@/contexts/Theme/hook';

/**
 * Hook para alternar entre temas claro e escuro.
 * @property {boolean} checked - Mostra se está ativo ou não.
 * @property {function} handleChange - Função que é chamada
 * @returns {object} Um objeto com estado e uma função
 */

const useThemeSwitcher = () => {
  const [checked, setChecked] = useState(false);
  const { changeTheme } = useBlogContext();

  useEffect(() => {
    const themeStorage = localStorage.getItem('theme');
    if (themeStorage) {
      const newTheme = JSON.parse(themeStorage);
      setChecked(newTheme.name === 'inverted');
    }
  }, []);

  useEffect(() => {
    changeTheme(checked ? 'inverted' : 'default');
  }, [checked, changeTheme]);

  /**
   * Função que é chamada quando o interruptor de tema é alterado.
   */

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return { checked, handleChange };
};

export default useThemeSwitcher;
