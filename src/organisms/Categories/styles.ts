import styled, { css, DefaultTheme } from 'styled-components';

const BreakPoints = {
  ContainerSize: {
    medium: (theme: DefaultTheme) => css`
      @media ${theme.media.lteMedium} {
        padding: ${theme.spacings.medium};
      }
    `,
  },
  CategoryBodySize: {
    small: (theme: DefaultTheme) => css`
      @media ${theme.media.lteSmall} {
        div {
          width: 100%;
        }
      }
    `,
  },
};

export const Container = styled.section`
  ${({ theme }) => css`
    display: block;
    padding: ${theme.spacings.xxlarge};
    background-color: ${theme.colors.white};
    width: 100%;
    height: 100%;

    ${BreakPoints.ContainerSize['medium'](theme)}
  `}
`;

export const CategoryHeader = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

export const CategoryBody = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    min-width: 100%;
    height: 100%;
    gap: 37px;

    ${BreakPoints.CategoryBodySize['small'](theme)}
  `}
`;
