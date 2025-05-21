// src/pages/about.tsx
import React from 'react';
import {
  Building,
  Users,
  Target,
  History,
  Award,
  MapPin,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';

type StructureCard = {
  title: string;
  description: string;
  personnel: string[];
};

const About: React.FC = () => {
  const { t } = useTranslation();

  // pull an array of cards from translations
  const structureCards: StructureCard[] = t('about.structure.cards', {
    returnObjects: true,
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">{t('about.title')}</h1>
            <p className="text-xl opacity-90">{t('about.subtitle')}</p>
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
              <h2 className="text-3xl font-semibold mb-4">
                {t('about.history.heading')}
              </h2>
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
                alt={t('about.history.imageAlt')}
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
            <h2 className="text-3xl font-semibold mb-4">
              {t('about.mission.title')}
            </h2>
            <p className="text-muted-foreground">
              {t('about.mission.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 h-full flex flex-col card-hover">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center text-primary mb-6">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                {t('about.mission.mission')}
              </h3>
              <p className="text-muted-foreground">
                {t('about.mission.missionText')}
              </p>
            </Card>

            <Card className="p-8 h-full flex flex-col card-hover">
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center text-secondary mb-6">
                <Award size={32} />
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                {t('about.mission.vision')}
              </h3>
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
            <h2 className="text-3xl font-semibold mb-4">
              {t('about.structure.heading')}
            </h2>
            <p className="text-muted-foreground">
              {t('about.structure.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {structureCards.map((card, idx) => (
              <CardContent key={idx} className="p-6 border rounded-lg card-hover">
                <h3 className="text-xl font-semibold mb-3">
                  {card.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {card.description}
                </p>
                <div className="mt-4">
                  <h4 className="font-medium">
                    {t('about.structure.keyPersonnel')}
                  </h4>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    {card.personnel.map((person, i) => (
                      <li key={i}>• {person}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            ))}
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
            <h2 className="text-3xl font-semibold mb-4">
              {t('about.location.heading')}
            </h2>
            <p className="text-muted-foreground">
              {t('about.location.subtitle')}
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="aspect-video rounded overflow-hidden">
              <iframe
                src={t('about.location.mapUrl')}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title={t('about.location.mapTitle')}
                className="rounded"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
