import React from 'react';
import Input from '../../Atoms/Input/Input';
import { IStateProps, IState } from './index';
import { User } from '../../utils/CustomObjects';
import { routes } from '../../utils/constants';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { PageWrapper } from '../../Atoms/PageWrapper';
import { Title } from '../../Atoms/TItle';
import  NavBar from '../NavBar';
import { FormWrapper } from '../../Atoms/FormWrapper';

export default class RegisterPage extends React.Component<IStateProps, IState> {

  state: IState = {
    user: new User(),
  };

  handleChange = (event: any) => {
    event.preventDefault();
    event.persist();
    this.setState(prevState => ({ 
      user:{ ...prevState.user, [event.target.name]: event.target.value }}));
  }

  handleSubmit = async (event: any) => {
    const { user } = this.state;
    const { push } = this.props.history;
    const { registerUser } = this.props;
    
    registerUser(user, {redirect: push, path: routes.login});
    event.preventDefault();
  }

  render() {
    const { email, username, password, firstName, lastName } = this.state.user;
    return (
      <>
        <NavBar/>
        <PageWrapper data-test-id='register-page'>
          <Title>
            <FormattedMessage
              {...messages.title}
            />
          </Title>
            <FormWrapper onSubmit={this.handleSubmit}>
              <label>
                <Input
                  name="email"
                  placeholder="email"
                  value={email}
                  onChange={this.handleChange} />
                <Input
                  name="username"
                  placeholder="username"
                  value={username}
                  onChange={this.handleChange} />
                <Input
                  type="password"
                  name="password"
                  placeholder="password"
                  value={password}
                  onChange={this.handleChange} />
                <Input
                  name="firstName"
                  placeholder="firstName"
                  value={firstName}
                  onChange={this.handleChange} />
                <Input
                  name="lastName"
                  placeholder="lastName"
                  value={lastName}
                  onChange={this.handleChange} />
              </label>
              <Input type="submit" value="Register" isLoading={this.props.isLoading}/>
            </FormWrapper>
        </PageWrapper>
      </>
    );
  }
}
