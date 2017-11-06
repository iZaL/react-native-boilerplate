import React from 'react';
import {I18nManager} from 'react-native';
import I18n from 'react-native-i18n';

I18n.fallbacks = false;
I18n.defaultLocale = 'en';
I18n.locale = I18nManager.isRTL ? 'ar' : 'en';

I18n.translations = {
  en: require('../assets/translations/en.json'),
  ar: require('../assets/translations/ar.json'),
};

export const isRTL = I18nManager.isRTL;
export default I18n;
