import { ComponentProps, ReactNode } from "react";
import InputMask from 'react-input-mask'
import { cn } from "../../app/utils/cn";

interface InputProps extends ComponentProps<'input'> {
  label: string
  mask: string
  icon: ReactNode
}

export function Input({ label, mask, icon, ...props }: InputProps) {
  return (
    <div>
      <label
        htmlFor={label}
        className={cn(
          'mb-1 text-sm text-neutral-600',
          props.disabled && 'cursor-not-allowed'
        )}
      />
      <div className="flex">
        {icon}
        <InputMask
          mask={mask}
          maskChar={''}
          name={label}
          id={label}
          className="text-lg block w-full border-0 bg-transparent p-0 outline-none placeholder:truncate placeholder:text-neutral-500 focus:ring-0 disabled:cursor-not-allowed"
        />
      </div>
    </div>
  )
}
