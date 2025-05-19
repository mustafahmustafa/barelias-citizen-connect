
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from 'lucide-react';

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button 
      variant="outline" 
      size="icon" 
      className="rounded-full" 
      onClick={toggleLanguage}
      aria-label={`Switch to ${language === 'en' ? 'Arabic' : 'English'}`}
    >
      <Language className="h-4 w-4" />
      <span className="ml-2 hidden lg:inline">{language === 'en' ? 'عربي' : 'English'}</span>
    </Button>
  );
};

export default LanguageSwitcher;
