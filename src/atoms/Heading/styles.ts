import styled, { css, DefaultTheme } from 'styled-components';

interface ContainerProps {
  size?:
    | 'xxsmall'
    | 'xsmall'
    | 'small'
    | 'medium'
    | 'large'
    | 'xlarge'
    | 'xxlarge'
    | 'huge'
    | 'xhuge';
  color:
    | 'white'
    | 'lightGrey1'
    | 'lightGrey2'
    | 'grey'
    | 'darkGrey'
    | 'black'
    | 'blue';
  uppercase: boolean;
}
const MediaFont = {
  large: (theme: DefaultTheme) => css`
    @media ${theme.media.lteSmall} {
      font-size: ${theme.font.sizes.medium};
    }
  `,
  xxlarge: (theme: DefaultTheme) => css`
    @media ${theme.media.lteMedium} {
      font-size: ${theme.font.sizes.xlarge};
    }
    @media ${theme.media.lteSmall} {
      font-size: ${theme.font.sizes.large};
    }
  `,
};

const TitleSize = {
  xxsmall: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xxsmall};
  `,
  xsmall: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xsmall};
  `,
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
  `,
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.large};
    ${MediaFont.large(theme)};
  `,
  xlarge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};
  `,
  xxlarge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xxlarge};
    ${MediaFont.xxlarge(theme)};
  `,
  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.huge};
  `,
  xhuge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xhuge};
  `,
};

const TitleCase = (uppercase: boolean) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

const TitleColor = (
  color:
    | 'white'
    | 'lightGrey1'
    | 'lightGrey2'
    | 'grey'
    | 'darkGrey'
    | 'black'
    | 'blue',
  theme: DefaultTheme,
) => css`
  color: ${color ? theme.colors[color] : theme.colors.black};
`;

export const Container = styled.h1<ContainerProps>`
  ${({ theme, size, color, uppercase }) => css`
    font-family: ${theme.font.family.default};
    font-style: normal;
    font-weight: 700;
    line-height: 1.2;
    text-transform: capitalize;

    ${TitleSize[size](theme)}
    ${TitleCase(uppercase)}
    ${TitleColor(color, theme)}
  `}
`;
