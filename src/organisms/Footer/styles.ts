import styled, { css } from 'styled-components';

export const Container = styled.footer`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    width: 100%;
    padding: 5rem;

    box-shadow: 1px 0 1rem 0 rgba(0, 0, 0, 0.2);

    display: flex;

    @media ${theme.media.lteMedium} {
      flex-direction: column;
      gap: 4rem;
      padding: 5rem;
    }
  `}
`;

export const Content = styled.aside`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: ${theme.spacings.small};

    flex: 1;
  `}
`;

export const SocialMediaContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 2rem;
    justify-content: center;
    width: 40%;
    a {
      color: ${theme.colors.black};
    }

    text-decoration: none;
    color: ${theme.colors.black};
    svg {
      cursor: pointer;
      font-size: 25px;
      transition: all 0.4s ease;

      &:hover {
        transform: scale(1.1);
      }
    }
  `}
`;
