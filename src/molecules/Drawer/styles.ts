import styled, { css } from 'styled-components';

interface IModalProps {
  isOpen?: boolean;
}

export const ModalBackDrop = styled.div<IModalProps>`
  ${({ isOpen }) => css`
    position: fixed;
    right: 0px;
    top: 0px;
    width: 100vw;
    transform: translateX(${isOpen ? '0%' : '100%'});
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.48);
    z-index: 100;
    transition: all 0.8s ease-in-out;
  `}
`;

export const Modal = styled.div<IModalProps>`
  ${({ theme, isOpen }) => css`
    position: fixed;
    right: 1px;
    top: 0px;
    bottom: 0px;
    width: ${isOpen ? '285px' : '0px'};
    padding: 25px;
    height: inherit;
    background-color: ${theme.colors.white};
    z-index: 110;
    transition: all 1s ease;

    > svg {
      position: absolute;
      top: 10px;
      right: 2rem;

      font-size: ${theme.font.sizes.large};
      color: ${theme.colors.black};
      cursor: pointer;
      transition: all 0.5s ease;

      &:hover {
        color: ${theme.colors.blue};
        transform: scale(1.1);
      }
    }
  `}
`;
