import RegisterPage from './RegisterPage';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsLoading } from '../../redux/selectors/userSelector';
import { registerUser } from '../../redux/actions/userActions';
import { History, LocationState } from "history";
import { IUser } from '../../openApi';
import { ISagaActionMeta } from '../../utils/CustomInterfaces';

export type IState = {
  user: IUser;
};

export type IStateProps = {
  history: History<LocationState>;
  registerUser: (user: IUser, meta?: ISagaActionMeta) => void;
  isLoading: boolean;
}

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoading(),
});

const mapDispatchToProps = {
  registerUser
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);