import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 5rem;
  right: 0rem;
  z-index: 2;
`;

export const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 8.9rem;
  height: 4.5rem;
  line-height: 0;
  font-size: 0;
  overflow: hidden;
  color: rgba(0, 0, 0, 0);
`;

export const Input = styled.input`
  ${({ theme }) => css`
    appearance: none;
    opacity: 0;
    width: 0;
    height: 0;
    &:checked + ${Slider} {
      background: ${theme.colors.white};
    }
    &:focus + ${Slider} {
      box-shadow: 0 0 1px ${theme.colors.blue};
    }
    &:checked + ${Slider}:before {
      transform: translateX(4rem);
      background: ${theme.colors.blue};
    }
  `}
`;

export const Slider = styled.span`
  ${({ theme }) => css`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${theme.colors.lightGrey2};
    transition: all 300ms ease-in-out;
    border-radius: 2rem;
    box-shadow: 0 0 50px ${theme.colors.lightGrey2};
    &:before {
      content: '';
      position: absolute;
      height: 4.1rem;
      width: 4.1rem;
      left: 0.4rem;
      bottom: 0.2rem;
      background: ${theme.colors.blue};
      border-radius: 50%;
      transition: all 300ms ease-in-out;
    }
  `}
`;
