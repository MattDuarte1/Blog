import { fireEvent, screen } from '@testing-library/react';
import { useSession, signIn, signOut } from 'next-auth/react';
import NavBar from '.';
import { renderTheme } from '@/styles/render-theme';
import { theme } from '@/styles/theme';
import mockMenus from './mock';

jest.mock('next-auth/react');
const mockUserSession = useSession as jest.Mock;
mockUserSession.mockReturnValue({
  status: 'unauthenticated',
  data: null,
});

(signIn as jest.Mock).mockImplementation(() => jest.fn());
(signOut as jest.Mock).mockImplementation(() => jest.fn());

describe('<NavBar />', () => {
  it('Should render correctly NavBar with menus', () => {
    const { container } = renderTheme(<NavBar menus={mockMenus} />);
    const navBar = container.querySelector('nav');
    const menus = screen.getAllByRole('link');

    expect(menus).toHaveLength(mockMenus.length);
    expect(navBar).toBeInTheDocument();
  });

  it('Should render NavBar with display none when breakpoints is leLarge', () => {
    renderTheme(<NavBar menus={mockMenus} />);
    const navBar = screen.getByLabelText('navbar');

    expect(navBar).toHaveStyleRule('display', 'none', {
      media: theme.media.lteLarge,
    });
  });

  it('should call signIn when clicked in subscribeButton', () => {
    renderTheme(<NavBar menus={mockMenus} />);
    const subscribButton = screen.getByRole('button');

    fireEvent.click(subscribButton);
    expect(signIn).toHaveBeenCalledTimes(1);
  });

  it('should call signOut when clicked in closeButton Svg(MdClose)', () => {
    mockUserSession.mockReturnValueOnce({
      status: 'authenticated',
      data: {
        user: {
          name: 'username',
          email: 'test@gmail.com',
          image: null,
        },
        expires: '1111',
      },
    });
    renderTheme(<NavBar menus={mockMenus} />);
    const LogoutIcon = screen.getByTestId('LogoutIcon');

    fireEvent.click(LogoutIcon);
    expect(signOut).toHaveBeenCalledTimes(1);
  });

  it('Should match snapshot the user not Logged', () => {
    const { container } = renderTheme(<NavBar menus={mockMenus} />);

    expect(container.firstElementChild).toMatchSnapshot();
  });

  it('Should match snapshot the user is Logged', () => {
    mockUserSession.mockReturnValueOnce({
      status: 'authenticated',
      data: {
        user: {
          name: 'username',
          email: 'test@gmail.com',
          image: null,
        },
        expires: '1111',
      },
    });
    const { container } = renderTheme(<NavBar menus={mockMenus} />);

    expect(container.firstElementChild).toMatchSnapshot();
  });
});
