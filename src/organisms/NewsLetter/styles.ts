import styled, { css, DefaultTheme } from 'styled-components';

const BreakPoints = {
  Content: (theme: DefaultTheme) => css`
    @media ${theme.media.lteMedium} {
      > h1 {
        font-size: ${theme.font.sizes.medium};
      }

      @media ${theme.media.lteSmall} {
        > h1 {
          font-size: ${theme.font.sizes.small};
        }
        > span {
          font-size: ${theme.font.sizes.xsmall};
        }
      }
    }
  `,
};

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 58px;
    gap: 10px;
    background-color: ${theme.name === 'inverted'
      ? theme.colors.white
      : theme.colors.lightGrey2};
    width: 100%;
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 30px;

    max-width: 696px;

    ${BreakPoints.Content(theme)}
  `}
`;

export const Form = styled.form`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 20px;
  width: 100%;
`;

export const InputForm = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  padding: 21px 21px 21px 25px;

  width: 300px;
  height: 67px;

  /* White */

  background: #fffffe;
  border-radius: 8px;
  border: none;

  &:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`;
