import i18next from "i18next";
import { cn } from "../../../utils/cn";
import moment from "moment";

const T = {
  PageTitle: ({ size = "md", children, className = "", ...props }) => {
    return (
      <h1
        className={cn(
          "text-2xl leading-tight font-bold mb-4",
          {
            "text-3xl": size === "lg",
            "text-2xl": size === "md",
            "text-xl": size === "sm",
          },
          className
        )}
        {...props}
      >
        {children}
      </h1>
    );
  },
  Title: ({ children, className = "", ...props }) => {
    return (
      <h2
        className={cn("text-lg leading-tighter font-bold mb-2", className)}
        {...props}
      >
        {children}
      </h2>
    );
  },
  Text: ({ children, className = "", size = "md", ...props }) => {
    return (
      <p
        className={cn(
          "text-base leading-normal mb-2 font-medium",
          {
            "text-sm": size === "sm",
            "text-base": size === "md",
            "text-lg": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </p>
    );
  },
  ButtonText: ({ children, size, className = "", ...props }) => {
    const buttonTextClasses = cn(
      "leading-none",
      {
        "text-xs": size === "xs",
        "text-sm": size === "sm",
        "text-base font-medium": !size || size === "md",
      },
      className
    );
    return (
      <span className={buttonTextClasses} {...props}>
        {children}
      </span>
    );
  },
  Timestamp: ({ children, className = "", format, ...props }) => {
    const date = format ? moment(children).format(format) : children;
    return (
      <span
        className={cn("text-sm font-medium italic text-gray-500", className)}
        {...props}
      >
        {date}
      </span>
    );
  },
  LastUpdated: ({ date, className = "", size = "md", children, ...props }) => {
    return (
      <T.Text className={className} {...props}>
        {children}
        <T.Timestamp className="text-md">
          {i18next.t(`general.actions.lastUpdated`, {
            date: moment(date).format("YYYY-MM-DD HH:mm"),
          })}
        </T.Timestamp>
      </T.Text>
    );
  },
  Error: ({ children, className = "", size = "md", ...props }) => {
    return (
      <span
        className={cn(
          "text-sm font-medium italic text-red-700",
          {
            "text-xs leading-none": size === "xs",
            "text-sm": size === "sm",
            "text-base": size === "md",
          },
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  },
};

export default T;
