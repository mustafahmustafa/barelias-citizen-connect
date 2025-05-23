
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, MapPin, Mail, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t, i18n } = useTranslation();

  // Bottom footer links that need translation
  const bottomLinks = [
    { key: 'privacy', en: 'Privacy Policy', ar: 'سياسة الخصوصية', path: '/privacy' },
    { key: 'terms', en: 'Terms of Use', ar: 'شروط الاستخدام', path: '/terms' },
    { key: 'accessibility', en: 'Accessibility', ar: 'إمكانية الوصول', path: '/accessibility' }
  ];

  // Contact info that needs translation
  const contactInfo = {
    address: {
      en: 'Municipal Building, Bar Elias, Bekaa, Lebanon',
      ar: 'مبنى البلدية، برالياس، البقاع، لبنان'
    },
    phone: '+961 (0)8 123 456',
    email: 'info@barelias-municipality.gov.lb'
  };

  const isArabic = i18n.language === 'ar';

  return (
    <footer className="bg-[#1a2942] text-white">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* About Column */}
          <div>
            <h3 className={`font-${isArabic ? 'arabic' : 'montserrat'} font-bold text-xl mb-4`}>
              {isArabic ? 'بر الياس' : 'Bar Elias'}
            </h3>
            <p className="text-gray-300 mb-4">
              {t('footer.about')}
            </p>
            <div className={`flex ${isArabic ? 'space-x-reverse' : ''} space-x-3`}>
              <a href="https://facebook.com" className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook size={18} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://twitter.com" className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter size={18} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://instagram.com" className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram size={18} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className={`text-lg font-${isArabic ? 'arabic' : 'semibold'} mb-5`}>{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  {t('navbar.home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  {t('navbar.about')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  {t('navbar.services')}
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-300 hover:text-white transition-colors">
                  {t('navbar.news')}
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-300 hover:text-white transition-colors">
                  {t('navbar.events')}
                </Link>
              </li>
              <li>
                <Link to="/report" className="text-gray-300 hover:text-white transition-colors">
                  {t('navbar.report')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  {t('navbar.contact')}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className={`text-lg font-${isArabic ? 'arabic' : 'semibold'} mb-5`}>{t('footer.contactInfo')}</h3>
            <ul className="space-y-4">
              <li className={`flex items-start ${isArabic ? 'flex-row-reverse text-right' : ''} space-x-3`}>
                <MapPin size={20} className={`shrink-0 text-gray-300 mt-1 ${isArabic ? 'mx-3' : ''}`} />
                <span className="text-gray-300">
                  {isArabic ? contactInfo.address.ar : contactInfo.address.en}
                </span>
              </li>
              <li className={`flex items-center ${isArabic ? 'flex-row-reverse text-right' : ''} space-x-3`}>
                <Phone size={20} className={`shrink-0 text-gray-300 ${isArabic ? 'mx-3' : ''}`} />
                <span className="text-gray-300" dir="ltr">{contactInfo.phone}</span>
              </li>
              <li className={`flex items-center ${isArabic ? 'flex-row-reverse text-right' : ''} space-x-3`}>
                <Mail size={20} className={`shrink-0 text-gray-300 ${isArabic ? 'mx-3' : ''}`} />
                <span className="text-gray-300">{contactInfo.email}</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="pt-6 border-t border-gray-700">
          <div className={`flex flex-col md:flex-row md:justify-between items-center ${isArabic ? 'md:flex-row-reverse' : ''}`}>
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              {isArabic 
                ? `بلدية برالياس. جميع الحقوق محفوظة © ${currentYear}`
                : `© ${currentYear} Municipality of Bar Elias. ${t('footer.rights')}`
              }
            </p>
            <div className={`flex ${isArabic ? 'space-x-reverse' : ''} text-sm text-gray-400`}>
              {bottomLinks.map((link, index) => (
                <React.Fragment key={link.key}>
                  <Link 
                    to={link.path} 
                    className="hover:text-white transition-colors"
                  >
                    {isArabic ? link.ar : link.en}
                  </Link>
                  {index < bottomLinks.length - 1 && (
                    <span className="mx-3 text-gray-500">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
