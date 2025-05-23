import { cn } from "../../../utils/cn";
import Label from "./TWLabel";
import IconTooltip from "../Ui/TWIconTooltip";
const LabelWTooltip = ({
  children,
  className = "",
  error,
  required = false,
  touched = false,
  disabled = false,
  message = "",
  variant = "default",
  showTooltip = true,
  ...props
}) => {
  const labelClasses = cn("relative", className);
  return (
    <Label
      className={labelClasses}
      error={error}
      required={required}
      touched={touched}
      disabled={disabled}
      {...props}
    >
      {children}
      {showTooltip && (
        <IconTooltip
          icon="fas fa-info-circle"
          message={message}
          variant={variant}
          classname={cn("absolute top-[-2px] right-[-1rem]")}
        />
      )}
    </Label>
  );
};

export default LabelWTooltip;
