import styled, { keyframes } from 'styled-components';
import { SpinnerProps } from '.';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const StyledSpinner = styled.div<SpinnerProps>`
  width: ${({ size }) =>`${size}px`};
  height: ${({ size }) =>`${size}px`};
  border: 4px solid ${({ bgColor }) => `${bgColor}`};
  border-bottom-color: ${({ spinColor }) => `${spinColor}`};
  border-radius: 50%;
  box-sizing: border-box;
  animation: ${spin} 1s linear infinite;
`;