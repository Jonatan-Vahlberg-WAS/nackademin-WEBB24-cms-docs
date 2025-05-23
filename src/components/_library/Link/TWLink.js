import NextLink from 'next/link'
import { cn } from '../../../utils/cn'
import Button from '../Button/TWButton'

const linkProps = {
  href: '',
  as: '',
  children: '',
  variant: 'default',
  external: false,
  size: 'md',
  className: '',
}
export const ButtonLink = (_props = linkProps) => {
  const { href, as, children, external, ...props } = {
    ...linkProps,
    ..._props
  }
  return (
    <NextLink href={href} as={as} target={external ? '_blank' : ''}>
      <Button role="link" {...props}>
        {children}
      </Button>
    </NextLink>
  )
}

export const InlineLink = (_props = linkProps) => {
  const { children, external, className, variant, size, ...props } = {
    ...linkProps,
    ..._props
  }
  const linkClasses = cn(
    "tw:!cursor-pointer tw:!transition tw:!duration-300 tw:!ease-in-out tw:!font-medium",
    {
      'tw:!underline': external,
      'tw:!text-red-500 tw:hover:!text-red-700': variant === 'danger',
      'tw:!text-blue-400 tw:hover:!text-blue-700': variant === 'info',
      'tw:!text-yellow-500 tw:hover:!text-yellow-700': variant === 'warning',
      'tw:!text-green-600 tw:hover:!text-green-800': variant === 'success' || variant === 'default',
      'tw:!text-inherit tw:!no-underline': variant === 'unstyled',
      'tw:!text-sm': size === 'sm',
      'tw:!text-md': size === 'md',
      'tw:!text-lg': size === 'lg',
    },
    className
  )
  return (
    <NextLink className={linkClasses} target={external ? '_blank' : ''} {...props}>
      {children}
    </NextLink>
  )
}

const Link = (_props = {...linkProps, type: 'link'}) => {
  const {children, type, className, ...props } = {
    ...linkProps,
    ..._props
  }
  if (type === 'button') {
    return (
      <ButtonLink className={className} {...props}>
        {children}
      </ButtonLink>
    )
  }
  return (
    <InlineLink className={className} {...props}>
      {children}
    </InlineLink>
  )
}

export default Link
