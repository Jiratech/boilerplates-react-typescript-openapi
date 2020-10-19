import React from 'react';
import { IStateProps, IState } from './';
import { User } from '../../utils/CustomObjects'
import Input from '../../Atoms/Input/Input';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { PageWrapper } from '../../Atoms/PageWrapper';
import { FormWrapper } from '../../Atoms/FormWrapper';
import NavBar from '../NavBar';
import { Title } from '../../Atoms/TItle';
import { P } from '../../Atoms/P';
import UserList from '../../components/UserList';
import DropDown, { IOption } from '../../Atoms/DropDown';

export default class HomePageAdmin extends React.Component<IStateProps, IState> {

  state: IState = {
    user: new User()
  };

  componentDidMount() {
    const { roleList } = this.props;
    this.props.loadUserList();
    this.props.loadRolesList();
    roleList && this.setState({ user: { ...this.state.user, roleId: roleList[0]?.roleId } })
  }

  handleChange = (event: any) => {
    event.preventDefault();
    this.setState({ user: { ...this.state.user, [event.target.name]: event.target.value } });
  }

  handleChangeRole = (roleId: string) => {
    this.setState({ user: { ...this.state.user, roleId } });
  }

  handleSubmit = async (event: any) => {
    const { user } = this.state;
    event.preventDefault();
    this.props.createUser(user);
  }

  render() {
    const { 
      state: { 
        user: {email, username, password, firstName, lastName, roleId }
      }, 
      props: { userList, roleList },
      handleSubmit,
      handleChange,
      handleChangeRole,
    } = this;

    let roleOptions: IOption[] = [];
    roleList && roleList.forEach(role => {
      if(role.name && role.roleId) {
        roleOptions.push({value: role.roleId, label: role.name})
      }
    });

    return (
      <>
        <NavBar/>
        <PageWrapper data-test-id="admin-home-page">
            <Title>
              <FormattedMessage
                  {...messages.welcomeText}
              />
            </Title>
            <FormWrapper action="" onSubmit={handleSubmit}>
              <label>
                <Input
                  name="email"
                  placeholder="email"
                  value={email}
                  onChange={handleChange} />
                <Input 
                  name="username"
                  placeholder="username"
                  value={username}
                  onChange={handleChange} />
                <Input
                  type="password"
                  name="password"
                  placeholder="password"
                  value={password}
                  onChange={handleChange} />
                <Input
                  name="firstName"
                  placeholder="firstName"
                  value={firstName}
                  onChange={handleChange} />
                <Input
                  name="lastName"
                  placeholder="lastName"
                  value={lastName}
                  onChange={handleChange} />
                <DropDown 
                  dataTest="button-roles-dropdown"
                  onChange={handleChangeRole} 
                  options={roleOptions} 
                  value={roleId || ''}
                />
              </label>
              <Input type="submit" value="Register" isLoading={this.props.isLoading}/>
            </FormWrapper>
            {email && <P>{email}</P> }
            <UserList usersList={userList} dataTestId="users-list" />
        </PageWrapper>
      </>
    );
  }
}