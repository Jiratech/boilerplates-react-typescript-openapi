import React from 'react';
import { IState, IStateProps } from './index';
import Input from '../../Atoms/Input/Input';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { PageWrapper } from '../../Atoms/PageWrapper';
import  NavBar from '../NavBar';
import { FormWrapper } from '../../Atoms/FormWrapper';
import { Title } from '../../Atoms/TItle';
import { A } from '../../Atoms/A';

export default class LoginPage extends React.Component<IStateProps, IState> {

  state: IState = {
    email: "",
    password: "",
  };

  handleChange = (event: any) => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value } as IState);
  }

  handleSubmit = (event: any) => {
    const { email, password } = this.state;
    event.preventDefault();
    this.props.loginUser(email, password)
  }

  render() {
    const { email, password } = this.state;
    return (
      <>
      <NavBar/>
      <PageWrapper data-test-id='login-page'>
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
              type="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={this.handleChange} />
          </label>
          <Input type="submit" value="Login"/>
        </FormWrapper>
        <A href="/register">
          <FormattedMessage
            {...messages.register}
          />
        </A>
      </PageWrapper>
      </>
    );
  }
}
