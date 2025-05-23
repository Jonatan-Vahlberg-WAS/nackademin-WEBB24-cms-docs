

import { cn } from "@/utils/cn";
import Button from "../Button/TWButton";

export const SearchbarButton = ({ loading = false, onClick = () => {}, className = "", ...props }) => {
  return (
    <Button
      type="button"
      className={cn(
        "tw:!h-10 tw:!w-10 tw:!flex tw:!justify-center tw:!items-center tw-disabled:tw-opacity-50 tw:!rounded-sm",
        "tw:!transition-colors tw:!duration-300 tw:!ease-in-out",
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
}

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
    "tw:!flex tw:!justify-center tw:!items-center tw:!px-3 tw:!py-2 tw:!bg-gray-50 tw:!mb-2 tw:!mr-2 tw:!mt-2",
    {
      "tw:!w-[350px]": staff,
      "tw:!w-auto": !staff,
    },
    "tw:md:!w-full"
  );

  const inputClasses = cn(
    "tw:!flex-1 tw:!bg-gray-50 tw:!rounded-md tw:!text-sm tw:!leading-tight tw:!border-none tw:!focus:outline-hidden",
    "tw:!transition-colors tw:!duration-300 tw:!ease-in-out",
    "tw:!px-2 tw:!py-1 tw:!h-6",
    {
      "tw:!w-[350px]": staff,
      "tw:!w-auto": !staff,
    },
    "tw:md:!w-full"
  );

  return (
    <div className="tw:!flex tw:!flex-row tw:!items-center tw:!justify-center">
      <div className={wrapperClasses} style={{ width }}>
        <i className="fa fa-search tw:!text-gray-500 tw:!text-xs tw:!mr-2"></i>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          type="search"
          placeholder={placeholder}
          className={inputClasses}
        />
      </div>
      {!staff && (
        <SearchbarButton loading={loading} onClick={handleSearch} />
      )}
    </div>
  );
};

export default Searchbar;