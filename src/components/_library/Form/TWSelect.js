import { cn } from "../../../utils/cn";
import { getFieldClasses } from "./TWField";
import FormError from "./TWFormError";

export const getArrowWrapperClasses = (options = {}) =>
  cn(
    "min-w-[200px] relative inline-block",
    'after:content-["▼"] after:!absolute after:!right-2.5 after:!top-3',
    "after:!h-full after:!w-4 after:!text-sm after:!pointer-events-none",
    {
      "after:!text-sm after:!top-1.5": options.size === "sm",
    }
  );

export const getSelectClasses = (options = {}, value = "") => {
  const fieldClasses = getFieldClasses(options);
  return cn(
    fieldClasses,
    "min-w-[200px] appearance-none",
    options?.className || "",
    {
      "text-gray-600": !value,
    }
  );
};

export const Select = ({
  name,
  options = [],
  value,
  onChange = (e) => {},
  error,
  touched = false,
  disabled = false,
  className = "",
  formik,
  placeholder = "",
  size = "md",
  border = "none",
  ...props
}) => {
  return (
    <div
      className={getArrowWrapperClasses({
        size,
      })}
    >
      <select
        name={name}
        className={getSelectClasses(
          {
            error,
            touched,
            disabled,
            className,
            size,
            border,
          },
          value
        )}
        disabled={disabled}
        value={value}
        onChange={onChange}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && touched && <FormError error={error} touched={touched} />}
    </div>
  );
};

export default Select;
