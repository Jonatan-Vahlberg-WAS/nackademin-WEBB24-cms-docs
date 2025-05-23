import { cn } from "@/utils/cn";
import Button from "../Button/TWButton";

export const SearchbarButton = ({
  loading = false,
  onClick = () => {},
  className = "",
  ...props
}) => {
  return (
    <Button
      type="button"
      className={cn(
        "h-10 w-10 flex justify-center items-center tw-disabled:tw-opacity-50 rounded-sm",
        "transition-colors duration-300 ease-in-out",
        className
      )}
      disabled={loading}
      loading={loading}
      onClick={() => onClick()}
      noPadding
      {...props}
    >
      <i className="fa fa-repeat"></i>
    </Button>
  );
};

const Searchbar = ({
  searchTerm,
  placeholder = "",
  loading = false,
  staff = false,
  width,
  setSearchTerm = (value) => {},
  handleSearch = () => {},
}) => {
  const wrapperClasses = cn(
    "flex justify-center items-center px-3 py-2 bg-gray-50 mb-2 mr-2 mt-2",
    {
      "w-[350px]": staff,
      "w-auto": !staff,
    },
    "md:!w-full"
  );

  const inputClasses = cn(
    "flex-1 bg-gray-50 rounded-md text-sm leading-tight border-none focus:outline-hidden",
    "transition-colors duration-300 ease-in-out",
    "px-2 py-1 h-6",
    {
      "w-[350px]": staff,
      "w-auto": !staff,
    },
    "md:!w-full"
  );

  return (
    <div className="flex flex-row items-center justify-center">
      <div className={wrapperClasses} style={{ width }}>
        <i className="fa fa-search text-gray-500 text-xs mr-2"></i>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          type="search"
          placeholder={placeholder}
          className={inputClasses}
        />
      </div>
      {!staff && <SearchbarButton loading={loading} onClick={handleSearch} />}
    </div>
  );
};

export default Searchbar;
