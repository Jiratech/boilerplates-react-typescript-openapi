import HomePageAdmin from './HomePageAdmin';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { loadUserList, createUser } from '../../redux/actions/userActions';
import { loadRolesList } from '../../redux/actions/userActions';
import { selectUserList, selectIsLoading } from '../../redux/selectors/userSelector';
import { IUser, IRole } from '../../openApi';
import { selectRoleList } from '../../redux/selectors/userSelector';

export type IStateProps = {
  loadUserList: () => void;
  loadRolesList: () => void;
  userList: Array<IUser>;
  roleList: Array<IRole>;
  createUser: (user: IUser) => void;
  isLoading: boolean;
}

export type IState = {
  user: IUser
};

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoading(),
  userList: selectUserList(),
  roleList: selectRoleList(),
});

const mapDispatchToProps = {
  loadUserList,
  loadRolesList,
  createUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePageAdmin);