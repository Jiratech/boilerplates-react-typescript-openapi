import React from 'react';
import { withKnobs, object } from '@storybook/addon-knobs'
import UserList from './';

export default {
  component: UserList,
  title: 'UserList',
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const userData = {
    usersList: [{email: 'user1@gmail.com'}, {email: 'user2@gmail.com'}, {email: 'user3@gmail.com'}]
};

export const Default = () => <UserList {...object('IButtonProps', {...userData})}/>;
export const Empty = () => <UserList {...object('IButtonProps', {usersList: []})}/>;
