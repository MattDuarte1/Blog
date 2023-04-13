import styled, { css, DefaultTheme, keyframes } from 'styled-components';

const BreakPoints = {
  Container: {
    medium: (theme: DefaultTheme) => css`
      @media ${theme.media.lteLarge} {
        padding: ${theme.spacings.huge} ${theme.spacings.medium};
      }
    `,
  },
  DescriptionSize: {
    small: (theme: DefaultTheme) => css`
      @media ${theme.media.lteSmall} {
        margin-top: 20px;
        font-size: ${theme.font.sizes.xsmall};
        line-height: normal;
      }
    `,
    medium: (theme: DefaultTheme) => css`
      @media ${theme.media.lteMedium} {
        margin-top: 40px;
        font-size: ${theme.font.sizes.small};
        line-height: normal;
      }
    `,
  },
  AsideRight: {
    medium: (theme: DefaultTheme) => css`
      @media ${theme.media.lteMedium} {
        img {
          width: 280px;
          height: 280px;
        }
      }
    `,
  },
};

const cursorEffect = (theme: DefaultTheme) => keyframes`
  0% {
    background-color: ${theme.colors.black};
  }
  100% {
    background-color: ${theme.colors.white};
  }
`;

export const Container = styled.section`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.spacings.xhuge} ${theme.spacings.medium};
    min-height: 700px;
    display: flex;
    background-color: ${theme.colors.white};
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;

    ${BreakPoints.Container['medium'](theme)}
  `}
`;

export const AsideLeft = styled.aside`
  ${({ theme }) => css`
    max-height: 400px;
    max-width: 664px;
    padding: 25px
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;

    span {
      color: transparent;
      width: 5px;
      height: 100%;
      width: 2px;
      animation: ${cursorEffect(theme)} 1s infinite;
    }
  `}
`;

export const AsideRight = styled(AsideLeft)`
  ${({ theme }) => css`
    justify-content: center;
    display: block;

    ${BreakPoints.AsideRight['medium'](theme)}
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    padding-left: 15px;
    margin-top: 25px;
    font-family: ${theme.font.family.default};
    font-style: normal;
    font-weight: 400;
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.darkGrey};
    line-height: 25px;
    margin-left: 20px;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      left: 0px;
      background-color: ${theme.colors.black};
      width: 5px;
      height: 100%;
    }

    ${BreakPoints.DescriptionSize['small'](theme)}
    ${BreakPoints.DescriptionSize['medium'](theme)}
  `}
`;
