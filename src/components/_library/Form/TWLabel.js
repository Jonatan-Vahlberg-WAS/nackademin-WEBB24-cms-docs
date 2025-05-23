import { FaLock } from "react-icons/fa";

import { cn } from "@/utils/cn";

const Label = ({
  children,
  className = "",
  spacing = "normal",
  error,
  required = false,
  touched = false,
  disabled = false,
  showLock = false,
  ...props
}) => {
  const labelClasses = cn(
    "text-sm font-bold mb-2",
    {
      "text-gray-500": !error || !touched,
      "text-red-700": error && touched,
      "text-gray-400": disabled,
      'after:!content-["*"] after:!text-red-500 after:!-translate-y-1 after:!tw-leading-none':
        required,
      "mb-0": spacing === "none",
      "mb-1": spacing === "tight",
      "mb-2": spacing === "normal",
      "mb-3": spacing === "loose",
    },
    className
  );
  return (
    <label className={labelClasses} {...props}>
      {children}
      {showLock && (
        <FaLock className="ml-1" size={10} style={{ marginBottom: "4px" }} />
      )}
    </label>
  );
};

export default Label;
