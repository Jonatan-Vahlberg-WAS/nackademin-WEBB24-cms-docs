import { cn } from "../../../utils/cn";

export const getSkeletonStyling = (
  rowHeight = 24,
  verticalPadding = 4,
  dark = false,
  blinking = true,
  className = "",
  style = {},
  align = "left"
) => {
  const columnStyle = getStyling(rowHeight, verticalPadding);
  const skeletonClasses = cn(
    "w-full bg-gray-200 rounded-md",
    {
      "animate-pulse": blinking,
      "bg-gray-400": dark,
      "justify-self-end text-end text-right": align === "right",
      [`w-[${columnStyle.width}]`]: true,
    },
    className
  );
  return {
    className: skeletonClasses,
    style: {
      ...columnStyle,
      ...style,
    },
  };
};

const LoadingSkeletonColumn = ({
  rowHeight = 24,
  verticalPadding = 4,
  dark = false,
  blinking = true,
  className = "",
  style = {},
  align = "left",
  ...props
}) => {
  const { className: skeletonClasses, style: columnStyle } = getSkeletonStyling(
    rowHeight,
    verticalPadding,
    dark,
    blinking,
    className,
    style,
    align
  );

  return <div className={skeletonClasses} style={columnStyle} {...props} />;
};

const getStyling = (rowHeight = 24, verticalPadding = 4) => {
  //width minimum 20% and maximum 90%
  const randomWidth = Math.floor(Math.random() * 70) + 20;
  if (typeof rowHeight === "number" && typeof verticalPadding === "number") {
    return {
      boxSizing: "border-box",
      height: rowHeight - verticalPadding * 2,
      marginTop: verticalPadding,
      marginBottom: verticalPadding,
      width: `${randomWidth}%`,
    };
  }
  verticalPadding = breakoutPixelValue(verticalPadding);
  rowHeight = breakoutPixelValue(rowHeight);
  return {
    height: rowHeight - verticalPadding * 2,
    marginTop: verticalPadding,
    marginBottom: verticalPadding,
    width: `${randomWidth}%`,
  };
};

const breakoutPixelValue = (value) => {
  if (typeof value === "number") return value;
  if (value.includes("px")) {
    return parseInt(value.replace("px", "")) || 0;
  }
  if (value.includes("rem" || value.includes("em"))) {
    return parseInt(value.replace("rem", "").replace("em", "")) * 16 || 0;
  }
  return 0;
};

export default LoadingSkeletonColumn;
