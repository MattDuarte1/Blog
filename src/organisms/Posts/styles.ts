import styled, { css, DefaultTheme } from 'styled-components';

const MediaBreakPoints = {
  small: (theme: DefaultTheme) => css`
    @media ${theme.media.lteSmall} {
      padding: 3.5rem;
    }
  `,
};

export const Container = styled.div`
  ${({ theme }) => css`
    padding: 4.4rem;
    background-color: ${theme.colors.white};
    ${MediaBreakPoints.small(theme)}
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    margin-top: 1.4rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(26rem, 2fr));
    gap: ${theme.spacings.large};

    @media (max-width: 1065px) {
      grid-template-columns: repeat(auto-fill, minmax(27rem, 1fr));
    }

    @media (max-width: 705px) {
      justify-content: center;
      grid-template-columns: 0fr;
    }
  `}
`;
