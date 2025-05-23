import classNames from "classnames"
import i18next from "i18next"

const PaginationBar = ({
  page = 0,
  totalPages = 0,
  next = null,
  previous = null,
  onPagination = (_modifier) => { },
}) => {

  const previousDisabled = page === 0 || !previous
  const nextDisabled = page >= totalPages || !next

  const barClasses = classNames(
    'tw:!grid tw:!grid-cols-3 tw:!gap-4 tw:!justify-center tw:!items-center tw:!mt-4'
  )

  const genericButtonClasses = 'tw:!p-2 tw:!rounded tw:!bg-transparent tw:!font-bold tw:!text-sm tw:!border tw:!border-none'
  const disabledButtonClasses = 'tw:!cursor-not-allowed tw:!text-gray-400'
  const previousButtonClasses = classNames(
    genericButtonClasses,
    {
      'tw:!text-gray-800': page !== 0 && previous,
      [disabledButtonClasses]: previousDisabled,
    }
  )
  const nextButtonClasses = classNames(
    genericButtonClasses,
    {
      'tw:!text-gray-800': page !== totalPages - 1 && next,
      [disabledButtonClasses]: nextDisabled,
    }
  )

  const pageSpanClasses = classNames(
    'tw:!text-gray-800 tw:!font-bold tw:!text-sm'
  )

  const hasPages = totalPages >= 1 && page !== 0

  return (
    <div className={barClasses}>
      <div>

      <button
        onClick={() => onPagination(-1)}
        className={previousButtonClasses}
        disabled={previousDisabled}
        >
          <i className="fas fa-chevron-left tw:!mr-2"></i>
        {i18next.t("general.actions.previous")}
      </button>
        </div>
        <div className="tw:!flex tw:!justify-center">
      {hasPages && (
          <span className={pageSpanClasses}>
            {i18next.t("general.actions.page")}&nbsp;{page}/{totalPages}
          </span>
      )}
        </div>
      <div className="tw:!flex tw:!justify-end">
      <button
        onClick={() => onPagination(1)}
        className={nextButtonClasses}
        disabled={nextDisabled}
      >
        Next
        <i className="fas fa-chevron-right tw:!ml-2"></i>
      </button>
      </div>
    </div>
  )
}

export default PaginationBar