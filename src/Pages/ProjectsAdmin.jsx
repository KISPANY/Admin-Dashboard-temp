import { useState } from "react";
import Bar_Chart from "../Components/BarChart";
import { ProjectsData } from "../data/Projects_data";

const ProjectsAdmin = () => {
    const [popUp, setPopUp] = useState(false);

    const Ids = ProjectsData.map(ids => ids.id);
    const threeProjects = ProjectsData.slice(0, 3);

    return ( 
        <div className="project-page  align-items-start flex-column">
            {popUp && (
                <div onClick={() => setPopUp(false)} className="popup center fixed">
                    <div className="popup-content center flex-column">
                        <h1>Recent Projects</h1>
                        {threeProjects.map((data) => (
                            <div key={data.id} className="flex-row prj-data">
                                <img src={data.img} className="prj-img" />
                                <div>
                                    <h2>{data.name}</h2>
                                    <p>{data.client}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            <div className="mon-stats flex-row justify-content-center width-100">
                <div className="chart-bar center" >
                    <h3>Monthly Performance</h3>
                    <Bar_Chart />
                </div>
                <div className="stats-container flex-column">
                    <div onClick={() => setPopUp(true)} to="/projects" className="stats-card">
                        <div className="stat-icon" style={{background: '#eff6ff'}}>📂</div>
                        <div className="stat-info">
                            <h3>90</h3>
                            <p>Web Design Projects</p>
                        </div>
                    </div>
                    <div onClick={() => setPopUp(true)} to="/projects" className="stats-card">
                        <div className="stat-icon" style={{background: '#eff6ff'}}>📂</div>
                        <div className="stat-info">
                            <h3>75</h3>
                            <p>Graphics Design Projects</p>
                        </div>
                    </div>
                    <div onClick={() => setPopUp(true)} to="/projects" className="stats-card">
                        <div className="stat-icon" style={{background: '#eff6ff'}}>📂</div>
                        <div className="stat-info">
                            <h3>53</h3>
                            <p>Mobile Apps Projects</p>
                        </div>
                    </div>
                    <div onClick={() => setPopUp(true)} to="/projects" className="stats-card">
                        <div className="stat-icon" style={{background: '#eff6ff'}}>📂</div>
                        <div className="stat-info">
                            <h3>24</h3>
                            <p>Consulting</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ProjectsAdmin;