import * as Styled from './styles';
import { forwardRef } from 'react';
import Logo from '@/atoms/Logo';
import Heading from '@/atoms/Heading';
import AnchorLink from '@/atoms/Anchor';
import { RiGithubFill, RiLinkedinLine } from 'react-icons/ri';

const Footer = forwardRef<HTMLDivElement>(() => {
  return (
    <Styled.Container id="footer">
      <Styled.Content>
        <Logo />
        <Heading color="black" as="h6" size="xsmall">
          Criado por Mateus Duarte
        </Heading>
        <Styled.SocialMediaContent>
          <AnchorLink
            href="https://github.com/MattDuarte1"
            newTab
            rel="noreferrer"
          >
            <RiGithubFill />
          </AnchorLink>
          <AnchorLink
            href="https://www.linkedin.com/in/mateus-duarte-aa2a1b1b3/"
            newTab
            rel="noreferrer"
          >
            <RiLinkedinLine />
          </AnchorLink>
        </Styled.SocialMediaContent>
        <AnchorLink
          href={'/api/preview?pass=9214984e8f485ds4f8ds4f8438r4w98f4s6d541c'}
        >
          <Heading color="black" size="xsmall">
            Ativar/Desativar Modo Real-Time
          </Heading>
        </AnchorLink>
      </Styled.Content>
    </Styled.Container>
  );
});

Footer.displayName = 'Footer component';

export default Footer;
