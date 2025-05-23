import { useCallback, useRef, useState } from "react";
import SelectSearch from "react-select-search";
import SearchSelectorMultiple from "./SearchSelectorMultiple";
import SearchSelectorWrapper from "./SearchSelectorWrapper";
import { cn } from "@/utils/cn";

const SearchSelector = ({
  multiple = false,
  selectedOption,
  selectedOptions = [],
  placeholder = "",
  searchPlaceholder = "",
  emptyMessage = "",
  children,
  error,
  paginated = false,
  usePreviousQuery = false,
  previousQuery = "",
  withChevron = false,
  wrapperClassName = "",
  request = () => Promise.resolve(),
  setSelectedOption = (option) => {},
  setSelectedOptions = (options) => {},
  renderOption = (option) => {},
  mapOptions = (options = []) => [],
  ...props
}) => {
  const searchRef = useRef(null)
  const [currentPreviousQuery, setCurrentPreviousQuery] = useState(previousQuery)

  const getOptions = useCallback(
    (query) => {
      query = selectedOption && !query && currentPreviousQuery ? currentPreviousQuery : query
      const onComplete = (response, resolve) => {
        if (paginated) {
          resolve(mapOptions(response.data.results))
          return;
        }
        resolve(mapOptions(response.data))
      };

      return new Promise((resolve, reject) => {
        return request(query)
          .then((response) => onComplete(response, resolve))
          .catch((error) => {
            console.warn("Error while fetching options", error);
            reject(error);
          });
      });
    },
    [request]
  );

  if (multiple) {
    return (
      <SearchSelectorMultiple
        selectedOptions={selectedOptions}
        placeholder={placeholder}
        emptyMessage={emptyMessage}
        searchPlaceholder={searchPlaceholder}
        getOptions={getOptions}
        setSelectedOptions={setSelectedOptions}
        renderOption={renderOption}
        {...props}
      />
    );
  }

  const wrapperClasses = cn(
    "tw:!w-full select-search-custom-wrapper",
    {
      "with-chevron": withChevron,
      "error": error,
    },
    wrapperClassName
  )

  return (
    <SearchSelectorWrapper className={wrapperClasses}>
      {children}
      <SelectSearch
        ref={searchRef}
        getOptions={getOptions}
        value={selectedOption?.value || selectedOption?.id}
        search
        debounce={300}
        placeholder={placeholder}
        onChange={(value, option) => {
          if (usePreviousQuery) {
            setCurrentPreviousQuery(searchRef.current.querySelector("input").value)
          }
          setSelectedOption(option);
        }}
        emptyMessage={emptyMessage}
        {...props}
      />
    </SearchSelectorWrapper>
  );
};

export default SearchSelector;
