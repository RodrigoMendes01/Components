import { CrossCircledIcon } from '@radix-ui/react-icons';

interface ErrorProps {
  error?: string
}

export function Error ({ error }: ErrorProps) {
  return (
    <div className='flex gap-2 items-center mt-2 text-red-800'>
      <CrossCircledIcon/>
      <span className='text-xs'>{error}</span>
    </div>
  );
}