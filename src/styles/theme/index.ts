import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectTheme } from '../../redux/selectors/sessionSelector';
import ThemeProvider from './ThemeProvider';

export interface IStateProps {
  theme: string;
}

export interface IProps {
  children: React.ReactChild;
}

const mapStateToProps = createStructuredSelector({
  theme: selectTheme(),
});

export default connect<IStateProps>(
  mapStateToProps,
  {},
)(ThemeProvider);
