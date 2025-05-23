import React from "react";
import { cn } from "../../../utils/cn";
import FormError from "./TWFormError";

const Checkbox = ({
  error,
  label = "",
  name = "",
  rounded = "sm",
  checked = false,
  disabled = false,
  touched = false,
  small = true,
  className = "",
  wrapperClassName = "",
  labelClassName = "",
  onChange = () => {},
  ...props
}) => {
  const checkboxClasses = cn(
    "w-4 h-4 box-border inline-block",
    {
      "accent-green-600": !error || !touched,
      "appearance-none border border-red-700 bg-red-100 text-red-900 placeholder-red-700 rounded-sm":
        error && touched,
      "cursor-not-allowed": disabled,
    },
    className
  );

  const labelClasses = cn(
    "text-normal leading-5 ml-2 mb-0 font-medium",
    {
      "text-gray-400 cursor-not-allowed": disabled,
      "text-gray-800": !disabled,
      "text-sm": small,
    },
    labelClassName
  );

  return (
    <div className={wrapperClassName}>
      <div className="flex items-center space-x-2">
        <div className="flex items-start">
          <input
            type="checkbox"
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
  );
};

export default Checkbox;
