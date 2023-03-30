import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    flex: 1 1 0%;
    display: flex;
    padding: 2rem;
    width: 100%;
    height: inherit;
    justify-content: flex-start;
    gap: 2rem;
    flex-direction: column;
    align-items: center;

    > a {
      min-width: 100%;

      &:hover {
        color: ${theme.colors.blue};
      }
    }
  `}
`;
