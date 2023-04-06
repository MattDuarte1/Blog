import { forwardRef, useState } from 'react';
import Logo from '@/atoms/Logo';
import NavBar from '@/molecules/NavBar';
import { IMenu } from '@/interfaces/Menu';
import * as Styled from './styles';
import ToggleDrawer from '@/atoms/ToggleDrawer';
import Link from 'next/link';
import { useBlogContext } from '@/contexts/Theme/hook';

interface StateMenuInterface {
  drawerIsOpen: boolean;
  menus: IMenu[];
}

const Header = forwardRef<HTMLElement>((props, ref) => {
  const [data, _] = useState<StateMenuInterface>({
    drawerIsOpen: false,
    menus: [
      { title: 'Inicio', newtab: false, href: '/#header' },
      { title: 'Sobre', newtab: false, href: '/#hero' },
      { title: 'Categoria', newtab: false, href: '/#categoria' },
      { title: 'Posts', newtab: false, href: '/#posts' },
    ],
  });
  const {
    state: { drawerIsOpen },
    activeDrawer,
  } = useBlogContext();

  return (
    <Styled.Container id="header" ref={ref} {...props}>
      <Link href={'/'}>
        <Logo />
      </Link>
      <NavBar menus={data.menus} />
      <ToggleDrawer
        activeDrawer={() => activeDrawer()}
        drawerIsOpen={drawerIsOpen}
      />
    </Styled.Container>
  );
});

Header.displayName = 'Header Component';

export default Header;
