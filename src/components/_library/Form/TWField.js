import { Field as FormField } from "formik";
import { cn } from "../../../utils/cn";
import FormError from "./TWFormError";

export const getFieldClasses = (options = {}) => {
  const { error, touched, newsError, disabled, border, size, className } =
    options;
  return cn(
    "flex rounded-sm px-4 py-2 border-none",
    {
      "bg-gray-50 text-gray-900 placeholder-gray-600 disabled:bg-gray-25 disabled:text-gray-400 disabled:placeholder-gray-400":
        !error || !touched,
      "bg-red-100 text-red-900 placeholder-red-700 disabled:bg-red-50 disabled:text-red-400 disabled:placeholder-red-400":
        error && touched && !newsError,
      "border border-red-700": error && touched && newsError,
      "border-gray-200 border-1 border-solid": border === "light",
      "border-gray-400 border-1 border-solid": border === "dark",
      "border-red-700 border-1 border-solid":
        error && touched && (border === "light" || border === "dark"),
      "px-2 py-1 text-sm": size === "sm",
    },
    className
  );
};

const Field = ({
  name,
  error,
  touched = false,
  newsError = false,
  disabled = false,
  className = "",
  children,
  border,
  size,
  ...props
}) => {
  const fieldClasses = getFieldClasses({
    error,
    touched,
    newsError,
    disabled,
    className,
    border,
    size,
  });
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
};

export default Field;
