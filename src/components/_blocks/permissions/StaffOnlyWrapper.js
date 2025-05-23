import { useUser } from '@/contexts/user/user'
import RestrictedAccessWrapper from './TWRestrictedAccessWrapper'
import i18next from 'i18next'

const i18nPrefix = 'general.unavailable.staff'

const StaffOnlyWrapper = ({ 
  children, 
  extraNotes = [], 
  showBackground = true,
  showBorder = true,
  ...props 
}) => {
  const user = useUser()
  return (
    <RestrictedAccessWrapper
      showContent={user?.gatekeeper?.isStaff}
      note={i18next.t(`${i18nPrefix}.title`)}
      noteExtra={i18next.t(`${i18nPrefix}.text`)}
      extraNotes={extraNotes}
      showBackground={showBackground}
      showBorder={showBorder}
      {...props}
    >
      {children}
    </RestrictedAccessWrapper>
  )
}

export default StaffOnlyWrapper
