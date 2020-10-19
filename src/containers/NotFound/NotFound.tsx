import React from 'react';
import { PageWrapper } from '../../Atoms/PageWrapper';
import { Title } from '../../Atoms/TItle';
import { P } from '../../Atoms/P';

export default class NotFound extends React.Component {
  render() {
    return (
      <PageWrapper>
          <Title id='not-found-title'>404</Title>
          <P>Page not found !</P>
      </PageWrapper>
    );
  }
}
