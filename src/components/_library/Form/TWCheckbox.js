import React from 'react'
import { cn } from '../../../utils/cn'
import FormError from './TWFormError'

const Checkbox = ({
  error,
  label = '',
  name = '',
  rounded = 'sm',
  checked = false,
  disabled = false,
  touched = false,
  small = true,
  className = '',
  wrapperClassName = '',
  labelClassName = '',
  onChange = () => {},
  ...props
}) => {
  const checkboxClasses = cn('tw:!w-4 tw:!h-4 tw:!box-border tw:!inline-block', {
    'tw:!accent-green-600': !error || !touched,
    'tw:!appearance-none tw:!border tw:!border-red-700 tw:!bg-red-100 tw:!text-red-900 tw:!placeholder-red-700 tw:!rounded-sm':
      error && touched,
    'tw:!cursor-not-allowed': disabled,
  },
  className
)

  const labelClasses = cn('tw:!text-normal tw:!leading-5 tw:!ml-2 mb-0 tw:!font-medium', {
    'tw:!text-gray-400 tw:!cursor-not-allowed': disabled,
    'tw:!text-gray-800': !disabled,
    'tw:!text-sm': small,
  },
  labelClassName
)

  return (
    <div className={wrapperClassName}>
      <div className='tw:!flex tw:!items-center tw:!space-x-2'>
        <div className='tw:!flex tw:!items-start'>
          <input
            type='checkbox'
            id={name}
            name={name}
            checked={checked}
            onChange={onChange}
            disabled={disabled}
            className={checkboxClasses}
            {...props}
          />
        </div>
        <label htmlFor={name} className={labelClasses}>
          {label}
        </label>
      </div>
      <FormError error={error} touched={touched} />
    </div>
  )
}

export default Checkbox
