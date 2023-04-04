import Footer from '.';
import { renderTheme } from '@/styles/render-theme';
import { screen } from '@testing-library/react';

describe('<Footer>', () => {
  it('Should render a Footer Component', () => {
    renderTheme(<Footer />);
    const footer = screen.getByRole('contentinfo');

    expect(footer).toBeInTheDocument();
  });

  it('Should match snapshot footer component', () => {
    renderTheme(<Footer />);
    const footer = screen.getByRole('contentinfo');

    expect(footer).toMatchSnapshot();
  });
});
