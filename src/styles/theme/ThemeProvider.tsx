import React from 'react';
import { ThemeProvider as OriginalThemeProvider } from 'styled-components';
import { IStateProps, IProps } from '.';
import { themes } from './themes';

export default class ThemeProvider extends React.Component<IStateProps & IProps, {}> {

  getTheme = () => {
    const { theme } = this.props;
    if (theme === 'system') {
      const isSystemDark = window?.matchMedia
        ? window.matchMedia('(prefers-color-scheme: dark)')?.matches
        : undefined;
      return isSystemDark ? themes.dark : themes.light;
    } else {
      return theme === 'dark' ? themes.dark : themes.light;
    }
  }

  render() {
    const theme = this.getTheme();
    return (
      <OriginalThemeProvider theme={theme}>
        {React.Children.only(this.props.children)}
      </OriginalThemeProvider>
    );
  }
};
