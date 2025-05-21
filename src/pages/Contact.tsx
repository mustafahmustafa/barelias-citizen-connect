
import React from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { toast } = useToast();
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: isArabic ? "تم إرسال الرسالة" : "Message Sent",
      description: isArabic ? "شكراً لرسالتك. سنرد عليك في أقرب وقت ممكن." : "Thank you for your message. We will get back to you as soon as possible."
    });
    
    // Reset form
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-24">
        <div className="container-custom">
          <div className={`max-w-3xl ${isArabic ? 'text-right' : ''}`}>
            <h1 className="text-4xl font-bold mb-6">{t('contact.title')}</h1>
            <p className="text-xl opacity-90">
              {t('contact.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className={`lg:col-span-2 ${isArabic ? 'text-right' : ''}`}>
              <h2 className="text-2xl font-semibold mb-6">{t('contact.form.title')}</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t('contact.form.fullName')} <span className="text-red-500">*</span></Label>
                    <Input id="name" placeholder={t('contact.form.fullName')} required className={isArabic ? 'text-right' : ''} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t('contact.form.email')} <span className="text-red-500">*</span></Label>
                    <Input id="email" type="email" placeholder={t('contact.form.email')} required className={isArabic ? 'text-right' : ''} />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">{t('contact.form.phone')}</Label>
                  <Input id="phone" placeholder={t('contact.form.phoneOptional')} className={isArabic ? 'text-right' : ''} />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">{t('contact.form.subject')} <span className="text-red-500">*</span></Label>
                  <Input id="subject" placeholder={t('contact.form.subject')} required className={isArabic ? 'text-right' : ''} />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">{t('contact.form.message')} <span className="text-red-500">*</span></Label>
                  <Textarea 
                    id="message" 
                    placeholder={t('contact.form.messagePlaceholder')} 
                    className={`min-h-[150px] ${isArabic ? 'text-right' : ''}`}
                    required 
                  />
                </div>
                
                <Button type="submit" className={`${isArabic ? 'w-full' : 'w-full sm:w-auto'}`}>
                  <Send className={`${isArabic ? 'ml-2' : 'mr-2'} h-4 w-4`} />
                  {t('contact.form.send')}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className={isArabic ? 'text-right' : ''}>
              <h2 className="text-2xl font-semibold mb-6">{t('contact.info.title')}</h2>
              
              <div className="space-y-6">
                <Card className="p-5">
                  <div className={`flex ${isArabic ? 'flex-row-reverse' : ''}`}>
                    <div className={isArabic ? 'ml-4' : 'mr-4'}>
                      <div className="bg-primary/10 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{t('contact.info.address')}</h3>
                      <address className="not-italic text-muted-foreground">
                        {isArabic ? (
                          <>
                            مبنى البلدية<br />
                            الشارع الرئيسي<br />
                            برالياس، وادي البقاع<br />
                            لبنان
                          </>
                        ) : (
                          <>
                            Municipal Building<br />
                            Main Street<br />
                            Bar Elias, Bekaa Valley<br />
                            Lebanon
                          </>
                        )}
                      </address>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-5">
                  <div className={`flex ${isArabic ? 'flex-row-reverse' : ''}`}>
                    <div className={isArabic ? 'ml-4' : 'mr-4'}>
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{t('contact.info.phones')}</h3>
                      <div className="space-y-1 text-muted-foreground">
                        <p>{isArabic ? 'المكتب الرئيسي:' : 'Main Office:'} +961 (0)8 123 456</p>
                        <p>{isArabic ? 'قسم الخدمات:' : 'Services Department:'} +961 (0)8 123 457</p>
                        <p>{isArabic ? 'الطوارئ:' : 'Emergency:'} +961 (0)8 123 458</p>
                      </div>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-5">
                  <div className={`flex ${isArabic ? 'flex-row-reverse' : ''}`}>
                    <div className={isArabic ? 'ml-4' : 'mr-4'}>
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{t('contact.info.emails')}</h3>
                      <div className="space-y-1 text-muted-foreground">
                        <p>{isArabic ? 'الاستفسارات العامة:' : 'General Inquiries:'} info@barelias-municipality.gov.lb</p>
                        <p>{isArabic ? 'الخدمات:' : 'Services:'} services@barelias-municipality.gov.lb</p>
                        <p>{isArabic ? 'مكتب العمدة:' : 'Mayor\'s Office:'} mayor@barelias-municipality.gov.lb</p>
                      </div>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-5">
                  <div className={`flex ${isArabic ? 'flex-row-reverse' : ''}`}>
                    <div className={isArabic ? 'ml-4' : 'mr-4'}>
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="w-full">
                      <h3 className="font-medium mb-1">{t('contact.info.hours')}</h3>
                      <div className="space-y-1 text-muted-foreground">
                        <div className={`flex justify-between ${isArabic ? 'flex-row-reverse' : ''}`}>
                          <span>{t('contact.info.weekdays')}:</span>
                          <span>8:00 AM - 4:30 PM</span>
                        </div>
                        <div className={`flex justify-between ${isArabic ? 'flex-row-reverse' : ''}`}>
                          <span>{t('contact.info.friday')}:</span>
                          <span>8:00 AM - 2:00 PM</span>
                        </div>
                        <div className={`flex justify-between ${isArabic ? 'flex-row-reverse' : ''}`}>
                          <span>{t('contact.info.weekend')}:</span>
                          <span>{t('contact.info.closed')}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <h2 className={`text-2xl font-semibold mb-6 ${isArabic ? 'text-right' : 'text-center'}`}>{t('contact.map')}</h2>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="aspect-video rounded overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13225.24390754783!2d35.95!3d33.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ebd8ff6523fd3%3A0xb7fb95f251cad78a!2sBar%20Elias%2C%20Lebanon!5e0!3m2!1sen!2sus!4v1621500000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                title={t('about.location.mapTitle')}
                className="rounded"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className={`text-2xl font-semibold mb-12 ${isArabic ? 'text-right' : 'text-center'}`}>{t('contact.departments.title')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Department cards - Would ideally be translated too */}
            <Card className={`p-6 card-hover ${isArabic ? 'text-right' : ''}`}>
              <h3 className="text-xl font-semibold mb-3">{isArabic ? 'خدمات المواطنين' : 'Citizen Services'}</h3>
              <p className="text-muted-foreground mb-4">
                {isArabic 
                  ? 'نقطة الاتصال الأولى للاستفسارات العامة، وطلبات الوثائق، ومساعدة المواطنين.'
                  : 'First point of contact for general inquiries, document requests, and citizen assistance.'
                }
              </p>
              <div className="text-muted-foreground space-y-2">
                <div className={`flex items-center ${isArabic ? 'flex-row-reverse' : ''}`}>
                  <Phone size={16} className={`${isArabic ? 'ml-2' : 'mr-2'} text-primary`} />
                  <span>+961 (0)8 123 460</span>
                </div>
                <div className={`flex items-center ${isArabic ? 'flex-row-reverse' : ''}`}>
                  <Mail size={16} className={`${isArabic ? 'ml-2' : 'mr-2'} text-primary`} />
                  <span>citizens@barelias-municipality.gov.lb</span>
                </div>
              </div>
            </Card>
            
            <Card className={`p-6 card-hover ${isArabic ? 'text-right' : ''}`}>
              <h3 className="text-xl font-semibold mb-3">{isArabic ? 'الأشغال العامة' : 'Public Works'}</h3>
              <p className="text-muted-foreground mb-4">
                {isArabic 
                  ? 'مسؤولة عن صيانة البنية التحتية والطرق والمرافق العامة والمنافع.'
                  : 'Responsible for infrastructure maintenance, roads, public facilities, and utilities.'
                }
              </p>
              <div className="text-muted-foreground space-y-2">
                <div className={`flex items-center ${isArabic ? 'flex-row-reverse' : ''}`}>
                  <Phone size={16} className={`${isArabic ? 'ml-2' : 'mr-2'} text-primary`} />
                  <span>+961 (0)8 123 461</span>
                </div>
                <div className={`flex items-center ${isArabic ? 'flex-row-reverse' : ''}`}>
                  <Mail size={16} className={`${isArabic ? 'ml-2' : 'mr-2'} text-primary`} />
                  <span>works@barelias-municipality.gov.lb</span>
                </div>
              </div>
            </Card>
            
            <Card className={`p-6 card-hover ${isArabic ? 'text-right' : ''}`}>
              <h3 className="text-xl font-semibold mb-3">{isArabic ? 'التصاريح والتراخيص' : 'Permits & Licensing'}</h3>
              <p className="text-muted-foreground mb-4">
                {isArabic 
                  ? 'تتعامل مع طلبات تصاريح البناء، وتراخيص الأعمال، وتصاريح الفعاليات.'
                  : 'Handles applications for building permits, business licenses, and event permissions.'
                }
              </p>
              <div className="text-muted-foreground space-y-2">
                <div className={`flex items-center ${isArabic ? 'flex-row-reverse' : ''}`}>
                  <Phone size={16} className={`${isArabic ? 'ml-2' : 'mr-2'} text-primary`} />
                  <span>+961 (0)8 123 462</span>
                </div>
                <div className={`flex items-center ${isArabic ? 'flex-row-reverse' : ''}`}>
                  <Mail size={16} className={`${isArabic ? 'ml-2' : 'mr-2'} text-primary`} />
                  <span>permits@barelias-municipality.gov.lb</span>
                </div>
              </div>
            </Card>
            
            {/* Add remaining department cards with similar Arabic translations */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
