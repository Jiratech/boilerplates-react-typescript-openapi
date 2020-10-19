/*
 * HomePage Messages
 *
 * This contains all the text for the Login container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.LoginPage';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Login page',
  },
  register: {
    id: `${scope}.register`,
    defaultMessage: 'Register',
  }
});
