import { Link } from "react-router-dom";

const Stats = () => {

    return (
        <div className="stats-grid">
            <div className="stat-card">
                <div className="stat-icon" style={{background: '#ffefef'}}>👁️</div>
                <div className="stat-info">
                    <h3>12,856</h3>
                    <p>Total Visits</p>
                </div>
            </div>
            <Link to="/projects" className="stat-card">
                <div className="stat-icon" style={{background: '#eff6ff'}}>📂</div>
                <div className="stat-info">
                    <h3>24</h3>
                    <p>Projects</p>
                </div>
            </Link>
            <Link to="/blogs" className="stat-card">
                <div className="stat-icon" style={{background: '#f0f9f4'}}>👍</div>
                <div className="stat-info">
                    <h3>8</h3>
                    <p>Blogs</p>
                </div>
            </Link>
            <Link to="/messages" className="stat-card">
                <div className="stat-icon" style={{background: '#fef6e6'}}>✉️</div>
                <div className="stat-info">
                    <h3>42</h3>
                    <p>New Messages</p>
                </div>
            </Link>
        </div>
    )
}

export default Stats;