import NextLink from "next/link";
import { cn } from "../../../utils/cn";
import Button from "../Button/TWButton";

const linkProps = {
  href: "",
  as: "",
  children: "",
  variant: "default",
  external: false,
  size: "md",
  className: "",
};
export const ButtonLink = (_props = linkProps) => {
  const { href, as, children, external, ...props } = {
    ...linkProps,
    ..._props,
  };
  return (
    <NextLink href={href} as={as} target={external ? "_blank" : ""}>
      <Button role="link" {...props}>
        {children}
      </Button>
    </NextLink>
  );
};

export const InlineLink = (_props = linkProps) => {
  const { children, external, className, variant, size, ...props } = {
    ...linkProps,
    ..._props,
  };
  const linkClasses = cn(
    "cursor-pointer transition duration-300 ease-in-out font-medium",
    {
      underline: external,
      "text-red-500 hover:!text-red-700": variant === "danger",
      "text-blue-400 hover:!text-blue-700": variant === "info",
      "text-yellow-500 hover:!text-yellow-700": variant === "warning",
      "text-green-600 hover:!text-green-800":
        variant === "success" || variant === "default",
      "text-inherit no-underline": variant === "unstyled",
      "text-sm": size === "sm",
      "text-md": size === "md",
      "text-lg": size === "lg",
    },
    className
  );
  return (
    <NextLink
      className={linkClasses}
      target={external ? "_blank" : ""}
      {...props}
    >
      {children}
    </NextLink>
  );
};

const Link = (_props = { ...linkProps, type: "link" }) => {
  const { children, type, className, ...props } = {
    ...linkProps,
    ..._props,
  };
  if (type === "button") {
    return (
      <ButtonLink className={className} {...props}>
        {children}
      </ButtonLink>
    );
  }
  return (
    <InlineLink className={className} {...props}>
      {children}
    </InlineLink>
  );
};

export default Link;
