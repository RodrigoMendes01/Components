import { ComponentProps } from 'react'
import { Spinner } from '../spinner'
import { cn } from '../../app/utils/cn'

interface ButtonProps extends ComponentProps<'button'> {
  isLoading: boolean
}

export function Button ({ isLoading, className, ...props  }: ButtonProps) {
  return (
    <button
      {...props}
      className={cn("flex items-center justify-center uppercase w-full h-14 px-6 rounded-lg text-white text-base font-bold bg-blue-700 shadow-lg transition-all hover:bg-blue-800", className)}
    >
      {isLoading 
      ? <Spinner className='w-7 h-7'/> 
      : (props.children)
      }
    </button>
  )
}