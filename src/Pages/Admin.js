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
import Profile from '../Components/Profile';
import ThemeToggle from '../Components/ThemeToggle';
import sbr from '../assets/images/sidebar.webp'


const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="admin-dashboard">
        <div className="header-div">
          <header className="dashboard-header">
                 {/* Header */}
            <div className="header-left center">
                <button 
                    className="menu-toggle" 
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                  <img src={sbr} width={30} />
                </button>
                <h1>Kispan Admin</h1>
            </div>
            <div className="header-right">
                <div className="search-box">
                    <input type="text" placeholder="Search..." />
                </div>
                <div className="user-profile">
                    <span className="user-name">Kispany</span>
                    <div className="avatar">KPY</div>
                </div>
                <ThemeToggle />
            </div>
          </header>
        </div>
        <div className="dashboard-content">
          {/* {sidebarOpen && ( */}
            <div className={`side-dash center ${sidebarOpen ? "open" : ""}`} >
                <aside className="dashboard-sidebar center">
                  <SideBar />
                </aside>
            </div>
          {/* )} */}
          <Switch>
            <Route exact path="/dashboard/" component={Dashboard} />
            <Route path="/analytics" component={Analytics} />
            <Route exact path="/projects" component={ProjectsAdmin} />
            <Route exact path="/messages" component={MessagesAdmin} />
            <Route exact path="/settings" component={Settings} />
          </Switch>
          <Route path="/settings/profile" component={ Profile } />
        </div>
      </div>
    </Router>
  );
};

export default AdminDashboard;