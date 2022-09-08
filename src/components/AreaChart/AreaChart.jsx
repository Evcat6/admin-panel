import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import { data } from '../../data/variables'

const AreaCharts = () => {
    return (
        <AreaChart
        width={384}
        height={258}
        data={data}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#fff" fill="#F4A26C" />
        <Area type="monotone" dataKey="pv" stroke="#fff" fill="#3FAEA3" />
        <Area type="monotone" dataKey="amt" stroke="#fff" fill="#914DF0" />
      </AreaChart>
    )
}


export default AreaCharts;