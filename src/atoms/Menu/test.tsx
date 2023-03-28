import { screen } from '@testing-library/react';
import Menu from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<Menu>', () => {
  it('Should render a menu link', () => {
    renderTheme(<Menu title="Inicio" link="" />);
    const menu = screen.getByRole('link', { name: 'Inicio' });

    expect(menu).toHaveAttribute('target', '_self');
    expect(getComputedStyle(menu).cursor).toBe('pointer');
  });

  it('Should render a internal link', () => {
    renderTheme(<Menu title="Inicio" link="#" />);
    const menu = screen.getByRole('link', { name: 'Inicio' });

    expect(menu).toHaveAttribute('href', '#');
    expect(menu).toHaveAttribute('target', '_self');
  });

  it('Should render open in a new tab', () => {
    renderTheme(
      <Menu title="Inicio" link="http://www.google.com" newTab={true} />,
    );
    const menu = screen.getByRole('link', { name: 'Inicio' });

    expect(menu).toHaveAttribute('href', 'http://www.google.com');
    expect(menu).toHaveAttribute('target', '_blank');
  });

  it('Should match snapshot of menu', () => {
    renderTheme(<Menu title="procurar" link="#" newTab={false} />);

    expect(screen.getByRole('link', { name: 'procurar' })).toMatchSnapshot();
  });
});
