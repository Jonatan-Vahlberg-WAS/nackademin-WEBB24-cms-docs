
import Select from "@/library/Form/TWSelect"

import { getTimeframeByValue, timeframes } from "@/utils/chartUtils"

const i18nprefix = 'charts.timeframe'

const TimeframeSelector = ({
  selectedTimeframe = 'today',
  className = '',
  onChangeTimeframe = (timeframe) => {},
}) => {
  return (
    <div>
      <Select
        options={timeframes}
        value={selectedTimeframe}
        onChange={(e) => {
          const value = e.target.value
          const timeframe = getTimeframeByValue(value)
          onChangeTimeframe(timeframe)
        }}
        className={className}
      />
    </div>
  )
}

export default TimeframeSelector