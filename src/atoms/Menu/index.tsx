import React, { ComponentProps, FC, forwardRef, HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import NextLink from 'next/link';

const StyledLink = styled(NextLink)`
  ${({ theme }) => css`
    font-family: ${theme.font.family.default};
    font-style: normal;
    font-weight: 600;
    font-size: ${theme.font.sizes.xsmall};
    line-height: 25px;
    text-transform: capitalize;
    color: ${theme.colors.black};
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    max-width: 100px;
    height: 25px;
  `}
`;

type MenuProps = {
  title: string;
  newTab?: boolean;
  link: string;
};

const Menu = forwardRef<HTMLAnchorElement, MenuProps>(
  ({ title, newTab = false, link, ...props }, ref) => {
    const target = newTab ? '_blank' : '_self';

    return (
      <StyledLink
        ref={ref}
        href={link}
        scroll={false}
        target={target}
        {...props}
      >
        {title}
      </StyledLink>
    );
  },
);

Menu.displayName = 'Menu Component';

export default Menu;
