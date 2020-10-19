import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, object } from '@storybook/addon-knobs'
import DropDown from '.';

export default {
  component: DropDown,
  title: 'DropDown',
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const actionsData = {
  onChange: action('onDropdownChange'),
};

export const dropDownData = {
  disabled: false,
  options: [{ value: 'en', label: 'English' }, { value: 'ro', label: 'Romana' }],
  value: 'ro'
};

export const Default = () => <DropDown {...object('IButtonProps', { ...dropDownData })} {...actionsData} />;
export const Disabled = () => <DropDown {...object('IButtonProps', { ...dropDownData, disabled: true })} {...actionsData} />;
export const Empty = () => <DropDown {...object('IButtonProps', { disabled: false, value: 'ro', options: [] })} {...actionsData} />;
