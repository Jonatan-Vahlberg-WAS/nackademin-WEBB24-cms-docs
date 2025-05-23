import _ from 'lodash'
import Banner from '../Banner/TWBanner'
import Button from '../Button/TWButton'
import Divider from '../Ui/TWDivider'

const Banners = () => {
  const bannerVariants = [
    { variant: 'default', icon: 'fas fa-exclamation' },
    { variant: 'warning', icon: 'fas fa-exclamation-triangle' },
    { variant: 'info', icon: 'fas fa-info-circle' },
    { variant: 'success', icon: 'fas fa-check-circle' },
    { variant: 'danger', icon: 'fas fa-times-circle' }
  ]

  return (
    <div id='components-banners'>
      <h2 className='tw:!text-xl tw:!font-bold mb-3'>Banners</h2>
      {bannerVariants.map((variant, index) => (
        <Banner key={index} {...variant} title={`${_.capitalize(variant.variant)} Banner`} subtitle={`This is a ${variant.variant} banner`}>
          <Button variant={variant.variant} title='Button'>
            Button
          </Button>
        </Banner>
      ))}
      <Divider darker className='tw:!my-4' />
    </div>
  )
}

export default Banners
