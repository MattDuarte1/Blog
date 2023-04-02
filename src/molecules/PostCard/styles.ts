import styled, { css, DefaultTheme } from 'styled-components';

const MediaBreapoints = {
  AuthorDescription: {
    small: (theme: DefaultTheme) => css`
      @media ${theme.media.lteSmall} {
        > img {
          width: 47px;
          height: 47px;
        }
      }
    `,
  },
};

export const Container = styled.article`
  ${({ theme }) => css`
    width: 300px;
    height: 425px;
    padding: 1.4rem;
    background: ${theme.colors.white};
    position: relative;

    box-shadow: 4px 6px 13px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    text-align: start;
    transition: all 0.2s ease;
    cursor: pointer;

    > h1 {
      margin-left: 1rem;
    }

    img {
      margin-bottom: 2rem;
    }

    &:hover {
      transform: scale(1.02);
      filter: drop-shadow(0 1.5px 2px rgba(0, 0, 0, 0.2));
    }
  `}
`;

export const AuthorContent = styled.div`
  ${({ theme }) => css`
    position: absolute;
    padding: 0 1.4rem;
    width: 100%;
    height: 57px;
    left: 0px;
    top: 348px;
    display: flex;
    color: ${theme.colors.black};
  `}
`;

export const AuthorDescription = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 90%;
    flex-direction: row;
    justify-content: center;
    padding: 0px;
    gap: 15px;
    color: ${theme.colors.black};

    ${MediaBreapoints.AuthorDescription['small'](theme)}
  `}
`;

export const Avatar = styled.div`
  overflow: hidden;
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;

export const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2px;
  gap: 4.2px;

  width: 184px;
  height: 46.2px;
`;

export const ViewBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;

  > svg {
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.font.sizes.medium};
  }

  > h1 {
    display: inline;
  }
`;
