import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Login from './container/Login/Login';
import Layout from './container/Layout/Layout';
import Dashboard from './container/Dashboard/Dashboard';
import Category from './container/Dashboard/Category';
import * as authActions from './store/actions/authAction';
import setAuthHeader from './config/setAuthHeaders';

class App extends Component {

  state = {
    isAuthenticated: true,
    routes: null,
  }

  componentDidMount() {
    const token = localStorage.getItem('token');
    if (token) {
      setAuthHeader(token);
      const name = localStorage.getItem('name');
      this.props.onTryAutoSignup(token, name);
    }
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/login" exact component={Login} />
        <Redirect to="/login" />
      </Switch>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <Layout>
          <Switch>
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/category" exact component={Category} />
            <Redirect from='/' to="/dashboard" />
          </Switch>
        </Layout>
      )
    }

    return (
      <div>
        {routes}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isAuthenticated: state.Auth.token !== null,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: (token, name) => dispatch(authActions.authSuccess(token, name)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
