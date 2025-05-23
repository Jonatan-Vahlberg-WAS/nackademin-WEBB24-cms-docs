
import { Field as FormField } from 'formik';
import { cn } from '../../../utils/cn'
import FormError from './TWFormError';

export const getFieldClasses = (options = {}) => {
  const { error, touched, newsError, disabled, border, size, className } = options
  return cn(
    'tw:!flex tw:!rounded-sm tw:!px-4 tw:!py-2 tw:!border-none',
    {
      'tw:!bg-gray-50 tw:!text-gray-900 tw:!placeholder-gray-600 tw:!disabled:bg-gray-25 tw:!disabled:text-gray-400 tw:!disabled:placeholder-gray-400': !error || !touched,
      'tw:!bg-red-100 tw:!text-red-900 tw:!placeholder-red-700 tw:!disabled:bg-red-50 tw:!disabled:text-red-400 tw:!disabled:placeholder-red-400': error && touched && !newsError,
      'tw:!border tw:!border-red-700': error && touched && newsError,
      'tw:!border-gray-200 tw:!border-1 tw:!border-solid': border === "light",
      'tw:!border-gray-400 tw:!border-1 tw:!border-solid': border === "dark",
      'tw:!border-red-700 tw:!border-1 tw:!border-solid':  error && touched && (border === "light" || border === "dark"),
      'tw:!px-2 tw:!py-1 tw:!text-sm': size === "sm",
    }, 
    className
  )
}

const Field = ({
  name,
  error,
  touched = false,
  newsError = false,
  disabled = false,
  className = '',
  children,
  border,
  size,
  ...props
}) => {
  const fieldClasses = getFieldClasses({error, touched, newsError, disabled, className, border, size})
  return (
    <>
    <FormField
      name={name}
      error={error}
      touched={touched}
      className={fieldClasses}
      disabled={disabled}
      {...props}
      >
      {children}
      </FormField>
      <FormError error={error} touched={touched} />
    </>
  );
}

export default Field;