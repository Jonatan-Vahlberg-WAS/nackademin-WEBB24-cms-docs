import FormError from "./TWFormError"

import { cn } from "@/utils/cn"
import { getFieldClasses } from "./TWField"


const Input = ({
  name,
  newsError,
  disabled,
  className,
  border = "none",
  size = "md",
  error,
  touched,
  showErrorMessage = true,
  ...props
}) => {
  const inputClasses = cn(
    getFieldClasses({error, touched, newsError, disabled, border, size}),
    className,
  )
  return (
    <>
    <input
      name={name}
      className={inputClasses}
      disabled={disabled}
      {...props}
      />
      {showErrorMessage && error && touched && <FormError error={error} touched={touched} />}
    </>
  )
}

export default Input