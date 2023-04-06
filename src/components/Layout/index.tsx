import Drawer from '@/molecules/Drawer';
import Footer from '@/organisms/Footer';
import Header from '@/organisms/Header';
import ToggleTheme from '@/atoms/ToggleTheme';
import ToastAnimated from '@/molecules/ToastAnimated';
import { ReactNode, forwardRef } from 'react';
import { GlobalStyle } from '@/styles/globalStyles';
import { useBlogContext } from '@/contexts/Theme/hook';
import useThemeSwitcher from '@/funcs/useThemeSwitch';

type DashBoardProps = {
  children: ReactNode;
};

const Layout = forwardRef<HTMLDivElement, DashBoardProps>(
  ({ children, ...props }, ref) => {
    const {
      activeDrawer,
      state: { drawerIsOpen },
    } = useBlogContext();
    const { checked, handleChange } = useThemeSwitcher();

    return (
      <div ref={ref} {...props}>
        <Drawer drawerIsOpen={drawerIsOpen} activeDrawer={activeDrawer} />
        <GlobalStyle />
        <Header />
        {children}
        <ToggleTheme checked={checked} onChange={handleChange} />
        <Footer />
        <ToastAnimated />
      </div>
    );
  },
);

Layout.displayName = 'Layout Component';

export default Layout;
