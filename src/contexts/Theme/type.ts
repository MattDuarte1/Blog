import { DefaultTheme } from 'styled-components';
import { Theme } from '@/interfaces/styled-components';
import { Actions } from './actions';

export type ThemeProviderProps = {
  children: React.ReactNode;
};

export type ThemeContextValues = {
  state: {
    drawerIsOpen: boolean;
    theme: DefaultTheme;
    categorySelected: string;
  };
  changeTheme?: (mode: string) => void;
  activeDrawer?: () => void;
  changeCategory?: (category: string) => void;
};

export interface IAction {
  type: Actions;
  payload?: {
    theme?: Theme;
    nameTheme?: string;
    drawerIsOpen?: boolean;
    categorySelected?: string;
  };
}
