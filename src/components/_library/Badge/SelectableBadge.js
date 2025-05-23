import { FaMinus, FaPlus } from "react-icons/fa6";
import Badge from "./Badge";

const SelectableBadge = ({
  children,
  isSelected = false,
  iconPlacedInFront = false,
  onClick = () => {},
  ...props
}) => {
  const Icon = isSelected ? FaMinus : FaPlus;
  const color = isSelected ? "primary" : undefined;
  return (
    <Badge
      onClick={onClick}
      color={color}
      className="badge-selectable"
      role="button"
      {...props}
    >
      {!iconPlacedInFront && <Icon className="mr-1" />}
      {children}
      {iconPlacedInFront && <Icon className="ml-1" />}
    </Badge>
  );
};

export default SelectableBadge;
