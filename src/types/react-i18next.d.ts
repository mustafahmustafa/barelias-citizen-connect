import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// remove the language detector and backend entirely if you’re bundling JSON
import { resources } from './locales/resources';  // your merged en/ar, but we’ll never use en

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ar: { translation: resources.ar }   // only load Arabic
    },
    lng: 'ar',                    // force Arabic
    fallbackLng: 'ar',            // never fall back to anything else
    supportedLngs: ['ar'],        // drop English
    debug: import.meta.env.DEV,
    interpolation: { escapeValue: false },
    react: { useSuspense: true }
  });

export default i18n;
