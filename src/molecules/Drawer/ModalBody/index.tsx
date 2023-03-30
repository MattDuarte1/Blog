import { IMenu } from '@/interfaces/Menu';
import Menu from '@/atoms/Menu';
import SubscriptionButton from '@/atoms/SubscriptionButton';
import { useSession, signIn, signOut } from 'next-auth/react';
import * as Styled from './styles';
import { forwardRef } from 'react';

type ModalBodyProps = {
  data: readonly IMenu[];
};

const ModalBody = forwardRef<HTMLDivElement, ModalBodyProps>(
  ({ data, ...props }, ref) => {
    const { data: session } = useSession();
    return (
      <Styled.Container ref={ref} {...props}>
        <SubscriptionButton
          session={session}
          onSubscribe={() => signIn('github')}
          onUnSubscribe={() => signOut()}
        />
        {data.map((menu, index) => (
          <Menu
            key={index}
            title={menu.title}
            link={menu.href}
            newTab={menu.newtab}
          />
        ))}
      </Styled.Container>
    );
  },
);

ModalBody.displayName = 'ModalBody Component';

export default ModalBody;
