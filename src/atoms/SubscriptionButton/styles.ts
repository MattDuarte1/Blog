import styled, { css } from 'styled-components';

export const Container = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.blue};
    border: none;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.9rem;
    padding: 1rem;

    cursor: pointer;
  `}
`;
