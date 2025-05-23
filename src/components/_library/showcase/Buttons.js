import _ from 'lodash'
import Button from '../Button/TWButton'
import Divider from '../Ui/TWDivider'
import { getVariantCombinations } from '../../../utils/componentHelpers'
import T from '../Ui/TWTypography'

const Buttons = () => {
  const buttonVariants = {
    variant: [undefined, 'success', 'warning', 'danger', 'info'],
    size: [{
      size: undefined,
    }, {
      size: 'sm',
    }, {
      size: 'xs',
    }, {
      size: 'xs',
      aspect: 'square',
      Title: () => <i className='fa fa-times' />
    }],
    disabled: [undefined, true],
    loading: [undefined, true],
    outline: [undefined, true]
  }

  const buttonCombinations = getVariantCombinations(buttonVariants)
  return (
    <div id='components-buttons'>
      <h2 className='tw:!text-xl tw:!font-bold mb-3'>Buttons</h2>
      <div className='tw:!flex tw:!flex-wrap tw:!gap-4 tw:!mb-4'>
        {buttonCombinations.map((combination, index) => (
          <Button key={index} {...combination} title={`Button ${JSON.stringify(combination)}`}>
            {combination.Title && <combination.Title />}
            {!combination.Title && 'Button'}
          </Button>
        ))}
      </div>
      <Divider darker className='tw:!my-4' />
    </div>
  )
}

export default Buttons
