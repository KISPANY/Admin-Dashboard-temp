import { ProjectsData } from "../data/Projects_data";

const ProjectTable = () => {

    return (
        <table className="project-table">
            <thead>
                <tr>
                    <th>Project Name</th>
                    <th>Client</th>
                    <th>Image-Preview</th>
                    <th>Descriptions</th>
                    <th colSpan={2}><button className="add-btn">+ new</button></th>
                </tr>
            </thead>
            <tbody>
                {ProjectsData.map((data) => (
                    <tr>
                        <td>{data.name}</td>
                        <td>{data.client}</td>
                        <td><img src={data.img} width={50} /></td>
                        <td>{data.description}</td>
                        <td><button className="edit-btn">edit</button></td>
                        <td><button className="delete-btn">delete</button></td>
                    </tr>
                ))}
                
            </tbody>
        </table>
    )
}

export default ProjectTable;