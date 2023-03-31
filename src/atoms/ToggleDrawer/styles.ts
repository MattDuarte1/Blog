import styled, { css } from 'styled-components';

type IToggle = {
  active?: boolean;
};

export const Toggle = styled.button<IToggle>`
  ${({ theme, active }) => css`
    background-color: #fff;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
    border-radius: 10px;
    border: none;
    overflow: hidden;
    display: none;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 70px;
    width: 70px;

    p {
      position: absolute;
      width: 40px;
      height: 4px;
      background-color: ${theme.colors.blue};
      border-radius: 4px;
      transition: 0.5s;
    }

    p:nth-child(1) {
      transform: ${active
        ? 'translateY(0px) rotate(45deg)'
        : 'translateY(-15px)'};
      width: ${active ? '40px' : '25px'};
      left: 15px;
    }

    p:nth-child(2) {
      transform: ${active
        ? 'translateY(0px) rotate(315deg)'
        : 'translateY(15px)'};
      width: ${active ? '40px' : '15px'};
      left: 15px;
    }

    p:nth-child(3) {
      transform: ${active && 'translateX(60px)'};
    }

    @media ${theme.media.lteLarge} {
      display: flex;
    }
  `}
`;
