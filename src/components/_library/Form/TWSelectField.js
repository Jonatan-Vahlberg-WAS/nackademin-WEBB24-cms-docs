
import Field from './TWField'
import { getArrowWrapperClasses, getSelectClasses } from './TWSelect'

const SelectField = ({
  name = '',
  value = '',
  setFieldValue = (_name, _value) => {},
  error = '',
  touched = false,
  disabled = false,
  className = '',
  children,
  size = 'md',
  border = 'none',
  ...fieldProps
}) => {
  return (
    <div className={getArrowWrapperClasses({
      size
    })}>
      <Field
        as='select'
        name={name}
        error={error}
        touched={touched}
        disabled={disabled}
        className={getSelectClasses({
          error,
          touched,
          disabled,
          className,
          size,
          border
        }, value)}
        {...fieldProps}
      >
        {children && children}
      </Field>
    </div>
  )
}

export default SelectField
