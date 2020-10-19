/*
 * HomePage Messages
 *
 * This contains all the text for the Login container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.HomePageUser';

export default defineMessages({
  welcomeText: {
    id: `${scope}.welcomeText`,
    defaultMessage: 'Hello user !',
  }
});
