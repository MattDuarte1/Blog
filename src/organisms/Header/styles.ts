import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 86px;
    background-color: ${theme.colors.white};
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.05));

    position: relative;
  `}
`;
