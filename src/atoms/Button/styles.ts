import styled, { css } from 'styled-components';

export const Container = styled.button`
  ${({ theme, disabled }) => css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 20px 23px 19px;
    gap: 10px;
    border: none;
    cursor: ${disabled ? 'not-allowed' : 'pointer'};

    min-width: 145px;
    height: 67px;
    font-weight: 700;
    color: #ffff;

    background: ${theme.colors.blue};
    border-radius: 8px;
    transition: filter 0.4s ease;

    filter: ${disabled && 'brightness(0.7)'};

    &:hover {
      filter: ${!disabled && 'brightness(1.1)'};
    }
  `}
`;
