import HomePage from './HomePage';
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/actions/sessionActions';
import { History, LocationState } from "history";

export type IStateProps = {
  history: History<LocationState>;
  logoutUser: () => void;
}

const mapDispatchToProps = {
  logoutUser
}

export default connect(null, mapDispatchToProps)(HomePage);