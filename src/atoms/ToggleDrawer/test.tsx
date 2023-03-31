import { fireEvent, screen } from '@testing-library/react';
import ToggleDrawer from '.';
import { theme } from '@/styles/theme';
import { renderTheme } from '@/styles/render-theme';

describe('<ToggleDrawer>', () => {
  const activeDrawer = jest.fn();

  it('Should render a ToggleDrawer not actived', () => {
    renderTheme(
      <ToggleDrawer drawerIsOpen={false} activeDrawer={activeDrawer} />,
    );
    const toggleMobile = screen.getByLabelText('menu-toggle');

    expect(toggleMobile).toBeInTheDocument();
    expect(toggleMobile).toHaveAttribute('data-active', 'false');

    expect(toggleMobile.querySelector('p')).toHaveStyle(`width: 25px`);

    expect(toggleMobile).toHaveStyle({
      display: 'none',
    });
  });

  it('Should render a ToggleDrawer actived', () => {
    renderTheme(
      <ToggleDrawer drawerIsOpen={true} activeDrawer={activeDrawer} />,
    );
    const toggleMobile = screen.getByLabelText('menu-toggle');

    expect(toggleMobile).toBeInTheDocument();

    expect(toggleMobile.getAttribute('data-active')).toBe('true');
    expect(toggleMobile.querySelector('p')).toHaveStyle(`width: 40px`);
  });

  it('Should render toggle Mobile when breakpoints screen lteLarge and navbar with display none ', () => {
    renderTheme(
      <ToggleDrawer drawerIsOpen={false} activeDrawer={activeDrawer} />,
    );
    const toggleMobile = screen.getByLabelText('menu-toggle');

    expect(toggleMobile).toHaveStyleRule('display', 'flex', {
      media: theme.media.lteLarge,
    });
  });

  it('Should call activerDrawer function when user clicks toggle button', () => {
    renderTheme(
      <ToggleDrawer drawerIsOpen={false} activeDrawer={activeDrawer} />,
    );
    const toggleMobile = screen.getByLabelText('menu-toggle');

    fireEvent.click(toggleMobile);
    expect(activeDrawer).toHaveBeenCalled();
  });

  it('Should match snapshot toggleDrawer not active', () => {
    renderTheme(
      <ToggleDrawer drawerIsOpen={false} activeDrawer={activeDrawer} />,
    );
    const toggleMobile = screen.getByLabelText('menu-toggle');

    expect(toggleMobile).toMatchSnapshot();
  });

  it('Should match snapshot toggleDrawer actived', () => {
    renderTheme(
      <ToggleDrawer drawerIsOpen={true} activeDrawer={activeDrawer} />,
    );
    const toggleMobile = screen.getByLabelText('menu-toggle');

    expect(toggleMobile).toMatchSnapshot();
  });
});
