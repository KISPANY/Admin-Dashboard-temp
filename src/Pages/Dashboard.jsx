import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Pie_Chart from '../Components/PieChart';
import Bar_Chart from '../Components/BarChart';
import Stats from '../Components/Stats';
import { MessageData } from '../data/MessageData';



const Dashboard = () => {
    const unread = MessageData.slice(0, 3);

    return ( 
        <main className="dashboard-main">
              {/* Stats Overview */}
            <Stats />
            {/* Charts Section */}
            <div className="charts-row">
                <div className="chart-container">
                    <h3>Monthly Performance</h3>
                    <Bar_Chart />
                </div>

                <div className="chart-container">
                    <h3>Project Distribution</h3>
                    <Link to="/projects" className="pointer" >
                        <Pie_Chart />
                    </Link>
                </div>
            </div>

            {/* Recent Activity */}
            <div className="recent-activity">
                <h3>Recent Messages</h3>
                <table className="activity-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Message</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    {unread.map((index) => (
                        <tbody key={index} >
                            <tr>
                                <td>{index.name}</td>
                                <td>{index.email}</td>
                                <td>{index.message}</td>
                                <td>{index.date}</td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </div>
        </main>
    );
}
 
export default Dashboard;