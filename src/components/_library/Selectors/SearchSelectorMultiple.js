import { useEffect, useState } from "react";
import { useDebounce } from "../../../utils/hooks";
import FormField, { NonFormicField } from "../../FormField";

const SearchSelectorMultiple = ({
  selectedOptions = [],
  placeholder,
  searchPlaceholder,
  emptyMessage,
  getOptions = () => Promise.resolve([]),
  setSelectedOptions = (options) => { },
  renderOption = () => { },
  ...props
}) => {
  const [search, setSearch] = useState("");
  const [options, setOptions] = useState([]);
  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    getOptions(debouncedSearch).then((results) => {
      setOptions(results);
    });
  }, [debouncedSearch]);

  return (
    <div>
      <NonFormicField
        placeholder={searchPlaceholder}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={"w-100 mb-2"}
      />
      <FormField
        as="select"
        multiple
        {...props}
        value={selectedOptions.map((user) => user.id)}
        onChange={(e) => {
          const selected = Array.from(e.target.selectedOptions, (option) =>
            Number(option.value)
          );
          const selectedOptions = options.filter((user) =>
            selected.includes(user.id)
          );
          setSelectedOptions(selectedOptions);
        }}
        className={"w-100"}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map(renderOption)}
        {options.length === 0 && (
          <option value="" disabled>
            {emptyMessage}
          </option>
        )}
      </FormField>
    </div>
  );
};

export default SearchSelectorMultiple;
