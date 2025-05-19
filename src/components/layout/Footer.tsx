
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, MapPin, Mail, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="bg-[#1a2942] text-white">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Column */}
          <div>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-sm">BE</span>
              </div>
              <h3 className="font-montserrat font-bold text-xl">Bar Elias</h3>
            </div>
            <p className="text-gray-300 mb-4">
              {t('footer.about')}
            </p>
            <div className="flex space-x-3">
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
            <h3 className="text-lg font-semibold mb-5">{t('footer.quickLinks')}</h3>
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
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-5">{t('footer.ourServices')}</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Utilities Bills
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Permits & Licenses
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Infrastructure
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Community Programs
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Business Services
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-5">{t('footer.contactInfo')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="shrink-0 text-gray-300 mt-1" />
                <span className="text-gray-300">
                  Municipal Building, Main Street, Bar Elias, Bekaa Valley, Lebanon
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="shrink-0 text-gray-300" />
                <span className="text-gray-300">+961 (0)8 123 456</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="shrink-0 text-gray-300" />
                <span className="text-gray-300">info@barelias-municipality.gov.lb</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="pt-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Municipality of Bar Elias. {t('footer.rights')}
            </p>
            <div className="flex space-x-4 text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
              <Link to="/accessibility" className="hover:text-white transition-colors">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
