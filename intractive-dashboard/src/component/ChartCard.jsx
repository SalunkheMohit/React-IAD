import {
  LineChart, Line,
  BarChart, Bar,
  PieChart, Pie,
  AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from "recharts";

const ChartCard = ({ data }) => {
  return (
    <div className="bg-white p-4 shadow-sm rounded-xl grid md:grid-cols-2 lg:grid-cols-2 gap-20">

      {/* Line Chart */}
      <div>
        <h3 className="font-semibold mb-4">Revenue Growth (Line)</h3>
        <LineChart width={450} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line dataKey="revenue" stroke="#2563eb" />
        </LineChart>
      </div>

      {/* Bar Chart */}
      <div>
        <h3 className="font-semibold mb-4">Revenue Growth (Bar)</h3>
        <BarChart width={350} height={250} data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="revenue" fill="#22c55e" />
        </BarChart>
      </div>

      {/* Pie Chart (FIXED) */}
      <div>
        <h3 className="font-semibold mb-4">Users Distribution</h3>
        <PieChart width={350} height={250}>
          <Pie
            data={data}
            dataKey="users"
            nameKey="month"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#f97316"
            label
          />
          <Tooltip />
          <Legend />
        </PieChart>
      </div>

      {/* Area Chart */}
      <div>
        <h3 className="font-semibold mb-4">Revenue Growth (Area)</h3>
        <AreaChart width={350} height={250} data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Area dataKey="revenue" stroke="#8b5cf6" fill="#c4b5fd" />
        </AreaChart>
      </div>

    </div>
  );
};

export default ChartCard;
