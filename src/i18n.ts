import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationAz from './locales/az/translation.json';
import translationRu from './locales/ru/translation.json';
import translationEn from './locales/en/translation.json';

i18n.use(LanguageDetector).init({
    resources: {
        az: {
            translation: translationAz
        },
        ru: {
            translation: translationRu
        },
        en: {
            translation: translationEn
        }
    },
    lng: localStorage.getItem('az.bhrc.language') || 'az',
    fallbackLng: 'en',
    debug: true,
    nsSeparator: ':::',
    keySeparator: '::',
    interpolation: {
        escapeValue: false,
    },
})