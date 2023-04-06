import styled, { css } from 'styled-components';

const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  `}
`;

const Title = styled.h1`
  ${({ theme }) => css`
    width: 100%;
    text-align: center;

    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: 700;

    @media ${theme.media.lteSmall} {
      font-size: ${theme.font.sizes.medium};
    }
  `}
`;

const FourZeroFour = styled(Title)`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.huge};
  `}
`;

export const NotFoundPage = () => {
  return (
    <Container>
      <Title>Page Not Found</Title>
      <FourZeroFour>404</FourZeroFour>
    </Container>
  );
};
