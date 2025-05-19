
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  
  const toggleLanguage = () => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
  };

  return (
    <Button 
      variant="outline" 
      size="icon" 
      className="rounded-full"
      onClick={toggleLanguage}
      title={i18n.language === 'ar' ? 'English' : 'العربية'}
    >
      <Globe className="h-4 w-4" />
      <span className="sr-only">
        {i18n.language === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
      </span>
    </Button>
  );
};

export default LanguageSwitcher;
