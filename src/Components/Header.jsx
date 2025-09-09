import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

    return(
        <header className="dashboard-header">
                 {/* Header */}
            <div className="header-left">
                <button 
                    className="menu-toggle" 
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                    ☰
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
    )
}

export default Header;