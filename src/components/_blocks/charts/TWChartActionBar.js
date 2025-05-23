
import { CHART_TYPES } from "@/utils/chartUtils"
import Button from "@/library/Button/TWButton"

import { cn } from "@/utils/cn"

const ChartActionBar = ({ 
  selectedChartOption = "bar",
  showBarChart = true,
  showPieChart = false,
  showLineChart = false,
  showRefreshButton = true,
  loading = false,
  className = "",
  children,
  onOptionSelected = (option) => {},
  onRefresh = () => {},
  ...props
}) => {

  const chartOptions = {
    bar: showBarChart && {
      label: "bar",
      value: CHART_TYPES.BAR,
      icon: "fas fa-chart-bar",
      type: "option",
    },
    pie: showPieChart && {
      label: "pie",
      value: CHART_TYPES.PIE,
      icon: "fas fa-chart-pie",
      type: "option",
    },
    line: showLineChart && {
      label: "line",
      value: CHART_TYPES.LINE,
      icon: "fas fa-chart-line",
      type: "option",
    },
    refresh: showRefreshButton && {
      label: "refresh",
      value: "refresh",
      icon: "fas fa-rotate-right",
      type: "refresh",
    },
  }

  const chartOptionsMap = Object.values(chartOptions).filter(Boolean)

  const chartActionBarClasses = cn(
    "tw:!flex tw:!flex-row tw:!items-center tw:!justify-between tw:!gap-2 tw:!w-full",
    className
  )

  const optionsClasses = cn(
    "tw:!flex tw:!flex-row tw:!items-center tw:!justify-end tw:!gap-2",
  )

  const renderChildren = () => {
    if(children) {
      return children
    }
    return <div />
  }

  return (
    <div className={chartActionBarClasses}>
      {renderChildren()}
      <div className={optionsClasses}>
        {chartOptionsMap.map((option) => {
          const isSelected = selectedChartOption === option.value
        const buttonClasses = cn({
          "tw:!pointer-events-none": isSelected,
        })
        return (
          <Button
            key={option.value}
            variant={selectedChartOption === option.value ? "success" : "default"}
            outline
            icon={option.icon}
            disabled={loading}
            onClick={() => {
              if(option.type === "option") {
                onOptionSelected(option.value)
              } else if (option.type === "refresh") {
                onRefresh()
              }
            }}
            className={buttonClasses}
          >
            <i className={option.icon} />
          </Button>
        )
      })}
      </div>
    </div>
  )
}

export default ChartActionBar;
