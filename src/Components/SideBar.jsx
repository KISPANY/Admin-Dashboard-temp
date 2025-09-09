import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

    return ( 
        <nav className="sidebar-nav">
              <ul>
                <li className={activeTab === 'dashboard' ? 'active' : ''}>
                  <Link to="/dashboard/" onClick={() => setActiveTab('dashboard')} className="Link">
                    Dashboard
                  </Link>
                </li>
                <li className={activeTab === 'projects' ? 'active' : ''}>
                  <Link to="/projects" onClick={() => setActiveTab('projects')} className="Link">
                    Projects
                  </Link>
                </li>
                <li className={activeTab === 'analytics' ? 'active' : ''}>
                  <Link to="/analytics" onClick={() => setActiveTab('analytics')} className="Link">
                    Analytics
                  </Link>
                </li>
                <li className={activeTab === 'messages' ? 'active' : ''}>
                  <Link to="/messages" onClick={() => setActiveTab('messages')} className="Link">
                    Messages
                  </Link>
                </li>
                <li className={activeTab === 'blogs' ? 'active' : ''}>
                  <Link to="/blogs" onClick={() => setActiveTab('blogs')} className="Link">
                    Blogs
                  </Link>
                </li>
                <li className={activeTab === 'settings' ? 'active' : ''}>
                  <Link to="/settings" onClick={() => setActiveTab('settings')} className="Link">
                    Settings
                  </Link>
                </li>
              </ul>
        </nav>
     );
}
 
export default SideBar;