import { useEnviroment } from '@/utils/hooks'
import RestrictedAccessWrapper from './TWRestrictedAccessWrapper'
import i18next from 'i18next'

const i18nPrefix = 'general.unavailable.production'

const NotInProductionWrapper = ({ 
  children, 
  extraNotes = [], 
  showBackground = true,
  showBorder = true,
  ...props 
}) => {
  const { isProduction } = useEnviroment()
  return (
    <RestrictedAccessWrapper
      showContent={!isProduction}
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

export default NotInProductionWrapper
