import React from 'react';
import { Building, Users, Target, History, Award, MapPin, Map } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">{t('about.title')}</h1>
            <p className="text-xl opacity-90">
              {t('about.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center py-1 px-3 bg-primary-light text-primary rounded-full text-sm font-medium mb-4">
                <History size={16} className="mr-2" />
                <span>{t('about.history.title')}</span>
              </div>
              <h2 className="text-3xl font-semibold mb-4">{t('about.history.heading')}</h2>
              <p className="mb-4 text-lg">
                {t('about.history.intro')}
              </p>
              <p className="mb-4 text-muted-foreground">
                {t('about.history.paragraph1')}
              </p>
              <p className="text-muted-foreground">
                {t('about.history.paragraph2')}
              </p>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-lg h-96">
              <img
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
                alt="Historical view of Bar Elias"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-semibold mb-4">{t('about.mission.title')}</h2>
            <p className="text-muted-foreground">
              {t('about.mission.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 h-full flex flex-col card-hover">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center text-primary mb-6">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-semibold mb-4">{t('about.mission.mission')}</h3>
              <p className="text-muted-foreground">
                {t('about.mission.missionText')}
              </p>
            </Card>
            
            <Card className="p-8 h-full flex flex-col card-hover">
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center text-secondary mb-6">
                <Award size={32} />
              </div>
              <h3 className="text-2xl font-semibold mb-4">{t('about.mission.vision')}</h3>
              <p className="text-muted-foreground">
                {t('about.mission.visionText')}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Organizational Structure */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center py-1 px-3 bg-primary-light text-primary rounded-full text-sm font-medium mb-4">
              <Users size={16} className="mr-2" />
              <span>{t('about.structure.title')}</span>
            </div>
            <h2 className="text-3xl font-semibold mb-4">{t('about.structure.heading')}</h2>
            <p className="text-muted-foreground">
              {t('about.structure.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CardContent className="p-6 border rounded-lg card-hover">
              <h3 className="text-xl font-semibold mb-3">Mayor's Office</h3>
              <p className="text-muted-foreground mb-4">
                Led by our elected Mayor, this office provides executive leadership and coordinates 
                all municipal activities and services.
              </p>
              <div className="mt-4">
                <h4 className="font-medium">Key Personnel:</h4>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>• Hassan Mahmoud - Mayor</li>
                  <li>• Layla Khoury - Chief of Staff</li>
                </ul>
              </div>
            </CardContent>
            
            <CardContent className="p-6 border rounded-lg card-hover">
              <h3 className="text-xl font-semibold mb-3">Municipal Council</h3>
              <p className="text-muted-foreground mb-4">
                Our legislative body consists of elected representatives who make decisions on 
                policies, budgets, and development plans.
              </p>
              <div className="mt-4">
                <h4 className="font-medium">Key Personnel:</h4>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>• Council President & 12 Council Members</li>
                  <li>• Three specialized committees</li>
                </ul>
              </div>
            </CardContent>
            
            <CardContent className="p-6 border rounded-lg card-hover">
              <h3 className="text-xl font-semibold mb-3">Administrative Services</h3>
              <p className="text-muted-foreground mb-4">
                Responsible for day-to-day operations, including finance, human resources, 
                and information technology.
              </p>
              <div className="mt-4">
                <h4 className="font-medium">Key Personnel:</h4>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>• Administrative Director</li>
                  <li>• Finance & HR Managers</li>
                </ul>
              </div>
            </CardContent>
            
            <CardContent className="p-6 border rounded-lg card-hover">
              <h3 className="text-xl font-semibold mb-3">Public Works</h3>
              <p className="text-muted-foreground mb-4">
                Oversees infrastructure development and maintenance, including roads, 
                water systems, and public spaces.
              </p>
              <div className="mt-4">
                <h4 className="font-medium">Key Personnel:</h4>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>• Director of Public Works</li>
                  <li>• Engineering & Maintenance Teams</li>
                </ul>
              </div>
            </CardContent>
            
            <CardContent className="p-6 border rounded-lg card-hover">
              <h3 className="text-xl font-semibold mb-3">Community Services</h3>
              <p className="text-muted-foreground mb-4">
                Manages social programs, cultural activities, and community engagement 
                initiatives to enhance quality of life.
              </p>
              <div className="mt-4">
                <h4 className="font-medium">Key Personnel:</h4>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>• Community Services Director</li>
                  <li>• Program Coordinators</li>
                </ul>
              </div>
            </CardContent>
            
            <CardContent className="p-6 border rounded-lg card-hover">
              <h3 className="text-xl font-semibold mb-3">Planning & Development</h3>
              <p className="text-muted-foreground mb-4">
                Responsible for urban planning, zoning, and building permits to ensure 
                sustainable development.
              </p>
              <div className="mt-4">
                <h4 className="font-medium">Key Personnel:</h4>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>• Planning Director</li>
                  <li>• Urban Planners & Inspectors</li>
                </ul>
              </div>
            </CardContent>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center py-1 px-3 bg-primary-light text-primary rounded-full text-sm font-medium mb-4">
              <MapPin size={16} className="mr-2" />
              <span>{t('about.location.title')}</span>
            </div>
            <h2 className="text-3xl font-semibold mb-4">{t('about.location.heading')}</h2>
            <p className="text-muted-foreground">
              {t('about.location.subtitle')}
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="aspect-video rounded overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13225.24390754783!2d35.95!3d33.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ebd8ff6523fd3%3A0xb7fb95f251cad78a!2sBar%20Elias%2C%20Lebanon!5e0!3m2!1sen!2sus!4v1621500000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                title="Map of Bar Elias"
                className="rounded"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
