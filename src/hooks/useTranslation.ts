
import { useTranslation as useI18nTranslation } from 'react-i18next';
import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect } from 'react';

export const useTranslation = () => {
  const { language, direction } = useLanguage();
  const { t, i18n } = useI18nTranslation();
  
  // Apply the appropriate font family based on language and set language direction
  useEffect(() => {
    if (language === 'ar') {
      document.body.classList.add('font-arabic');
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
      if (i18n.language !== 'ar') {
        i18n.changeLanguage('ar');
      }
    } else {
      document.body.classList.remove('font-arabic');
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = 'en';
      if (i18n.language !== 'en') {
        i18n.changeLanguage('en');
      }
    }
  }, [language, i18n]);
  
  return { t, language, direction };
};
