import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    font-family: ${theme.font.family.default};
    font-style: normal;
    font-weight: 600;
    font-size: ${theme.font.sizes.large};
    line-height: 45px;
    position: relative;
    &::first-letter {
      color: ${theme.colors.blue};
    }

    &::after {
      content: '.blog';
      font-family: ${theme.font.family.default};
      font-style: normal;
      font-weight: 600;
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors.blue};
    }
  `}
`;
