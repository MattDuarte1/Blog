import { useCallback, useReducer } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { Actions } from './actions';
import { theme } from '@/styles/theme';
import { ThemeContext, INITIAL_STATE, newTheme } from './index';
import { blogContextReducer } from './reducer';
import { ThemeProviderProps } from './type';

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [state, dispatch] = useReducer(blogContextReducer, INITIAL_STATE);

  const changeTheme = useCallback(
    (mode = '') => {
      dispatch({
        type: Actions.setTheme,
        payload: {
          nameTheme: mode,
          theme: mode === 'default' ? theme : newTheme,
        },
      });
    },
    [dispatch],
  );

  const changeCategory = useCallback((category: string) => {
    dispatch({
      type: Actions.setCategorySelected,
      payload: {
        categorySelected: category,
      },
    });
  }, []);

  const activeDrawer = useCallback(() => {
    dispatch({
      type: Actions.setDrawer,
    });
  }, [dispatch]);

  return (
    <ThemeContext.Provider
      value={{ state, changeTheme, activeDrawer, changeCategory }}
    >
      <StyledThemeProvider theme={state.theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
