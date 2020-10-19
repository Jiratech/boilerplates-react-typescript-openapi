import React from 'react';
import styled from 'styled-components/macro';
import { Logo } from './Logo';
import { StyleConstants } from '../../styles/StyleConstants';
import { RightButtons } from './RightButtons';
import { PageWrapper } from '../../Atoms/PageWrapper';
import { IStateProps } from '.';

export default class NavBar extends React.Component<IStateProps, {}> {
  render() {
    return (
      <Wrapper>
        <PageWrapper>
          <Logo />
          <RightButtons 
            changeLanguage={this.props.changeLanguage} 
            language={this.props.language || 'en'}
            changeTheme={this.props.changeTheme}
            theme={this.props.theme}
            logoutUser={this.props.logoutUser}
            loggedUser={this.props.accessToken !== null && this.props.accessToken !== ''}
          />
        </PageWrapper>
      </Wrapper>
    );
  }
}

const Wrapper = styled.header`
  box-shadow: 0 1px 0 0 ${p => p.theme.borderLight};
  height: ${StyleConstants.NAV_BAR_HEIGHT};
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${p => p.theme.background};
  z-index: 2;

  @supports (backdrop-filter: blur(10px)) {
    backdrop-filter: blur(10px);
    background-color: ${p =>
      p.theme.background.replace(
        /rgba?(\(\s*\d+\s*,\s*\d+\s*,\s*\d+)(?:\s*,.+?)?\)/,
        'rgba$1,0.75)',
      )};
  }

  ${PageWrapper} {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  }
`;
