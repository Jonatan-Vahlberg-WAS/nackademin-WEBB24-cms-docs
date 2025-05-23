import { FaCheck } from 'react-icons/fa'

import { cn } from '@/utils/cn'
import T from '../Ui/TWTypography'
import FormError from './TWFormError'

export const SelectMultipleOption = ({ value, label, checked, onChange, disabled, error, className, ...props }) => {
  const optionClasses = cn(
    'tw:!py-0.5 tw:!px-2 tw:!border-radius-sm tw:!cursor-pointer tw:!bg-gray-50 tw:!text-sm tw:!mb-0',
    {
      'tw:hover:!bg-gray-200': !disabled,
      'tw:!bg-gray-200': checked,
      'tw:!bg-gray-25 tw:!opacity-50 tw:!pointer-events-none': disabled,
      'tw:!opacity-70': disabled && checked,
      'tw:!bg-red-100 tw:!text-red-700': error
    },
    className
  )

  return (
    <T.Text {...props} onClick={() => onChange(value)} className={optionClasses}>
      {checked && <FaCheck className='tw:!mr-2' />}
      {label}
    </T.Text>
  )
}

const SelectMultiple = ({
  options = [],
  name,
  submitCount = 0,
  messageClassName = '',
  placeholder = '',
  value = [],
  disabled = false,
  onChange = (value) => {},
  renderOption,
  border = 'none',
  className = '',
  ...props
}) => {
  const _touched = submitCount > 0 || props.touched
  const _error = _touched && props.error

  const containerClasses = cn(
    'tw:!flex tw:!flex-col tw:!gap-1 tw:!p-2 tw:!min-h-5 tw:!text-sm tw:!bg-gray-50 tw:!rounded-md',
    {
      'tw:!border-none': border === 'none',
      'tw:!border-gray-200 tw:!border-1 tw:!border-solid': border === 'light',
      'tw:!border-gray-400 tw:!border-1 tw:!border-solid': border === 'dark',
      'tw:!bg-red-100 tw:!border-red-700': _error,
      'tw:!bg-gray-25 tw:!border-gray-200 tw:!pointer-events-none': disabled
    },
    className
  )

  const placeholderClasses = cn(
    'tw:!text-gray-600 tw:!text-xs',
    {
      'tw:!text-red-700': _error
    },
    className
  )

  return (
    <div>
      <div className={containerClasses} disabled={disabled}>
        {placeholder && <span className={placeholderClasses}>{placeholder}</span>}
        {options.map((option) => {
          if (renderOption) {
            return renderOption(option)
          }
          return (
            <SelectMultipleOption
              key={option.value}
              value={option.value}
              label={option.label}
              checked={value.includes(option.value)}
              disabled={disabled}
              error={_error}
              onChange={onChange}
            />
          )
        })}
      </div>
      <FormError className={messageClassName} touched={_touched} error={_error} />
    </div>
  )
}

export default SelectMultiple
