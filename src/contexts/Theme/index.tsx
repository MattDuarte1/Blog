import { createContext } from 'react';
import { theme } from '@/styles/theme';
import { ThemeContextValues } from './type';

export const INITIAL_STATE = {
  drawerIsOpen: false,
  categorySelected: undefined as string | undefined,
  theme: theme,
};

export type InitialStateType = typeof INITIAL_STATE;

export const newTheme = {
  ...theme,
  name: 'inverted',
  colors: {
    ...theme.colors,
    white: '#2B2C34',
    lightGrey1: '#EFF0F3',
    lightGrey2: '#E4E5E9',
    grey: '#C0C0C0',
    darkGrey: '#9A9494',
    black: '#FFFFFE',
    blue: '#6246EA',
  },
};

/* istanbul ignore next */
export const ThemeContext = createContext<ThemeContextValues>({
  state: INITIAL_STATE,
  changeTheme: () => {},
  activeDrawer: () => {},
  changeCategory: () => {},
});
