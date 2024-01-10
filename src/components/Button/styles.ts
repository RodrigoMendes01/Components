import styled from "styled-components";

interface ContainerProps {
  bgColor: string
  hoverColor: string
  width?: number
}

export const Container = styled.button<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: ${({ width }) => width ? `${width}px` : 'auto' };
  padding: 0 24px;
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  background-color: ${({ bgColor }) =>  bgColor };
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  transition: background 0.2s ease-in;

  &:hover {
    background-color: ${({ hoverColor }) =>  hoverColor };
    cursor: pointer;
  }
`