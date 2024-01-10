import { Spinner } from '../Spinner'
import { Container } from './styles'

export interface ButtonProps {
  children: string
  type?: string
  isLoading?: boolean
  bgColor: string
  hoverColor: string
  width?: number
}

export function Button ({ children, isLoading, bgColor, hoverColor, width }: ButtonProps) {
  return (
    <Container
      bgColor={bgColor}
      hoverColor={hoverColor}
      width={width}
    >
      {isLoading 
      ? <Spinner size={30} bgColor='#DEE2E6' spinColor='#1864AB'/> 
      : children
      }
    </Container>
  )
}