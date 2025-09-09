import {
  BarChart, Bar, LineChart, Line, PieChart, Pie,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell,
} from 'recharts';
// import { ProjectsData } from '../data/Projects_data';
import { useEffect } from 'react';


const ProjectsData = [
  { name: 'Web Development', value: 45, color: '#0c0c' },
  { name: 'UI/UX Design', value: 30, color: '#ff7700d1' },
  { name: 'Mobile Apps', value: 15, color: 'rgba(28, 3, 152, 0.77)' },
  { name: 'Consulting', value: 10, color: '#00ffc8d0' },
]



const Pie_Chart = () => {
    
    return (
        <ResponsiveContainer width="100%" height={300} >
            <PieChart>
                <Pie
                data={ProjectsData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                    {ProjectsData.map((entry, index) => (
                        <Cell key={index} fill={entry.color} />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>
        </ResponsiveContainer>
    )
}

export default Pie_Chart;