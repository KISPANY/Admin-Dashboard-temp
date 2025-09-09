import Bar_Chart from "../Components/BarChart";

const ProjectsAdmin = () => {
    return ( 
        <div className="project-page center flex-column width-100">
            <div className="chart-container center" >
                <h3>Monthly Performance</h3>
                <Bar_Chart />
            </div>
        </div>
     );
}
 
export default ProjectsAdmin;