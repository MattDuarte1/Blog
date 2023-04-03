import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    color: ${theme.colors.white};
    background-color: ${theme.colors.black};
    display: flex;
    padding: 1rem;
    align-items: center;
    justify-content: center;
    font-weight: 700;

    > p {
      font-size: ${theme.font.sizes.xsmall};
    }

    @media ${theme.media.lteMedium} {
      > p {
        font-size: 1.2rem;
      }
    }
  `}
`;

interface IBall {
  status?: string;
}

const ballColor = {
  connecting: '#F1C40F',
  connected: '#1efc1e',
  closed: '#BA1200',
};

export const Ball = styled.span<IBall>`
  ${({ status }) => css`
    height: 0.75rem;
    width: 0.75rem;
    margin-right: 1rem;
    background-color: ${ballColor[status]};
    border-radius: 99999px;
    animation: pulse 1s infinite;

    @keyframes pulse {
      0% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 ${ballColor[status]};
      }

      70% {
        transform: scale(1);
        box-shadow: 0 0 0 5px rgba(155, 155, 155, 0.1);
      }

      100% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(155, 155, 155, 0.1);
      }
    }
  `}
`;
