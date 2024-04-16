import { ComponentProps } from 'react'

interface TableCellProps extends ComponentProps<'td'> {}

export function TableCell(props: TableCellProps) {
  return (
    <td
      {...props}
      className="font-regular cursor-pointer px-2 py-4 text-left text-xs text-neutral-600"
    >
      {props.children}
    </td>
  )
}