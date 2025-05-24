
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  // load translation using http -> see /public/locales
  .use(Backend as any)
  // detect user language
  .use(LanguageDetector as any)
  // pass the i18n instance to react-i18next
  .use(initReactI18next as any)
  // init i18next
  .init({
    lng: 'ar',               // Force default to Arabic
    fallbackLng: {
      'en': ['en'],          // English falls back to English only
      'ar': ['ar'],          // Arabic falls back to Arabic only
      'default': ['ar']      // Default fallback is Arabic
    },
    debug: import.meta.env.DEV,
    
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    
    // backend configuration for loading translations
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },

    // Add RTL support for Arabic
    react: { useSuspense: true }
  });

// Log missing translation keys to help identify gaps
i18n.on('missingKey', (lng, ns, key) => {
  console.warn(`Missing translation key: "${key}" in ${lng}/${ns}`);
});

// When language changes, update document direction and language attribute
i18n.on('languageChanged', (lng) => {
  const direction = lng === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.dir = direction;
  document.documentElement.lang = lng;
  
  // Add RTL class for specific RTL styling
  if (lng === 'ar') {
    document.documentElement.classList.add('rtl');
  } else {
    document.documentElement.classList.remove('rtl');
  }
});

// Set initial direction on load
const direction = i18n.language === 'ar' ? 'rtl' : 'ltr';
document.documentElement.dir = direction;
document.documentElement.lang = i18n.language;

if (i18n.language === 'ar') {
  document.documentElement.classList.add('rtl');
}

export default i18n;
