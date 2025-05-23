import { useState } from 'react'

import Badge from '../Badge/TWBadge'
import SelectableBadge from '../Badge/TWSelectableBadge'
import Card from '../Card/TWCard'
import SelectBar from '../SelectBar/TWSelectBar'
import Divider from '../Ui/TWDivider'
import T from '../Ui/TWTypography'
import LanguageSelectBar from '../SelectBar/TWLangaugeSelectBar'
import { useRoot } from '../../../contexts/root'
import Expandable from '../Expandable/TWExpandable'
import StandardActionBar from '../Ui/ActionBar/TWStandardActionBar'
import ActionBar from '../Ui/ActionBar/TWActionBar'
import Button from '../Button/TWButton'
import Modal from '../Ui/Modal/TWModal'
import DeleteModal from '../Ui/Modal/TWDeleteModal'
import { capitalize } from 'lodash'
import { getVariantCombinations } from '@/utils/componentHelpers'

const items = [
  { value: '1', text: 'Option 1' },
  { value: '2', text: 'Option 2' },
  { value: '3', text: 'Option 3' }
]

const General = () => {
  const root = useRoot()
  const [selectedItem, setSelectedItem] = useState({ value: '1', text: 'Option 1' })
  const [selectedLanguage, setSelectedLanguage] = useState({ kind: 1, text: 'English' })
  const [stdModalIsOpen, setStdModalIsOpen] = useState(false)
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false)

  const selectBarVariants = [{}, { error: true }, { error: true, allErrors: true }, { disabled: true }]

  const baseBadgeVariants = {
    size: 'xs',
  }

  const badgeVariants = getVariantCombinations({
    base: baseBadgeVariants,
    variant: ['default', 'info', 'warning', 'success', 'danger'],
    shade: [undefined, 'light'],
    border: [undefined, 'normal', 'thin']
  })

  const selectableBadgeVariants = getVariantCombinations({
    base: baseBadgeVariants,
    isSelected: [true, false],
    shade: [undefined, 'light'],
    border: [undefined, 'normal', 'thin'],
  })

  return (
    <div id='components-general'>
      <T.PageTitle>General</T.PageTitle>
      <Card>
        <T.Title>Card</T.Title>
        <p className='tw:!text-sm tw:!text-gray-700'>
          A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content,
          contextual background colors, and powerful display options.
        </p>
      </Card>
        <Card>
      <T.Title>Badges</T.Title>
      <div className='tw:!flex tw:!gap-2 tw:!flex-wrap tw:!mb-4'>
        {badgeVariants.map((variant, index) => (
          <Badge key={index} {...variant}>
            {capitalize(variant.variant)}
          </Badge>
        ))}
      </div>
        <T.Title>Selectable badges</T.Title>
        <div className='tw:!flex tw:!gap-2 tw:!flex-wrap tw:!mb-4'>
          {selectableBadgeVariants.map((variant, index) => {
            return (
              <div key={index}>
                <SelectableBadge {...variant}>
                  {variant.isSelected ? 'Selected' : 'Unselected'}
                </SelectableBadge>
              </div>
            )
          })}
        </div>
      </Card>
      <T.Title>Selectbar</T.Title>
      {selectBarVariants.map((variant, index) => (
        <SelectBar
          key={index}
          {...variant}
          items={items.map((item, index) => {
            return {
              ...item,
              error: variant.allErrors ? true : variant.error && index === 0
            }
          })}
          selectedItem={selectedItem}
          selectItem={setSelectedItem}
        />
      ))}
      <T.Title>Language select bar</T.Title>
      {root.languages.length && (
        <LanguageSelectBar
          languages={root.languages}
          selectedLanguage={selectedLanguage}
          onSelectLanguage={setSelectedLanguage}
          showRemoveLanguage
        />
      )}
      {root.languages.length && (
        <LanguageSelectBar languages={[root.languages?.[0]]} selectedLanguage={root.languages?.[0]} showAddLanguage />
      )}
      <Divider darker className='tw:!my-4' />
      <T.Title>Expandable</T.Title>
      <Expandable titleText='Expandable' defaultExpanded>
        <p className='tw:!text-sm tw:!text-gray-700'>
          A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content,
          contextual background colors, and powerful display options.
        </p>
      </Expandable>
      <Card>
        <Expandable titleText='Within a card' defaultExpanded={false} showDivider={false}>
          <p className='tw:!text-sm tw:!text-gray-700'>
            A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content,
            contextual background colors, and powerful display options.
          </p>
        </Expandable>
      </Card>
      <T.Title>ActionBar</T.Title>
      <div className='tw:md:!flex tw:!gap-4'>
        <div className='tw:!flex-1'>
          <Card>
            <T.Title>Card with "Std" actionbar</T.Title>
            <StandardActionBar renderDeleteButton deleteDisabled />
          </Card>
        </div>
        <div className='tw:!flex-1'>
          <Card>
            <T.Title>Card with "Custom" actionbar</T.Title>
            <ActionBar expand>
              <Button variant='danger'>Delete</Button>
            </ActionBar>
          </Card>
        </div>
      </div>
      <Divider darker className='tw:!my-4' />
      <T.Title>Modals</T.Title>
      <div className='tw:!flex tw:!gap-4'>
        <Button variant='success' onClick={() => setStdModalIsOpen(true)}>
          Open Modal
        </Button>
        <Button variant='danger' onClick={() => setDeleteModalIsOpen(true)}>
          Open Delete Modal
        </Button>
      </div>

      <Modal isOpen={stdModalIsOpen} toggle={() => setStdModalIsOpen(false)}>
        <Card modal>
          <T.Title>Modal Content</T.Title>
          <T.Text className='tw:!text-gray-700'>
            A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content,
            contextual background colors, and powerful display options.
          </T.Text>
          <ActionBar expand>
            <Button onClick={() => setStdModalIsOpen(false)}>Close</Button>
          </ActionBar>
        </Card>
      </Modal>
      <DeleteModal
        isOpen={deleteModalIsOpen}
        toggle={() => setDeleteModalIsOpen(false)}
        title='Delete Modal'
        text='Are you sure you want to delete this item?'
        onAccept={() => setDeleteModalIsOpen(false)}
        onDecline={() => setDeleteModalIsOpen(false)}
        highlights={['delete']}
        error={'This is an error message'}
        backdrop='static'
      />
      <Divider darker className='tw:!my-4' />
    </div>
  )
}

export default General
