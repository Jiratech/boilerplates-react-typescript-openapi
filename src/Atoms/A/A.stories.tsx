import React from 'react';
import { A } from '.';

export default {
  component: A,
  title: 'A',
  excludeStories: /.*Data$/,
};

export const AData = {
  text: 'Click here',
};

export const Default = () => <A>{AData.text}</A>;
