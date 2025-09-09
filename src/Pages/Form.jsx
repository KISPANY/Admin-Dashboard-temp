import React, { useState } from 'react';
import Login from '../Components/Login';
import SignUp from '../Components/SignUp';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Form = () => {

  return (
    <section className="form-page flex center">
      <Router>
        <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/sign-up" component={SignUp} />
      </Switch>
      </Router>
    </section>
  );
};

export default Form;