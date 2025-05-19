
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const LanguageSwitcher = () => {
  const { language, toggleLanguage, direction } = useLanguage();
  const { t } = useTranslation();

  return (
    <Button 
      variant="outline" 
      size="icon" 
      className={`rounded-full ${language === 'ar' ? 'font-arabic' : ''}`}
      onClick={toggleLanguage}
      aria-label={language === 'en' ? 'التبديل إلى العربية' : 'Switch to English'}
      dir={direction}
    >
      <Globe className="h-4 w-4" />
      <span className={`ml-2 hidden lg:inline ${language === 'ar' ? 'mr-2 ml-0' : ''}`}>
        {language === 'en' ? 'عربي' : 'English'}
      </span>
    </Button>
  );
};

export default LanguageSwitcher;
