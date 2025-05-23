import SelectSearch from "react-select-search";
import { useCallback } from "react";
import SearchSelectorWrapper from "./SearchSelectorWrapper";
import { cn } from "@/utils/cn";

const SearchSelectorLocal = ({
  options = [],
  selectedOption,
  placeholder = "",
  searchPlaceholder = "",
  emptyMessage = "",
  children,
  error,
  withChevron = false,
  wrapperClassName = "",
  setSelectedOption = (option) => {},
  ...props
}) => {
  const wrapperClasses = cn(
    "w-full select-search-custom-wrapper",
    {
      "with-chevron": withChevron,
      error: error,
    },
    wrapperClassName
  );
  return (
    <SearchSelectorWrapper className={wrapperClasses}>
      {children}
      <SelectSearch
        options={options}
        value={selectedOption?.id}
        search
        placeholder={placeholder}
        onChange={(value, option) => {
          setSelectedOption(option);
        }}
        emptyMessage={emptyMessage}
        {...props}
      />
    </SearchSelectorWrapper>
  );
};

export default SearchSelectorLocal;
