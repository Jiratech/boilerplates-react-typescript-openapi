import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectLanguage } from '../../redux/selectors/sessionSelector';
import LanguageProvider from './LanguageProvider';

export interface IStateProps {
  language: string | null;
}

export interface IProps {
  messages: { [locale: string]: { [id: string]: string } };
  children?: React.ReactNode;
}

const mapStateToProps = createStructuredSelector({
  language: selectLanguage(),
});

export default connect<IStateProps>(
  mapStateToProps,
  {},
)(LanguageProvider);
