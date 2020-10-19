/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 *   IMPORTANT: This file is used by the internal build
 *   script `extract-intl`, and must use CommonJS module syntax
 *   You CANNOT use import/export in this file.
 */
const addLocaleData = require('react-intl').addLocaleData;
const enLocaleData = require('react-intl/locale-data/en');
const deLocaleData = require('react-intl/locale-data/de');
const roLocaleData = require('react-intl/locale-data/ro');

const enTranslationMessages = require('./translations/en.json');
const deTranslationMessages = require('./translations/de.json');
const roTranslationMessages = require('./translations/ro.json');

addLocaleData(enLocaleData);
addLocaleData(roLocaleData);
addLocaleData(deLocaleData);

export const DEFAULT_LOCALE = 'en';

// prettier-ignore
export const appLocales = [
  'en',
  'ro'
];

export const formatTranslationMessages = (locale: string, messages: { [locale: string]: { [id: string]: string } }): any => {
  const defaultFormattedMessages =
    locale !== DEFAULT_LOCALE
      ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages)
      : {};
  const flattenFormattedMessages = (formattedMessages: any, key: any) => {
    const formattedMessage =
      !messages[key] && locale !== DEFAULT_LOCALE
        ? defaultFormattedMessages[key]
        : messages[key];
    return {...formattedMessages,  [key]: formattedMessage};
  };
  return Object.keys(messages).reduce(flattenFormattedMessages, {});
};

export const translationMessages = {
  us: formatTranslationMessages('en', enTranslationMessages),
  de: formatTranslationMessages('de', deTranslationMessages),
  ro: formatTranslationMessages('ro', roTranslationMessages),
};
