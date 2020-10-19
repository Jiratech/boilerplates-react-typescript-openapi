import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, object } from '@storybook/addon-knobs'
import Button from '.';

export default {
  component: Button,
  title: 'Button',
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const actionsData = {
  onClick: action('onButtonClick'),
};

export const buttonData = {
  title: 'Button',
  onClick: action('onButtonClick'),
  isLoading: false,
};

export const Default = () => <Button {...object('IButtonProps', {...buttonData})}/>;

export const Loading = () => <Button title={'Button'} {...actionsData} isLoading={true}/>;