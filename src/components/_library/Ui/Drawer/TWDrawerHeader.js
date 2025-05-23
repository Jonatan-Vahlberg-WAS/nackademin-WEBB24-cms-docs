import { cn } from '../../../../utils/cn'
import i18next from 'i18next'

const DrawerHeader = ({ toggle, forceExpanded, setForceExpanded, children, className, ...props }) => {

  const headerClasses = cn('tw:flex tw:flex-col tw:p-6', className)
  const iconWrapperClasses = cn('tw:flex tw:justify-end tw:items-center tw:gap-4')
  const iconClasses = cn('tw:cursor-pointer')
  const closeIconClasses = cn(iconClasses, 'fa fa-times')
 
  const expandContractIconClasses = cn(iconClasses, {
    'fa fa-expand': !forceExpanded,
    'fa fa-compress': forceExpanded
  })
  const expandContractTitle = i18next.t(`general.actions.${forceExpanded ? 'contract' : 'expand'}`)
  const closeTitle = i18next.t('general.actions.close')
  return (
    <div className={headerClasses} {...props}>
      <div className={iconWrapperClasses}>
        <i title={expandContractTitle} className={expandContractIconClasses} onClick={() => setForceExpanded(!forceExpanded)} />
        <i title={closeTitle} className={closeIconClasses} onClick={toggle} />
      </div>
      {children}
    </div>
  )
}

export default DrawerHeader
