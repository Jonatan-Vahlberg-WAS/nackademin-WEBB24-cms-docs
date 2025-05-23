
import { cn } from '../../../utils/cn'
import { getFieldClasses } from './TWField';
import FormError from './TWFormError';

export const getArrowWrapperClasses = (options = {}) => cn(
  'tw:!min-w-[200px] tw:!relative tw:!inline-block', 
  'tw:after:content-["▼"] tw:after:!absolute tw:after:!right-2.5 tw:after:!top-3',
  'tw:after:!h-full tw:after:!w-4 tw:after:!text-sm tw:after:!pointer-events-none',
  {
    'tw:after:!text-sm tw:after:!top-1.5': options.size === 'sm'
  } 
)

export const getSelectClasses = (options = {}, value = '') => {
  const fieldClasses = getFieldClasses(options)
  return cn(
    fieldClasses,
    'tw:!min-w-[200px] tw:!appearance-none',
    options?.className || '',
    {
      'tw:!text-gray-600': !value
    }
  );
}

export const Select = ({
  name,
  options = [],
  value,
  onChange = (e) => {},
  error,
  touched = false,
  disabled = false,
  className = '',
  formik,
  placeholder = '',
  size = 'md',
  border = 'none',
  ...props
}) => {

  return (
    <div className={getArrowWrapperClasses({
      size
    })}>
    <select
      name={name}
      className={getSelectClasses({
        error,
        touched,
        disabled,
        className,
        size,
        border
      }, value)}
      disabled={disabled}
      value={value}
      onChange={onChange}
      {...props}
      >
      {placeholder && <option value='' disabled>{placeholder}</option>}
      {options.map((option) => (
        <option key={option.value} value={option.value}>{option.label}</option>
      ))}
      </select>
      {error && touched && <FormError error={error} touched={touched} />}
    </div>
  );
}

export default Select;