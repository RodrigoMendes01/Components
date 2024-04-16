import { ComponentProps } from "react";
import { cn } from "../../app/utils/cn";

interface TableRowProps extends ComponentProps<'tr'> {
}

export function TableRow({className, ...props}: TableRowProps) {
  return (
    <tr
      {...props}
      className={cn('', className)}
    >
      {props.children}
    </tr>
  )
}