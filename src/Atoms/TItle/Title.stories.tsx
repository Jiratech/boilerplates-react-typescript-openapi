import React from 'react';
import { Title } from '.';

export default {
  component: Title,
  title: 'Title',
  excludeStories: /.*Data$/,
};


export const Default = () => <Title>Title</Title>;