import { useEffect, useState } from 'react'
import { useDebounce } from '@/utils/hooks'
import Input from '../Form/TWInput'
import { cn } from '@/utils/cn'
import Select from '../Form/TWSelect'
import i18next from 'i18next'
import { useRoot } from '@/contexts/root'
import Checkbox from '../Form/TWCheckbox'
import Button from '../Button/TWButton'

const iconClasses = 'tw:absolute tw:left-2 tw:top-1/2 tw:transform tw:-translate-y-1/2 tw:text-gray-500'

const listFilters = {
  SearchFilter: ({
    search = '',
    setSearch = () => {},
    size = 'sm',
    border = 'light',
    className = '',
    placeholder = i18next.t('general.actions.search'),
    shouldRefresh = false,
    ...props
  }) => {
    const [localSearch, setLocalSearch] = useState(search)
    const debouncedSearch = useDebounce(localSearch, 500)

    useEffect(() => {
      setSearch(debouncedSearch)
    }, [debouncedSearch])

    useEffect(() => {
      if (shouldRefresh) {
        setLocalSearch(search)
      }
    }, [shouldRefresh])

    const searchClasses = cn('tw:!pl-7', className)
    const searchIconClasses = cn('fa fa-search', iconClasses)

    return (
      <div className='tw:!relative'>
        <Input
          type='search'
          value={localSearch}
          onChange={(e) => setLocalSearch(e.target.value)}
          size={size}
          border={border}
          className={searchClasses}
          placeholder={placeholder}
          {...props}
        />
        <i className={searchIconClasses}></i>
      </div>
    )
  },

  SelectFilter: ({
    options = [],
    selectedOption = '',
    setSelectedOption = () => {},
    size = 'sm',
    border = 'light',
    className = '',
    iconClass = null,
    ...props
  }) => {
    const selectClasses = cn(className, {
      'tw:!pl-7': iconClass
    })
    return (
      <div className='tw:!relative'>
        <Select
          options={options}
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          size={size}
          border={border}
          className={selectClasses}
          {...props}
        />
        {iconClass && <i className={cn(iconClass, iconClasses)}></i>}
      </div>
    )
  },

  LanguageFilter: ({ selectedLanguages = [], setLanguages = () => {}, checkedIfEmpty = true, className = '' }) => {
    const { languages } = useRoot()

    const onChange = (language, checked) => {
      if (!checked && selectedLanguages.length === 0) {
        setLanguages([language === 'sv' ? 'en' : 'sv'])
      } else if (checked) {
        setLanguages([...selectedLanguages, language])
      } else {
        setLanguages(selectedLanguages.filter((l) => l !== language))
      }
    }
    const wrapperClasses = cn('tw:!flex tw:!flex-wrap tw:!gap-2', className)
    return (
      <div className={wrapperClasses}>
        {languages.map((language) => {
          const isChecked = selectedLanguages.includes(language.short) || (checkedIfEmpty && selectedLanguages.length === 0)
          return (
            <Checkbox
              label={language.name}
              checked={isChecked}
              onChange={(e) => onChange(language.short, e.target.checked)}
              className='tw:!mb-0'
            />
          )
        })}
      </div>
    )
  },
  RefreshFilter: ({ size = 'sm', outline = true, className = '', onClick = () => {} }) => {
    return (
      <Button type='button' aspect='square' size={size} outline={outline} className={className} onClick={onClick}>
        <i className='fa fa-refresh'></i>
      </Button>
    )
  },
  ResetFilter: ({ size = 'sm', outline = true, className = '', onClick = () => {} }) => {
    return (
      <Button type='button' variant='danger' aspect='square' size={size} outline={outline} className={className} onClick={onClick}>
        <i className='fa fa-times'></i>
      </Button>
    )
  }
}
export default listFilters
