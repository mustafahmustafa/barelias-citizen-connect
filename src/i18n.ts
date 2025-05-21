import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

// Define our translation resources type
export const resources = {
  en: {
    translation: {
      navbar: {
        home: 'Home',
        about: 'About',
        services: 'Services',
        news: 'News',
        events: 'Events',
        report: 'Report',
        contact: 'Contact'
      },
      // Other translations defined in the JSON files
    }
  },
  ar: {
    translation: {
      navbar: {
        home: 'الرئيسية',
        about: 'حول',
        services: 'الخدمات',
        news: 'الأخبار',
        events: 'الفعاليات',
        report: 'الإبلاغ',
        contact: 'اتصل بنا'
      },
      footer: {
        about: 'الموقع الرسمي لبلدية برا إلياس، نخدم مواطنينا وزوارنا بالخدمات البلدية والأخبار والموارد المجتمعية.',
        quickLinks: 'روابط سريعة',
        ourServices: 'خدماتنا',
        contactInfo: 'معلومات الاتصال',
        rights: 'جميع الحقوق محفوظة'
      },
      emergency: 'جهات الاتصال الطارئة',
      search: 'بحث'
      // Other translations defined in the JSON files
    }
  }
};

// Initialize i18next
i18n
  // load translation using http -> see /public/locales
  .use(Backend as any)
  // detect user language
  .use(LanguageDetector as any)
  // pass the i18n instance to react-i18next
  .use(initReactI18next as any)
  // init i18next
  .init({
    resources,               // Use the defined resources
    lng: 'ar',               // Force default to Arabic
    fallbackLng: 'ar',       // Never fall back to English
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
