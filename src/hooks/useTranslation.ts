
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/locales/translations';
import { useEffect } from 'react';

export const useTranslation = () => {
  const { language, direction } = useLanguage();
  
  // Apply the appropriate font family based on language
  useEffect(() => {
    if (language === 'ar') {
      document.body.classList.add('font-arabic');
    } else {
      document.body.classList.remove('font-arabic');
    }
  }, [language]);
  
  const t = (key: string) => {
    // Split by dots for nested keys
    const keys = key.split('.');
    let translation: any = translations[language];
    
    // Navigate through nested objects if needed
    for (const k of keys) {
      if (translation && typeof translation === 'object' && k in translation) {
        translation = translation[k];
      } else {
        // If key doesn't exist in current language, try English as fallback
        if (language !== 'en') {
          let englishTranslation: any = translations['en'];
          for (const ek of keys) {
            if (englishTranslation && typeof englishTranslation === 'object' && ek in englishTranslation) {
              englishTranslation = englishTranslation[ek];
            } else {
              return key; // If not found in English either, return the key itself
            }
          }
          return englishTranslation;
        }
        return key; // If not found and already in English, return the key itself
      }
    }
    
    return translation;
  };
  
  return { t, language, direction };
};
