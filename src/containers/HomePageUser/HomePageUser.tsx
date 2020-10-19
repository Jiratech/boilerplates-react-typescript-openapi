import React from 'react';
import { IStateProps } from './';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { PageWrapper } from '../../Atoms/PageWrapper';
import NavBar from '../NavBar';
import { Title } from '../../Atoms/TItle';

export default class HomePageUser extends React.Component<IStateProps, {}> {

  render() {
    return (
      <>
        <NavBar/>
        <PageWrapper>
          <Title>
            <FormattedMessage
              {...messages.welcomeText}
            />
          </Title>
        </PageWrapper>
      </>
    );
  }
}