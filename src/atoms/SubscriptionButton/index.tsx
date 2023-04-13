import * as Styled from './styles';
import { FaGithubAlt } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import Heading from '@/atoms/Heading';
import { forwardRef } from 'react';
import type { Session } from 'next-auth';

export interface SubscriptionButtonProps {
  session: Session | null;
  onSubscribe: () => void;
  onUnSubscribe: () => void;
}

const SubscriptionButton = forwardRef<
  HTMLButtonElement,
  SubscriptionButtonProps
>(({ session, onSubscribe, onUnSubscribe, ...props }, ref) => {
  if (session) {
    return (
      <Styled.Container ref={ref} {...props}>
        <FaGithubAlt color="green" size={30} />
        <Heading size="xsmall">{session?.user?.name}</Heading>
        <MdClose data-testid="LogoutIcon" size={30} onClick={onUnSubscribe} />
      </Styled.Container>
    );
  }
  return (
    <Styled.Container ref={ref} onClick={onSubscribe} {...props}>
      <FaGithubAlt size={30} />
      <Heading size="xsmall">Conectar com Github</Heading>
    </Styled.Container>
  );
});

SubscriptionButton.displayName = 'Subscription Button Component';

export default SubscriptionButton;
