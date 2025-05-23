import { useEffect, useState } from "react";
import { useDebounce } from "../../../utils/hooks";
import FormField, { NonFormicField } from "../../FormField";

const SearchSelectorMultipleLocal = ({
  options = [],
  selectedOptions = [],
  placeholder,
  searchPlaceholder,
  emptyMessage,
  setSelectedOptions = (options) => {},
  renderOption = () => {},
  ...props
}) => {
  const [search, setSearch] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);
  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    if (!debouncedSearch) {
      setFilteredOptions(options);
      return;
    }
    setFilteredOptions(
      options.filter((option) =>
        option.name.toLowerCase().includes(debouncedSearch.toLowerCase())
      )
    );
  }, [debouncedSearch, options]);

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
        {filteredOptions.map(renderOption)}
        {filteredOptions.length === 0 && (
          <option value="" disabled>
            {emptyMessage}
          </option>
        )}
      </FormField>
    </div>
  );
};

export default SearchSelectorMultipleLocal;
