import { connect } from 'react-redux';
import LoginPage from './LoginPage';
import { loginUser } from '../../redux/actions/userActions';
import { History, LocationState } from "history";

export type IState = {
  email: string;
  password: string;
};

export type IStateProps = {
  history: History<LocationState>;
  loginUser: (email: string, password: string) => void;
}

const mapDispatchToProps = {
  loginUser,
}

export default connect(null, mapDispatchToProps)(LoginPage)