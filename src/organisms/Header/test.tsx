import Header from '.';
import { renderTheme } from '@/styles/render-theme';
import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { useSession } from 'next-auth/react';

jest.mock('next-auth/react');
const mockUserSession = useSession as jest.Mock;
mockUserSession.mockReturnValue({
  status: 'unauthenticated',
  data: null,
});

describe('<Header />', () => {
  it('Should render default header component with menus when toggle mobile is not visible', () => {
    renderTheme(<Header />);
    const logo = screen.getByText(/blogzin/i);
    const menus = screen.getAllByRole('link');

    expect(logo).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /blogzin/i })).toHaveAttribute(
      'href',
      '/',
    );
    expect(screen.getByLabelText('menu-toggle')).toHaveStyle({
      display: 'none',
    });
    expect(menus).toHaveLength(5);
  });

  it('Should call ActiveDrawer function when togglerDrawer is clicked', () => {
    renderTheme(<Header />);
    const toggleDrawer = screen.getByLabelText('menu-toggle');

    expect(toggleDrawer).toBeInTheDocument();

    fireEvent.click(toggleDrawer);
  });

  it('Should match snapshot component', () => {
    const { container } = renderTheme(<Header />);

    expect(container).toMatchSnapshot();
  });
});
