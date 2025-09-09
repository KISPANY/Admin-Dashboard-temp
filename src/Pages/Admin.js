import React, { useState } from 'react';
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import SideBar from '../Components/SideBar';
import Header from '../Components/Header';
import ProjectsAdmin from './ProjectsAdmin';
import MessagesAdmin from './Messages';
import Settings from './Settings';
import Analytics from './Analytics';


const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <Router>
      <div className="admin-dashboard">
        <Header />
        <div className="dashboard-content">
          {sidebarOpen && (
            <aside className="dashboard-sidebar">
              <SideBar />
            </aside>
          )}
          <Switch>
            <Route exact path="/dashboard/" component={Dashboard} />
            <Route path="/analytics" component={Analytics} />
            <Route exact path="/projects" component={ProjectsAdmin} />
            <Route exact path="/messages" component={MessagesAdmin} />
            <Route exact path="/settings" component={Settings} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default AdminDashboard;