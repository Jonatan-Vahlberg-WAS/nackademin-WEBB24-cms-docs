import classNames from "classnames";
import i18next from "i18next";

const PaginationBar = ({
  page = 0,
  totalPages = 0,
  next = null,
  previous = null,
  onPagination = (_modifier) => {},
}) => {
  const previousDisabled = page === 0 || !previous;
  const nextDisabled = page >= totalPages || !next;

  const barClasses = classNames(
    "grid grid-cols-3 gap-4 justify-center items-center mt-4"
  );

  const genericButtonClasses =
    "p-2 rounded bg-transparent font-bold text-sm border border-none";
  const disabledButtonClasses = "cursor-not-allowed text-gray-400";
  const previousButtonClasses = classNames(genericButtonClasses, {
    "text-gray-800": page !== 0 && previous,
    [disabledButtonClasses]: previousDisabled,
  });
  const nextButtonClasses = classNames(genericButtonClasses, {
    "text-gray-800": page !== totalPages - 1 && next,
    [disabledButtonClasses]: nextDisabled,
  });

  const pageSpanClasses = classNames("text-gray-800 font-bold text-sm");

  const hasPages = totalPages >= 1 && page !== 0;

  return (
    <div className={barClasses}>
      <div>
        <button
          onClick={() => onPagination(-1)}
          className={previousButtonClasses}
          disabled={previousDisabled}
        >
          <i className="fas fa-chevron-left mr-2"></i>
          {i18next.t("general.actions.previous")}
        </button>
      </div>
      <div className="flex justify-center">
        {hasPages && (
          <span className={pageSpanClasses}>
            {i18next.t("general.actions.page")}&nbsp;{page}/{totalPages}
          </span>
        )}
      </div>
      <div className="flex justify-end">
        <button
          onClick={() => onPagination(1)}
          className={nextButtonClasses}
          disabled={nextDisabled}
        >
          Next
          <i className="fas fa-chevron-right ml-2"></i>
        </button>
      </div>
    </div>
  );
};

export default PaginationBar;
