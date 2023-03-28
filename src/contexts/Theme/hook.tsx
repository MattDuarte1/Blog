import { useContext } from 'react';
import { ThemeContext } from './index';

export const useBlogContext = () => useContext(ThemeContext);
