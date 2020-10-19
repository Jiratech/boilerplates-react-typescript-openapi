import React from "react";
import { ThemeProvider } from 'styled-components'
import { themes } from './theme/themes'

const StylesDecorator = (storyFn: any) => (
  <ThemeProvider theme={themes.dark}>{storyFn()}</ThemeProvider>
);

export default StylesDecorator