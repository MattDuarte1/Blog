import { IMenu } from '@/interfaces/Menu';
import Menu from '@/atoms/Menu';
import SubscriptionButton from '@/atoms/SubscriptionButton';
import * as Styled from './styles';
import { useSession, signIn, signOut } from 'next-auth/react';
import { forwardRef } from 'react';

interface NavBarProps {
  menus: IMenu[];
}

const NavBar = forwardRef<HTMLElement, NavBarProps>(
  ({ menus, ...props }, ref) => {
    const { data: session } = useSession();
    return (
      <Styled.Container aria-label="navbar" ref={ref} {...props}>
        {menus.map((item, key) => (
          <Menu
            key={key}
            title={item.title}
            link={item.href}
            newTab={item.newtab}
          />
        ))}
        <SubscriptionButton
          onSubscribe={() => signIn('github')}
          onUnSubscribe={() => signOut()}
          session={session}
        />
      </Styled.Container>
    );
  },
);

NavBar.displayName = 'Navbar component';

export default NavBar;
