import i18next from "i18next"
import { cn } from "../../../utils/cn"
import moment from "moment"


const T = {
  PageTitle: ({ size = 'md', children, className = "", ...props }) => {
    return (
      <h1 className={cn(
        'tw:!text-2xl tw:!leading-tight tw:!font-bold tw:!mb-4',
        {
          'tw:!text-3xl': size === 'lg',
          'tw:!text-2xl': size === 'md',
          'tw:!text-xl': size === 'sm',
        },
        className
      )}
      {...props}
      >
        {children}
      </h1>
    )
  },
  Title: ({ children, className = "", ...props }) => {
    return (
      <h2 className={cn(
        'tw:!text-lg tw:!leading-tighter tw:!font-bold tw:!mb-2',
        className
      )}
      {...props}
      >
        {children}
      </h2>
    )
  },
  Text: ({ children, className = "", size = 'md', ...props }) => {
    return (
      <p className={cn(
        'tw:!text-base tw:!leading-normal tw:!mb-2 tw:!font-medium',
        {
          'tw:!text-sm': size === 'sm',
          'tw:!text-base': size === 'md',
          'tw:!text-lg': size === 'lg',
        },
        className
      )}
      {...props}
      >
        {children}
      </p>
    )
  },
  ButtonText: ({ children, size, className = "", ...props }) => {
    const buttonTextClasses = cn(
      'tw:!leading-none',
      {
        'tw:!text-xs': size === 'xs',
        'tw:!text-sm': size === 'sm',
        'tw:!text-base tw:!font-medium': !size || size === 'md',
      },
      className
    )
    return (
      <span className={buttonTextClasses} {...props}>
        {children}
      </span>
    )
  },
  Timestamp: ({ children, className = "", format, ...props }) => {
    const date = format ? moment(children).format(format) : children
    return (
      <span className={cn(
        'tw:!text-sm tw:!font-medium tw:!italic tw:!text-gray-500',
        className
      )}
      {...props}
      >
        {date}
      </span>
    )
  },
  LastUpdated: ({ date, className = "", size = 'md', children, ...props }) => {
    return (
      <T.Text className={className} {...props}>
        {children}
        <T.Timestamp className='tw:!text-md'>
          {i18next.t(`general.actions.lastUpdated`, { date: moment(date).format('YYYY-MM-DD HH:mm') })}
        </T.Timestamp>
      </T.Text>
    )
  },
  Error: ({ children, className = "", size = 'md', ...props }) => {
    return (
      <span className={cn(
        'tw:!text-sm tw:!font-medium tw:!italic tw:!text-red-700',
        {
          'tw:!text-xs tw:!leading-none': size === 'xs',
          'tw:!text-sm': size === 'sm',
          'tw:!text-base': size === 'md',
        },
        className
      )}
      {...props}
      >
        {children}
      </span>
    )
  }
}

export default T
