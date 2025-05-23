

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'

import { getBarChartBaseData, getBarChartBaseOptions } from '@/utils/chartUtils'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const BarChart = ({ 
  data = getBarChartBaseData(),
  options = getBarChartBaseOptions(),
  ...props
 }) => {

  return <Bar data={data} options={options} />
}

export default BarChart