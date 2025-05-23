import { Form as FormikForm, Formik } from 'formik'
import React from 'react'

import SearchSelector from '../../_library/Selectors/SearchSelector'
import StandardActionBar from '../../_library/Ui/ActionBar/TWStandardActionBar'
import T from '../../_library/Ui/TWTypography'
import Label from '../../_library/Form/TWLabel'
import Field from '../../_library/Form/TWField'
import Checkbox from '../../_library//Form/TWCheckbox'
import SelectField from '../../_library/Form/TWSelectField'
import FormError from '../../_library//Form/TWFormError'

export const renderCheckbox = (data, formik) => {
  const { errors, touched, values, setFieldValue } = formik

  return (
    <Checkbox
      id={data.id}
      name={data.name}
      type='checkbox'
      error={errors[data.name]}
      touched={touched[data.name]}
      checked={values[data.name]}
      onChange={(e) => {
        setFieldValue(data.name, !values[data.name])
      }}
      label={data.label}
    />
  )
}

export const renderSelect = (config, formik) => {
  const { errors, touched, values, setFieldValue } = formik

  return (
    <SelectField
      name={config.attribute.name}
      className={config.attribute.className}
      error={errors[config.attribute.errors]}
      touched={touched[config.attribute.touched]}
      value={values[config.attribute.name]}
      onChange={(e) => setFieldValue(config.attribute.name, e.target.value)}
    >
      {config.options.data.map((option) => {
        return (
          <option key={option[config.options.valueKey]} value={option[config.options.valueKey]}>
            {option[config.options.labelKey]}
          </option>
        )
      })}
    </SelectField>
  )
}

export const renderSearchSelect = (config, formik) => {
  const { errors, touched, values, setFieldValue } = formik

  const fieldName = config.attribute.name
  const currentValue = values[fieldName]
  const error = errors[fieldName]
  const _touched = touched[fieldName]

  return (
    <div className={config.attribute.className}>
      <SearchSelector
        placeholder={config.attribute.placeholder}
        selectedOption={{ [config.options.valueKey]: currentValue }}
        setSelectedOption={(option) => {
          if(config.setSelected) {
            config.setSelected(option)
          }
          setFieldValue(fieldName, option.value)
        }}
        error={error && _touched}
        request={config.searchRequest}
        paginated
        usePreviousQuery
          previousQuery={config.previousQuery}
        mapOptions={(options = []) =>
          options.map((option) => ({
            name: option[config.options.labelKey],
            value: option[config.options.valueKey]
          }))
        }
      />
      <FormError error={error} touched={_touched} />
    </div>
  )
}

export const renderInput = (data, formik) => {
  const { errors, touched } = formik

  return (
    <Field
      name={data.name}
      placeholder={data.placeholder}
      className={data.className}
      touched={touched[data.name]}
      error={errors[data.name]}
    />
  )
}

function Form({ title, config, initialValues, validationSchema, children,  onSubmit = () => {}, onCancel = () => {} }) {

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} enableReinitialize>
      {(formik) => (
        <FormikForm>
          <T.Title>{title}</T.Title>
          {config.map((c) => {
            if (c.break) return <hr />
            if (c.type === 'label') return <Label>{c.text}</Label>
            return (
              <div>
                {!c.hideLabel && <Label required>{c.label}</Label>}
                {c.type === 'checkbox' &&
                  c.attributes.map((attribute) => {
                    return renderCheckbox(attribute, formik)
                  })}
                {c.type === 'select' && renderSelect(c, formik)}
                {c.type === 'searchSelect' && renderSearchSelect(c, formik)}
                {c.type === 'text' && renderInput(c.attribute, formik)}
              </div>
            )
          })}
          {children}
          <StandardActionBar onCancel={onCancel} loading={false} disabled={false} />
        </FormikForm>
      )}
    </Formik>
  )
}

export default Form
