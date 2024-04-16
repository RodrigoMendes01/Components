import { ComponentProps } from "react";
import { cn } from "../../app/utils/cn";

interface TableProps extends ComponentProps<'table'> {

}

export function Table({ className, ...props }: TableProps) {
  return(
    <div 
      className={cn('w-full rounded-lg bg-white p-4', className)}
    >
      <table
        {...props}
        className="w-full"
      >
        {props.children}
      </table>
    </div>
  )
}