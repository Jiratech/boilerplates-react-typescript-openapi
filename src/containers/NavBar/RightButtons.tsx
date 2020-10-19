import React from 'react';
import styled from 'styled-components/macro';
import DropDown from '../../Atoms/DropDown';
import { languages, themes } from '../../utils/constants';
import { ThemeKeyType } from '../../redux/types/sessionType';
import Button from '../../Atoms/Button';

export interface IProps {
  changeLanguage: (language: string) => void;
  changeTheme: (theme: ThemeKeyType) => void;
  logoutUser: () => void;
  language: string;
  theme: string;
  loggedUser: boolean;
}

export function RightButtons(props: IProps) {
  return (
    <Wrapper>
        <DropDown 
          onChange={props.changeLanguage} 
          options={languages} 
          value={props.language}
        />
        <DropDown 
          onChange={(theme) => props.changeTheme(theme as ThemeKeyType)} 
          options={themes} 
          value={props.theme}
        />
        {props.loggedUser && <Button onClick={props.logoutUser} title={"Logout"} dataTestId="logout-button"/>}

    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  margin-right: -1rem;
`;
