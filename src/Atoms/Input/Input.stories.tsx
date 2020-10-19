import React from 'react';
import { action } from '@storybook/addon-actions';

import Input from './Input';

export default {
  component: Input,
  title: 'Input',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const actionsData = {
  onChange: action('onInputChange'),
};

export const Default = () => <Input value="input" name="email" {...actionsData}/>;

export const Readonly = () => <Input value="disabled" name="email" {...actionsData} disabled={true}/>;