import React from 'react';
import LoginPage from '../LoginPage';
import RegisterPage from '../RegisterPage';
import NotFound from '../NotFound';
import HomePage from '../HomePage';
import HomePageAdmin from '../HomePageAdmin';
import HomePageUser from '../HomePageUser';
import AppRoute from './AppRoute';
import AuthRoute from './AuthRoute';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { userRoles } from '../../utils/constants'
import { routes } from '../../utils/constants';
import { GlobalStyle } from '../../styles/global-styles';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <GlobalStyle />
        <Switch>
          <AuthRoute path={routes.register} component={RegisterPage} />
          <AuthRoute path={routes.login} component={LoginPage} />
          <AppRoute exact path={routes.home} component={HomePage} requiredRoles={[userRoles.admin, userRoles.user]} />
          <AppRoute exact path={routes.homeUser} component={HomePageUser} requiredRoles={[userRoles.user]} />
          <AppRoute exact path={routes.homeAdmin} component={HomePageAdmin} requiredRoles={[userRoles.admin]} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}
