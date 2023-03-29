import Logo from '.';
import { renderTheme } from '@/styles/render-theme';
import { screen } from '@testing-library/react';

describe('<Heading>', () => {
  it('Should render Logo Component', () => {
    renderTheme(<Logo />);

    expect(screen.getByText(/blogzin/i)).toBeInTheDocument();
  });
});
