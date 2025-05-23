import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'


import { getPieChartBaseData, getPieChartBaseOptions } from '@/utils/chartUtils'

ChartJS.register(ArcElement, Tooltip, Legend)


const PieChart = ({ 
  data = getPieChartBaseData(),
  options = getPieChartBaseOptions(),
  ...props
 }) => {

  return <Doughnut data={data} options={options} {...props} />
}

export default PieChart 