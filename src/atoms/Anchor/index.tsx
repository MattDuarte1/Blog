import Link from 'next/link';
import { ReactNode, forwardRef } from 'react';
import styled, { css } from 'styled-components';

const StyledLink = styled(Link)`
  ${({ theme }) => css`
    cursor: pointer;
    color: ${theme.colors.black};
  `}
`;

type AnchorLinkProps = {
  children: ReactNode;
  newTab?: boolean;
  href: string;
  scroll?: boolean;
  rel?: string;
};

const AnchorLink = forwardRef<HTMLAnchorElement, AnchorLinkProps>(
  ({ children, href, scroll = false, newTab = false, rel, ...props }, ref) => {
    const target = newTab ? '_blank' : '_self';
    return (
      <StyledLink
        ref={ref}
        href={href}
        scroll={scroll}
        target={target}
        rel={rel}
        {...props}
      >
        {children}
      </StyledLink>
    );
  },
);

AnchorLink.displayName = 'Anchor Link';

export default AnchorLink;
