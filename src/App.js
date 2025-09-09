import './App.css';
import './assets/styles/admin.css'
import AdminDashboard from './Pages/Admin';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './assets/styles/form.css';
import Form from './Pages/Form';
import './assets/styles/variables.css';
import './assets/styles/animations.css';

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
