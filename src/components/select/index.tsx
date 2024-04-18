import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'
import * as RdxSelect from '@radix-ui/react-select'
import { useState } from 'react'
import { cn } from '../../app/utils/cn'

interface SelectProps {
  className?: string
  error?: string
  label?: string
  placeholder?: string
  options: {
    category: string
    itens: { value: string; label: string }[]
  }[]
  value?: string
  onChange?(value: string): void
}

export function Select({
  className,
  label,
  placeholder,
  options,
  error,
  onChange,
  value,
}: SelectProps) {
  const [selectedValue, setSelectedValue] = useState(value ?? '')

  function handleSelect(value: string) {
    setSelectedValue(value)
    onChange?.(value)
  }

  return (
    <div className={cn('w-full', className)}>
      <div>
        <label className="leading-6 text-gray-900">{label}</label>

        <RdxSelect.Root value={value} onValueChange={handleSelect}>
          <RdxSelect.Trigger
            className={cn(
              (className =
                'flex h-14 w-full items-center justify-between gap-2 rounded bg-background-main px-2 text-neutral-600 shadow'),
              error && '!border-red-600',
            )}
          >
            <RdxSelect.Value placeholder={placeholder} />

            <RdxSelect.Icon>
              <ChevronDownIcon className="h-5 w-5 text-secondary-dark" />
            </RdxSelect.Icon>
          </RdxSelect.Trigger>

          <RdxSelect.Portal>
            <RdxSelect.Content className="z-[99] max-w-[480px] overflow-hidden rounded border border-gray-100 bg-white shadow-md">
              <RdxSelect.ScrollUpButton className="flex h-8 cursor-pointer items-center justify-center bg-white text-gray-800">
                <ChevronUpIcon className="h-6 w-6 text-secondary-dark" />
              </RdxSelect.ScrollUpButton>

              <RdxSelect.Viewport className="p-4">
                {options.map((option) => (
                  <RdxSelect.Group key={option.category}>
                    <RdxSelect.Label className="py-3 text-sm text-gray-500">
                      {option.category}
                    </RdxSelect.Label>
                    {option.itens.map((item) => (
                      <RdxSelect.Item
                        value={item.value}
                        key={item.value}
                        className="cursor-pointer truncate py-2 transition-all hover:text-secondary-dark"
                      >
                        <RdxSelect.ItemText>{item.label}</RdxSelect.ItemText>
                      </RdxSelect.Item>
                    ))}
                  </RdxSelect.Group>
                ))}
              </RdxSelect.Viewport>

              <RdxSelect.ScrollDownButton className="flex h-8 cursor-pointer items-center justify-center bg-white text-gray-800">
                <ChevronDownIcon className="h-6 w-6 text-secondary-dark" />
              </RdxSelect.ScrollDownButton>
            </RdxSelect.Content>
          </RdxSelect.Portal>
        </RdxSelect.Root>
      </div>
    </div>
  )
}
