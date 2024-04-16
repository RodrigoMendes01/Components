import { ComponentProps } from 'react'

interface TableHeaderProps extends ComponentProps<'th'> {}

export function TableHeader(props: TableHeaderProps) {
  return (
    <th
      {...props}
      className="px-2 py-4 text-left text-sm font-semibold text-neutral-600"
    >
      {props.children}
    </th>
  )
}