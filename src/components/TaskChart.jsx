import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const data = [
  { month: "Jan", tasks: 20 },
  { month: "Feb", tasks: 25 },
  { month: "Mar", tasks: 18 },
];

export default function TaskChart() {
  return (
    <LineChart width={600} height={300} data={data}>
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <CartesianGrid stroke="#ccc" />
      <Line type="monotone" dataKey="tasks" stroke="#1976d2" />
    </LineChart>
  );
}