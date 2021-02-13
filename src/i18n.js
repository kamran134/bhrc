import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(LanguageDetector).init({
    resources: {
        az: {
            translation: {
                'THIS IS HEADER!!!': 'BU HİDERDİR!!!',
                'This is FOOTER!': 'Bu FUTERDİR!',
                'Main': 'Əsas',
                'About us': 'Haqqımızda'
            }
        },
        ru: {
            translation: {
                'THIS IS HEADER!!!': 'ЭТО ХИДЕР!!!',
                'This is FOOTER!': 'Это ФУТЕР!',
                'Main': 'Главная',
                'About us': 'О нас'
            }
        },
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