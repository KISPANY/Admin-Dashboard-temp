import { MessageData } from "../data/MessageData";  

const MessagesAdmin = () => {
    return ( 
        <div className="recent-activity width-100">
            <table className="activity-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Message</th>
                        <th>Date</th>
                    </tr>
                </thead>
                {MessageData.map((index) => (
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
     );
}
 
export default MessagesAdmin;