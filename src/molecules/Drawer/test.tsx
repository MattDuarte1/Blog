import { fireEvent, screen } from '@testing-library/react';
import Drawer from '.';
import { renderTheme } from '@/styles/render-theme';
import { useSession } from 'next-auth/react';
import React from 'react';

jest.mock('next-auth/react');
const mockUserSession = useSession as jest.Mock;
mockUserSession.mockReturnValue({
  status: 'unauthenticated',
  data: null,
});

const activeDrawer = jest.fn();

describe('<Drawer>', () => {
  it('Should render correctly Drawer component with modal not active', () => {
    renderTheme(<Drawer drawerIsOpen={false} activeDrawer={activeDrawer} />);
    const backDropModal = screen.getByLabelText('modal-backdrop');

    expect(backDropModal).toBeInTheDocument();
    expect(backDropModal).toHaveAttribute('aria-expanded', `false`);
    expect(backDropModal).toHaveStyle(`
      transform: translateX(100%);
      background: rgba(0, 0, 0, 0.48);
      position: fixed;
    `);
  });

  it('Should render correctly Drawer component with modal active', () => {
    renderTheme(<Drawer drawerIsOpen={true} activeDrawer={activeDrawer} />);
    const backDropModal = screen.getByLabelText('modal-backdrop');
    const Modal = screen.getByRole('dialog');

    expect(backDropModal).toHaveAttribute('aria-expanded', 'true');
    expect(Modal).toBeInTheDocument();
    expect(backDropModal).toHaveStyle(`
      transform: translateX(0%);
      background-color: rgba(0, 0, 0, 0.48);
      position: fixed;
    `);
  });

  it('Should call function when clicked in backdropModal', () => {
    renderTheme(<Drawer drawerIsOpen={true} activeDrawer={activeDrawer} />);
    const backDropModal = screen.getByLabelText('modal-backdrop');

    expect(backDropModal).toBeInTheDocument();
    expect(backDropModal.getAttribute('aria-expanded')).toBe('true');

    fireEvent.click(backDropModal);
    expect(activeDrawer).toHaveBeenCalled();
  });

  it('Should call function when clicked in close Button', () => {
    renderTheme(<Drawer drawerIsOpen={true} activeDrawer={activeDrawer} />);
    const closeButton = screen.getByLabelText('close-button');

    expect(closeButton).toBeInTheDocument();

    fireEvent.click(closeButton);
    expect(activeDrawer).toHaveBeenCalled();
  });

  it('Should call function when clicked in menus', () => {
    renderTheme(<Drawer drawerIsOpen={true} activeDrawer={activeDrawer} />);
    const menuInicio = screen.getByRole('link', { name: /inicio/i });

    expect(menuInicio).toBeInTheDocument();
    fireEvent.click(menuInicio);
    expect(activeDrawer).toHaveBeenCalled();
  });

  it('Should match snapshot drawer open', () => {
    const { container } = renderTheme(
      <Drawer drawerIsOpen={true} activeDrawer={activeDrawer} />,
    );

    expect(container).toMatchSnapshot();
  });
});
