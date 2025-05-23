import _ from "lodash";
import Button from "../Button/TWButton";
import Divider from "../Ui/TWDivider";
import { getVariantCombinations } from "../../../utils/componentHelpers";
import Card from "../Card/TWCard";
import { Form, Formik } from "formik";
import Label from "../Form/TWLabel";
import Field from "../Form/TWField";
import SelectField from "../Form/TWSelectField";
import Checkbox from "../Form/TWCheckbox";
import Files from "./Files";

const Forms = () => {
  const fieldVariants = {
    error: [
      { error: undefined, touched: false },
      { error: "This field is required", touched: true },
    ],
    disabled: [undefined, true],
    value: [undefined, "Value"],
  };

  const fieldCombinations = getVariantCombinations(fieldVariants);

  const selectFieldVariants = {
    error: [
      { error: undefined, touched: false },
      { error: "This field is required", touched: true },
    ],
    disabled: [undefined, true],
    value: [undefined, "1"],
    withChildren: [false, true],
  };

  const selectFieldCombinations = getVariantCombinations(selectFieldVariants);

  const checkboxVariants = {
    disabled: [undefined, true],
    error: [
      { error: undefined, touched: false },
      { error: "This field is required", touched: true },
    ],
  };

  const checkboxCombinations = getVariantCombinations(checkboxVariants);

  return (
    <div id="components-forms">
      <h2 className="text-xl font-bold mb-3">Forms</h2>
      <Card>
        <h3 className="text-lg font-bold mb-2">Form (Formik)</h3>
        <Formik
          initialValues={{
            name: "",
            checkbox: false,
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ values, setFieldValue, handleSubmit }) => (
            <Form>
              <h4 className="text-lg font-bold">Fields</h4>
              <div className="flex flex-wrap gap-4 mb-4">
                {fieldCombinations.map((combination, index) => (
                  <div key={index}>
                    <Label
                      htmlFor="name"
                      error={combination.error}
                      touched={combination.touched}
                      required={combination.error}
                    >
                      Name (new) (
                      {combination.disabled ? "disabled" : "enabled"})
                    </Label>
                    <Field
                      name="name"
                      label="Name"
                      placeholder="Enter your name"
                      {...combination}
                    />
                  </div>
                ))}
              </div>

              <h4 className="text-lg font-bold">Select Fields (new)</h4>
              <div className="flex flex-wrap gap-4 mb-4">
                {selectFieldCombinations.map((combination, index) => (
                  <div key={index}>
                    <Label
                      htmlFor="choice2"
                      error={combination.error}
                      touched={combination.touched}
                      required={combination.error}
                    >
                      Choice 2 ({combination.disabled ? "disabled" : "enabled"})
                    </Label>
                    <SelectField
                      name="choice2"
                      error={combination.error}
                      touched={combination.touched}
                      disabled={combination.disabled}
                    >
                      {combination.withChildren && (
                        <>
                          <option value="1">Option 1</option>
                          <option value="2">Option 2</option>
                          <option value="3">Option 3</option>
                        </>
                      )}
                    </SelectField>
                  </div>
                ))}
              </div>
              <h4 className="text-lg font-bold">Checkboxes</h4>
              <div className="flex flex-wrap gap-4 mb-4">
                {checkboxCombinations.map((combination, index) => (
                  <Checkbox
                    name="checkbox"
                    label="Checkbox"
                    {...combination}
                    checked={values.checkbox}
                    error={values.checkbox ? undefined : combination.error}
                    onChange={() => setFieldValue("checkbox", !values.checkbox)}
                  />
                ))}
              </div>
              <h4 className="text-lg font-bold">Files</h4>
              <div className="flex flex-wrap gap-4 mb-4">
                <Files />
              </div>
            </Form>
          )}
        </Formik>
      </Card>
      <Divider darker className="my-4" />
    </div>
  );
};

export default Forms;
