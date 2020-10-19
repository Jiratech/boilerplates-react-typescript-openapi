import React from "react";
import { RouteComponentProps, Route, Redirect } from "react-router-dom";
import { routes } from '../../utils/constants';
import { connect } from 'react-redux';
import { selectAccessToken } from '../../redux/selectors/sessionSelector';
import { createStructuredSelector } from 'reselect';

interface Props {
  component: any;
  path: string;
  exact?: boolean;
  accessToken?: string
}

const AuthRoute = ({ component: Component, path, exact = false, accessToken }: Props): JSX.Element => {
  return (
    <Route
      exact={exact}
      path={path}
      render={(props: RouteComponentProps) =>
        !accessToken
          ? <Component {...props} />
          : <Redirect to={{ pathname: routes.home }} />
      }
    />
  );
};

const mapStateToProps = createStructuredSelector({
  accessToken: selectAccessToken()
})

export default connect(mapStateToProps, null)(AuthRoute);