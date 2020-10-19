import * as React from 'react';
import { IStateProps, IProps } from './';
import { IntlProvider } from 'react-intl';

export default class LanguageProvider extends React.Component<IStateProps & IProps, {}> {
    render() {
      const language = this.props.language ? this.props.language : 'en';
     return (
       <IntlProvider
         locale={language}
         key={language}
         messages={this.props.messages[language]}
       >
         {React.Children.only(this.props.children)}
       </IntlProvider>
     );
   }
 }