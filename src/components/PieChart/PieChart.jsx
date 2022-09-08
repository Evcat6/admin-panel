import { PieChart, Pie, Cell } from 'recharts';
import { data_2, COLORS } from '../../data/variables'

const PieCharts = () => {
    return (
        <PieChart width={294} height={294} >
          <Pie
          dataKey="value"
          startAngle={0}
          endAngle={380}
          data={data_2}
          cx="50%"
          cy="50%"
          outerRadius={80}
          innerRadius={60}
          fill="#8884d8"
          label
          >
            {data_2.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
            </Pie>
        </PieChart>
    )
}


export default PieCharts;