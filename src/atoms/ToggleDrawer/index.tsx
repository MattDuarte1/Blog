import * as Styled from './styles';
import { forwardRef } from 'react';

type ToggleDrawerProps = {
  drawerIsOpen: boolean;
  activeDrawer: () => void;
};

const ToggleDrawer = forwardRef<HTMLButtonElement, ToggleDrawerProps>(
  ({ drawerIsOpen, activeDrawer, ...props }, ref) => {
    return (
      <Styled.Toggle
        ref={ref}
        aria-label="menu-toggle"
        data-active={drawerIsOpen}
        active={drawerIsOpen}
        onClick={() => activeDrawer()}
        {...props}
      >
        <p></p>
        <p></p>
        <p></p>
      </Styled.Toggle>
    );
  },
);

ToggleDrawer.displayName = 'Toggle Drawer Component';

export default ToggleDrawer;
