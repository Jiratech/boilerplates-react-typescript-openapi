import React from 'react';
import { IStateProps } from './';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { PageWrapper } from '../../Atoms/PageWrapper';
import { Title } from '../../Atoms/TItle';
import NavBar from '../NavBar';

export default class HomePage extends React.Component<IStateProps, {}> {

  render() {
    return (
      <>
        <NavBar />
        <PageWrapper data-test-id='home-page'>
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