import React from "react";
import { RouteComponentProps, Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { selectAccessToken, selectRole } from '../../redux/selectors/sessionSelector';
import { createStructuredSelector } from 'reselect';
import { routes } from '../../utils/constants';
import { verifyRole } from '../../utils/verifyRole';

interface IProps {
  component: any;
  path: string;
  exact?: boolean;
  requiredRoles: string[];
  accessToken?: string | null;
  roleName?: string;
}
//TODO when going on a path with a wrong role, you get redirected to login page and get logged out. Should be that you get 404 - not found page
const AppRoute = ({ component: Component, path, exact = false, requiredRoles, accessToken, roleName }: IProps): JSX.Element => {
  const userHasRequiredRole: boolean = verifyRole(requiredRoles, roleName);
  return (
    <Route
      exact={exact}
      path={path}
      render={(props: RouteComponentProps) =>
        accessToken && userHasRequiredRole
          ? <Component {...props} />
          : <Redirect to={{ pathname: routes.login }} />
      }
    />
  );
};

const mapStateToProps = createStructuredSelector({
  accessToken: selectAccessToken(),
  roleName: selectRole()
})

export default connect(mapStateToProps, null)(AppRoute);