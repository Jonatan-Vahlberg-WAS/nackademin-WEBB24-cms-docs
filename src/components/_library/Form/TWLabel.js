
import { FaLock } from 'react-icons/fa';

import { cn } from '@/utils/cn'

const Label = ({
  children,
  className = "",
  spacing = "normal",
  error,
  required = false,
  touched = false,
  disabled = false,
  showLock = false,
  ...props
}) => {
  const labelClasses = cn(
    'tw:!text-sm tw:!font-bold tw:!mb-2',
    {
      'tw:!text-gray-500': !error || !touched,
      'tw:!text-red-700': error && touched,
      'tw:!text-gray-400': disabled,
      'tw:after:!content-["*"] tw:after:!text-red-500 tw:after:!-translate-y-1 tw:after:!tw-leading-none':
        required,
      'tw:!mb-0': spacing === "none",
      'tw:!mb-1': spacing === "tight",
      'tw:!mb-2': spacing === "normal",
      'tw:!mb-3': spacing === "loose",
    },
    className
  )
  return (
    <label className={labelClasses} {...props}>
      {children}
      {showLock && <FaLock className='tw:!ml-1' size={10} style={{ marginBottom: '4px' }} />}
    </label>
  )
}

export default Label;