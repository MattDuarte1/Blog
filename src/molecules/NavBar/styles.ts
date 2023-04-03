import styled, { css } from 'styled-components';

export const Container = styled.nav`
  ${({ theme }) => css`
    display: flex;
    height: 44px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 50px;

    @media ${theme.media.lteLarge} {
      display: none;
    }
  `}
`;
