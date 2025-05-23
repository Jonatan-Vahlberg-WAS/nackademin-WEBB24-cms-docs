import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  LineController,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

import { getLineChartBaseData, getLineChartBaseOptions } from '@/utils/chartUtils'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, LineController, Title, Tooltip, Legend)

const LineChart = ({
  data = getLineChartBaseData(),
  options = getLineChartBaseOptions(),
  ...props
}) => {
  return <Line data={data} options={options} {...props} />
}

export default LineChart
