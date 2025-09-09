import {
  BarChart, Bar, LineChart, Line, PieChart, Pie,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell,
} from 'recharts';
// import monthlyStats from '../data/MonthlyStats';

const monthlyStats = [
  { month: 'Jan', projects: 20, viewers: 400, contacts: 120 },
  { month: 'Feb', projects: 50, viewers: 300, contacts: 100 },
  { month: 'Mar', projects: 30, viewers: 200, contacts: 200 },
  { month: 'Apr', projects: 78, viewers: 280, contacts: 100 },
  { month: 'May', projects: 23, viewers: 190, contacts: 100 },
  { month: 'Jun', projects: 38, viewers: 290, contacts: 100 },
];

const Bar_Chart = () => {

    return (
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={monthlyStats}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="viewers" fill="#8884d8" />
            <Bar dataKey="projects" fill="#82ca9d" />
            <Bar dataKey="contacts" fill="rgb(167, 213, 2)" />
        </BarChart>
      </ResponsiveContainer>
    )
}

export default Bar_Chart;