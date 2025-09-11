import './assets/styles/admin.css'
import AdminDashboard from './Pages/Admin';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './assets/styles/form.css';
import Form from './Pages/Form';
import './assets/styles/variables.css';
import './assets/styles/animations.css';
import './assets/styles/projects.css';
import './assets/styles/message.css';
import './assets/styles/settings.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ Form } />
        <AdminDashboard />
      </Switch>
    </Router>
  );
}

export default App;
