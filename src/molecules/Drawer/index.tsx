import { forwardRef, MutableRefObject } from 'react';
import * as Styled from './styles';
import ModalBody from './ModalBody';
import { IoMdClose } from 'react-icons/io';

import MockDrawer from './mock';

type DrawerProps = {
  drawerIsOpen: boolean;
  activeDrawer: () => void;
};

const Drawer = forwardRef<HTMLDivElement, DrawerProps>(
  (
    { drawerIsOpen, activeDrawer, ...props },
    ref: MutableRefObject<HTMLDivElement>,
  ) => {
    const handleBackDropClick = (e: React.SyntheticEvent) => {
      const target = e.target as HTMLDivElement | HTMLAnchorElement;
      if (
        target.getAttribute('aria-label') === 'modal-backdrop' ||
        target.getAttribute('target')
      ) {
        activeDrawer();
      }
    };

    return (
      <Styled.ModalBackDrop
        aria-label="modal-backdrop"
        aria-expanded={drawerIsOpen}
        ref={ref}
        onClick={handleBackDropClick}
        isOpen={drawerIsOpen}
        {...props}
      >
        <Styled.Modal
          role="dialog"
          aria-describedby="-modal-"
          isOpen={drawerIsOpen}
        >
          <IoMdClose aria-label="close-button" onClick={activeDrawer} />
          <ModalBody aria-describedby="modal-body" data={MockDrawer.menus} />
        </Styled.Modal>
      </Styled.ModalBackDrop>
    );
  },
);

Drawer.displayName = 'Drawer Component';

export default Drawer;
