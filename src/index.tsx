import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import LanguageProvider from './containers/LanguageProvider';
import * as serviceWorker from './serviceWorker';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import store, { history } from './redux/store';
import { translationMessages } from './i18n';
import * as Sentry from '@sentry/react';
import  ThemeProvider from './styles/theme';

process.env.NODE_ENV 
  && process.env.NODE_ENV === 'production'
  && process.env.REACT_APP_SENTRY_DNS 
  && Sentry.init({dsn: process.env.REACT_APP_SENTRY_DNS, release: process.env.REACT_APP_VERSION});

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider>
      <LanguageProvider messages={translationMessages}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </LanguageProvider>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
