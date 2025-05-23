import { FaCheck } from "react-icons/fa";

import { cn } from "@/utils/cn";
import T from "../Ui/TWTypography";
import FormError from "./TWFormError";

export const SelectMultipleOption = ({
  value,
  label,
  checked,
  onChange,
  disabled,
  error,
  className,
  ...props
}) => {
  const optionClasses = cn(
    "py-0.5 px-2 border-radius-sm cursor-pointer bg-gray-50 text-sm mb-0",
    {
      "hover:!bg-gray-200": !disabled,
      "bg-gray-200": checked,
      "bg-gray-25 opacity-50 pointer-events-none": disabled,
      "opacity-70": disabled && checked,
      "bg-red-100 text-red-700": error,
    },
    className
  );

  return (
    <T.Text
      {...props}
      onClick={() => onChange(value)}
      className={optionClasses}
    >
      {checked && <FaCheck className="mr-2" />}
      {label}
    </T.Text>
  );
};

const SelectMultiple = ({
  options = [],
  name,
  submitCount = 0,
  messageClassName = "",
  placeholder = "",
  value = [],
  disabled = false,
  onChange = (value) => {},
  renderOption,
  border = "none",
  className = "",
  ...props
}) => {
  const _touched = submitCount > 0 || props.touched;
  const _error = _touched && props.error;

  const containerClasses = cn(
    "flex flex-col gap-1 p-2 min-h-5 text-sm bg-gray-50 rounded-md",
    {
      "border-none": border === "none",
      "border-gray-200 border-1 border-solid": border === "light",
      "border-gray-400 border-1 border-solid": border === "dark",
      "bg-red-100 border-red-700": _error,
      "bg-gray-25 border-gray-200 pointer-events-none": disabled,
    },
    className
  );

  const placeholderClasses = cn(
    "text-gray-600 text-xs",
    {
      "text-red-700": _error,
    },
    className
  );

  return (
    <div>
      <div className={containerClasses} disabled={disabled}>
        {placeholder && (
          <span className={placeholderClasses}>{placeholder}</span>
        )}
        {options.map((option) => {
          if (renderOption) {
            return renderOption(option);
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
          );
        })}
      </div>
      <FormError
        className={messageClassName}
        touched={_touched}
        error={_error}
      />
    </div>
  );
};

export default SelectMultiple;
