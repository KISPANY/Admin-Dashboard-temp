import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GeneralSettings from "../Components/General_settings";
import Profile from "../Components/Profile";
import Notification from "../Components/Notification";
import Appearance from "../Components/Appearance";
import Team from "../Components/Team";

const Settings = () => {
    return ( 
        <section className="width-100 flex-column align-items-top">
            <nav className="settings-nav width-100">
                <ul>
                    <li><Link className="link" to="/settings/">General</Link></li>
                    <li><Link className="link" to="/settings/profile" >Profile</Link></li>
                    <li><Link className="link" to="/appearance">Appearance</Link></li>
                    <li><Link className="link" to="/notification">Notifications</Link></li>
                    <li><Link className="link" to="/team">Team</Link></li>
                </ul>
            </nav>
            <Router>
                <Switch>
                    <Route path="/settings/" component={ GeneralSettings } />
                    <Route exact path="/notification" component={ Notification } />
                    <Route exact path="/appearance" component={ Appearance } />
                    <Route exact path="/team" component={ Team } />
                </Switch>
            </Router>
        </section>
     );
}
 
export default Settings;