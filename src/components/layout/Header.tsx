
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LanguageSwitcher';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-header py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <NavLink to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">BE</span>
          </div>
          <div>
            <h1 className="font-montserrat font-bold text-primary text-xl">Bar Elias</h1>
            <p className="text-xs text-muted-foreground">Municipality Portal</p>
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          <NavLink 
            to="/" 
            className={({isActive}) => 
              `px-3 py-2 rounded-md transition-colors ${
                isActive ? 'text-primary font-medium' : 'text-foreground hover:text-primary'
              }`
            }
            end
          >
            {t('navbar.home')}
          </NavLink>
          <NavLink 
            to="/about" 
            className={({isActive}) => 
              `px-3 py-2 rounded-md transition-colors ${
                isActive ? 'text-primary font-medium' : 'text-foreground hover:text-primary'
              }`
            }
          >
            {t('navbar.about')}
          </NavLink>
          <NavLink 
            to="/services" 
            className={({isActive}) => 
              `px-3 py-2 rounded-md transition-colors ${
                isActive ? 'text-primary font-medium' : 'text-foreground hover:text-primary'
              }`
            }
          >
            {t('navbar.services')}
          </NavLink>
          <NavLink 
            to="/news" 
            className={({isActive}) => 
              `px-3 py-2 rounded-md transition-colors ${
                isActive ? 'text-primary font-medium' : 'text-foreground hover:text-primary'
              }`
            }
          >
            {t('navbar.news')}
          </NavLink>
          <NavLink 
            to="/events" 
            className={({isActive}) => 
              `px-3 py-2 rounded-md transition-colors ${
                isActive ? 'text-primary font-medium' : 'text-foreground hover:text-primary'
              }`
            }
          >
            {t('navbar.events')}
          </NavLink>
          <NavLink 
            to="/report" 
            className={({isActive}) => 
              `px-3 py-2 rounded-md transition-colors ${
                isActive ? 'text-primary font-medium' : 'text-foreground hover:text-primary'
              }`
            }
          >
            {t('navbar.report')}
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({isActive}) => 
              `px-3 py-2 rounded-md transition-colors ${
                isActive ? 'text-primary font-medium' : 'text-foreground hover:text-primary'
              }`
            }
          >
            {t('navbar.contact')}
          </NavLink>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center space-x-4">
          <LanguageSwitcher />
          <Button variant="outline" size="icon" className="rounded-full">
            <Search className="h-4 w-4" />
            <span className="sr-only">{t('search')}</span>
          </Button>
          <Button className="bg-secondary hover:bg-secondary-hover">
            {t('emergency')}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center space-x-2">
          <LanguageSwitcher />
          <button 
            onClick={toggleMobileMenu} 
            className="p-2 rounded-md"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-primary" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 animate-fade-in">
          <div className="container-custom py-4 flex flex-col">
            <NavLink 
              to="/" 
              className={({isActive}) => 
                `px-3 py-3 rounded-md transition-colors ${
                  isActive ? 'bg-primary-light text-primary font-medium' : 'text-foreground'
                }`
              }
              onClick={() => setMobileMenuOpen(false)}
              end
            >
              {t('navbar.home')}
            </NavLink>
            <NavLink 
              to="/about" 
              className={({isActive}) => 
                `px-3 py-3 rounded-md transition-colors ${
                  isActive ? 'bg-primary-light text-primary font-medium' : 'text-foreground'
                }`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('navbar.about')}
            </NavLink>
            <NavLink 
              to="/services" 
              className={({isActive}) => 
                `px-3 py-3 rounded-md transition-colors ${
                  isActive ? 'bg-primary-light text-primary font-medium' : 'text-foreground'
                }`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('navbar.services')}
            </NavLink>
            <NavLink 
              to="/news" 
              className={({isActive}) => 
                `px-3 py-3 rounded-md transition-colors ${
                  isActive ? 'bg-primary-light text-primary font-medium' : 'text-foreground'
                }`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('navbar.news')}
            </NavLink>
            <NavLink 
              to="/events" 
              className={({isActive}) => 
                `px-3 py-3 rounded-md transition-colors ${
                  isActive ? 'bg-primary-light text-primary font-medium' : 'text-foreground'
                }`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('navbar.events')}
            </NavLink>
            <NavLink 
              to="/report" 
              className={({isActive}) => 
                `px-3 py-3 rounded-md transition-colors ${
                  isActive ? 'bg-primary-light text-primary font-medium' : 'text-foreground'
                }`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('navbar.report')}
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({isActive}) => 
                `px-3 py-3 rounded-md transition-colors ${
                  isActive ? 'bg-primary-light text-primary font-medium' : 'text-foreground'
                }`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('navbar.contact')}
            </NavLink>
            
            <div className="flex mt-4 space-x-2">
              <Button className="bg-secondary hover:bg-secondary-hover flex-1">
                {t('emergency')}
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Search className="h-4 w-4" />
                <span className="sr-only">{t('search')}</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
