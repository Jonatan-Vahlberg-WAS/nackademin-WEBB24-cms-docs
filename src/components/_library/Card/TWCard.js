import { cn } from '../../../utils/cn'

const Card = ({ 
  shadowed = true, 
  modal = false, 
  size = 'md',
  children, 
  className, 
  ...props 
}) => {
  const cardClasses = cn(
    'tw:!bg-white',
    'tw:!rounded-[4px]',
    'tw:!p-6',
    {
      'tw:!mb-0': modal,
      'tw:!mb-4': !modal,
      'tw:!shadow-custom': shadowed,
      'tw:!p-6': size === 'md',
      'tw:!p-4': size === 'sm',
      'tw:!p-2': size === 'xs',
    },
    className
  )
  return (
    <div shadowed={shadowed} className={cardClasses} {...props}>
      {children}
    </div>
  )
}

export default Card
