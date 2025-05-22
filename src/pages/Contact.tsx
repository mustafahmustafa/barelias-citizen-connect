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
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent",
      description: "Thank you for your message. We will get back to you as soon as possible."
    });
    
    // Reset form
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
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
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold mb-6">{t('contact.form.title')}</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t('contact.form.fullName')} <span className="text-red-500">*</span></Label>
                    <Input id="name" placeholder={t('contact.form.fullName')} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t('contact.form.email')} <span className="text-red-500">*</span></Label>
                    <Input id="email" type="email" placeholder={t('contact.form.email')} required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">{t('contact.form.phone')}</Label>
                  <Input id="phone" placeholder={t('contact.form.phoneOptional')} />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">{t('contact.form.subject')} <span className="text-red-500">*</span></Label>
                  <Input id="subject" placeholder={t('contact.form.subject')} required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">{t('contact.form.message')} <span className="text-red-500">*</span></Label>
                  <Textarea 
                    id="message" 
                    placeholder={t('contact.form.messagePlaceholder')} 
                    className="min-h-[150px]"
                    required 
                  />
                </div>
                
                <Button type="submit" className="w-full sm:w-auto">
                  <Send className="mr-2 h-4 w-4" />
                  {t('contact.form.send')}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">{t('contact.info.title')}</h2>
              
              <div className="space-y-6">
                <Card className="p-5">
                  <div className="flex">
                    <div className="mr-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{t('contact.info.address')}</h3>
                      <address className="not-italic text-muted-foreground">
                        Municipal Building<br />
                        Main Street<br />
                        Bar Elias, Bekaa Valley<br />
                        Lebanon
                      </address>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-5">
                  <div className="flex">
                    <div className="mr-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{t('contact.info.phones')}</h3>
                      <div className="space-y-1 text-muted-foreground">
                        <p>Main Office: +961 (0)8 123 456</p>
                        <p>Services Department: +961 (0)8 123 457</p>
                        <p>Emergency: +961 (0)8 123 458</p>
                      </div>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-5">
                  <div className="flex">
                    <div className="mr-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{t('contact.info.emails')}</h3>
                      <div className="space-y-1 text-muted-foreground">
                        <p>General Inquiries: info@barelias-municipality.gov.lb</p>
                        <p>Services: services@barelias-municipality.gov.lb</p>
                        <p>Mayor's Office: mayor@barelias-municipality.gov.lb</p>
                      </div>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-5">
                  <div className="flex">
                    <div className="mr-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{t('contact.info.hours')}</h3>
                      <div className="space-y-1 text-muted-foreground">
                        <div className="flex justify-between">
                          <span>{t('contact.info.weekdays')}:</span>
                          <span>8:00 AM - 4:30 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>{t('contact.info.friday')}:</span>
                          <span>8:00 AM - 2:00 PM</span>
                        </div>
                        <div className="flex justify-between">
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
          <h2 className="text-2xl font-semibold mb-6 text-center">{t('contact.map')}</h2>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="aspect-video rounded overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13225.24390754783!2d35.95!3d33.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ebd8ff6523fd3%3A0xb7fb95f251cad78a!2sBar%20Elias%2C%20Lebanon!5e0!3m2!1sen!2sus!4v1621500000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                title="Map of Bar Elias Municipality"
                className="rounded"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-2xl font-semibold mb-12 text-center">{t('contact.departments.title')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 card-hover">
              <h3 className="text-xl font-semibold mb-3">Citizen Services</h3>
              <p className="text-muted-foreground mb-4">
                First point of contact for general inquiries, document requests, and citizen assistance.
              </p>
              <div className="text-muted-foreground space-y-2">
                <div className="flex items-center">
                  <Phone size={16} className="mr-2 text-primary" />
                  <span>+961 (0)8 123 460</span>
                </div>
                <div className="flex items-center">
                  <Mail size={16} className="mr-2 text-primary" />
                  <span>citizens@barelias-municipality.gov.lb</span>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 card-hover">
              <h3 className="text-xl font-semibold mb-3">Public Works</h3>
              <p className="text-muted-foreground mb-4">
                Responsible for infrastructure maintenance, roads, public facilities, and utilities.
              </p>
              <div className="text-muted-foreground space-y-2">
                <div className="flex items-center">
                  <Phone size={16} className="mr-2 text-primary" />
                  <span>+961 (0)8 123 461</span>
                </div>
                <div className="flex items-center">
                  <Mail size={16} className="mr-2 text-primary" />
                  <span>works@barelias-municipality.gov.lb</span>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 card-hover">
              <h3 className="text-xl font-semibold mb-3">Permits & Licensing</h3>
              <p className="text-muted-foreground mb-4">
                Handles applications for building permits, business licenses, and event permissions.
              </p>
              <div className="text-muted-foreground space-y-2">
                <div className="flex items-center">
                  <Phone size={16} className="mr-2 text-primary" />
                  <span>+961 (0)8 123 462</span>
                </div>
                <div className="flex items-center">
                  <Mail size={16} className="mr-2 text-primary" />
                  <span>permits@barelias-municipality.gov.lb</span>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 card-hover">
              <h3 className="text-xl font-semibold mb-3">Finance Department</h3>
              <p className="text-muted-foreground mb-4">
                Manages municipal finances, tax collection, payments, and financial inquiries.
              </p>
              <div className="text-muted-foreground space-y-2">
                <div className="flex items-center">
                  <Phone size={16} className="mr-2 text-primary" />
                  <span>+961 (0)8 123 463</span>
                </div>
                <div className="flex items-center">
                  <Mail size={16} className="mr-2 text-primary" />
                  <span>finance@barelias-municipality.gov.lb</span>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 card-hover">
              <h3 className="text-xl font-semibold mb-3">Community Development</h3>
              <p className="text-muted-foreground mb-4">
                Coordinates community programs, events, youth activities, and volunteer initiatives.
              </p>
              <div className="text-muted-foreground space-y-2">
                <div className="flex items-center">
                  <Phone size={16} className="mr-2 text-primary" />
                  <span>+961 (0)8 123 464</span>
                </div>
                <div className="flex items-center">
                  <Mail size={16} className="mr-2 text-primary" />
                  <span>community@barelias-municipality.gov.lb</span>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 card-hover">
              <h3 className="text-xl font-semibold mb-3">Environmental Affairs</h3>
              <p className="text-muted-foreground mb-4">
                Oversees environmental programs, waste management, and sustainability initiatives.
              </p>
              <div className="text-muted-foreground space-y-2">
                <div className="flex items-center">
                  <Phone size={16} className="mr-2 text-primary" />
                  <span>+961 (0)8 123 465</span>
                </div>
                <div className="flex items-center">
                  <Mail size={16} className="mr-2 text-primary" />
                  <span>environment@barelias-municipality.gov.lb</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
