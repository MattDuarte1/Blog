import { fireEvent, screen } from '@testing-library/react';
import type { Session } from 'next-auth';
import SubscriptionButton, { SubscriptionButtonProps } from '.';
import { renderTheme } from '@/styles/render-theme';
import { theme } from '@/styles/theme';

const mockSession: Session = {
  user: {
    name: 'mateus',
    email: 'mateus@gmail.com',
    image: '',
  },
  expires: '',
};

describe('<SubscriptionButton>', () => {
  it('Should render a SubscriptionButton when the user is not logged', () => {
    const props: SubscriptionButtonProps = {
      session: null,
      onSubscribe: () => {},
      onUnSubscribe: () => {},
    };

    renderTheme(<SubscriptionButton {...props} />);
    const subscriptionButton = screen.getByRole('button', {
      name: /conectar com github/i,
    });

    expect(subscriptionButton).toBeInTheDocument();
    expect(
      getComputedStyle(
        subscriptionButton.querySelector('h1') as HTMLHeadingElement,
      ).fontSize,
    ).toBe(theme.font.sizes.xsmall);
  });

  it('Should render a SubscriptionButton with the user name when user is logged', () => {
    const props: SubscriptionButtonProps = {
      session: mockSession,
      onSubscribe: () => {},
      onUnSubscribe: () => {},
    };

    renderTheme(<SubscriptionButton {...props} />);
    const subscriptionButton = screen.getByRole('button', { name: /mateus/i });

    expect(subscriptionButton).toBeInTheDocument();

    expect(
      getComputedStyle(
        subscriptionButton.querySelector('h1') as HTMLHeadingElement,
      ).fontSize,
    ).toBe(theme.font.sizes.xsmall);
  });

  it('Should render the Signout X Icon when the user is logged', () => {
    const props: SubscriptionButtonProps = {
      session: mockSession,
      onSubscribe: () => {},
      onUnSubscribe: () => {},
    };
    renderTheme(<SubscriptionButton {...props} />);
    const MdCloseIcon = screen.getByTestId('LogoutIcon');

    expect(MdCloseIcon).toBeInTheDocument();
    expect(MdCloseIcon).toHaveAttribute('width', '30');
  });

  it('Should call the onSubscribe function when the SubscriptionButton is clicked, but the user must be logged out.', () => {
    const handleSubscribeClicked = jest.fn();

    const props: SubscriptionButtonProps = {
      session: null,
      onSubscribe: handleSubscribeClicked,
      onUnSubscribe: () => {},
    };
    renderTheme(<SubscriptionButton {...props} />);
    const subscriptionButton = screen.getByRole('button', {
      name: /conectar com github/i,
    });

    fireEvent.click(subscriptionButton);

    expect(handleSubscribeClicked).toHaveBeenCalled();
  });

  it('Should call the onUnSubscribe function when the X Icon is clicked, but the user must be logged in.', () => {
    const handleUnSubscribeClicked = jest.fn();

    const props: SubscriptionButtonProps = {
      session: mockSession,
      onSubscribe: () => {},
      onUnSubscribe: handleUnSubscribeClicked,
    };
    renderTheme(<SubscriptionButton {...props} />);
    const MdCloseIcon = screen.getByTestId('LogoutIcon');

    fireEvent.click(MdCloseIcon);

    expect(handleUnSubscribeClicked).toHaveBeenCalled();
  });

  it('Should match snapshot SubscriptionButton when the user is not logged', () => {
    const props: SubscriptionButtonProps = {
      session: null,
      onSubscribe: () => {},
      onUnSubscribe: () => {},
    };
    renderTheme(<SubscriptionButton {...props} />);

    expect(screen.getByRole('button')).toMatchSnapshot();
  });

  it('Should match snapshot SubscriptionButton when the user is logged', () => {
    const props: SubscriptionButtonProps = {
      session: mockSession,
      onSubscribe: () => {},
      onUnSubscribe: () => {},
    };
    renderTheme(<SubscriptionButton {...props} />);

    expect(screen.getByRole('button', { name: /mateus/i })).toMatchSnapshot();
  });
});
