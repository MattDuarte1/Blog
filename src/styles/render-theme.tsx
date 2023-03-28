import { render, RenderResult } from '@testing-library/react';
import { ThemeProvider } from '@/contexts/Theme/provider';

export const renderTheme = (children: React.ReactNode): RenderResult => {
  return render(<ThemeProvider>{children}</ThemeProvider>);
};
