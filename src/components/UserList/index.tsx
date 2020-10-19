import React from 'react';
import { IUser } from 'Learning/src/openApi';
import { P } from '../../Atoms/P';

export type IProps = {
  usersList: IUser[],
  dataTestId?: string,
}

export default function UserList(props: IProps) {
  if (props.usersList.length > 0) {
    return (
      <ul>
        {props.usersList.map((user: any) => <li key={user.email}><P>{user.email}</P></li>)}
      </ul>
    )
  }

  return (<P>no users found</P>)
}

