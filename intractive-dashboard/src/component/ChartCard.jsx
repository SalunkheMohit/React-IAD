import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';

const ChartCard = ({data}) => {
    return (
        <div className='bg-white  p-4 shadow-sm rounded-xl'>
            <h3 className='font-semibold mb-4'>Revenue Growth</h3>
            <LineChart width={500} height={250} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line dataKey="revenue" />
            </LineChart>
        </div>
    );
};

export default ChartCard;