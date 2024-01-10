import { StyledSpinner } from './styles';

export interface SpinnerProps {
  size: number
  bgColor: string
  spinColor: string
}

export function Spinner ({ size, bgColor, spinColor }: SpinnerProps) {
  return (
    <StyledSpinner size={size} bgColor={bgColor} spinColor={spinColor}/>
  )
}