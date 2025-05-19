
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/locales/translations';

export const useTranslation = () => {
  const { language } = useLanguage();
  
  const t = (key: string) => {
    // Split by dots for nested keys
    const keys = key.split('.');
    let translation = translations[language];
    
    // Navigate through nested objects if needed
    for (const k of keys) {
      if (translation && k in translation) {
        translation = translation[k];
      } else {
        // Fallback to English or return the key itself
        const englishTranslation = translations['en'];
        for (const ek of keys) {
          if (englishTranslation && ek in englishTranslation) {
            return englishTranslation[ek];
          }
        }
        return key;
      }
    }
    
    return translation;
  };
  
  return { t, language };
};
