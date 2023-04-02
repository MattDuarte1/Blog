import styled, { css, DefaultTheme } from 'styled-components';

const MediaContainer = {
  small: (theme: DefaultTheme) => css`
    @media ${theme.media.lteSmall} {
      width: 80%;
    }
  `,
};

interface ContainerProps {
  isActive: boolean;
}

const MenuIsActive = (isActive: boolean, theme: DefaultTheme) =>
  isActive &&
  css`
    background-color: ${theme.colors.blue};
    color: #fff;
  `;

export const Container = styled.article<ContainerProps>`
  ${({ theme, isActive }) => css`
    display: flex;
    align-items: center;
    padding-left: ${theme.spacings.large};
    width: 220px;
    height: 280px;
    color: ${theme.colors.black};
    background-color: ${theme.colors.white};
    filter: drop-shadow(4px 6px 13px rgba(0, 0, 0, 0.1));
    border-radius: 8px;
    cursor: pointer;

    > div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      text-align: center;
      padding: 0px;
      gap: 30px;
    }

    &:hover {
      background-color: ${theme.colors.blue};
      color: white;
    }

    ${MediaContainer.small(theme)}
    ${MenuIsActive(isActive, theme)}
  `}
`;
