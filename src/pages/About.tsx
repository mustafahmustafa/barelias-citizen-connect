
import React from 'react';
import { Users, Target, Heart, Award } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';

interface StructureCard {
  icon: React.ElementType;
  title: string;
  description: string;
}

const About = () => {
  const { t, i18n } = useTranslation();
  
  const structureCards: StructureCard[] = [
    {
      icon: Users,
      title: t('about.structure.mayor.title'),
      description: t('about.structure.mayor.description')
    },
    {
      icon: Target,
      title: t('about.structure.council.title'),
      description: t('about.structure.council.description')
    },
    {
      icon: Heart,
      title: t('about.structure.services.title'),
      description: t('about.structure.services.description')
    },
    {
      icon: Award,
      title: t('about.structure.committees.title'),
      description: t('about.structure.committees.description')
    }
  ];

  const isArabic = i18n.language === 'ar';

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

      {/* Mission Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t('about.mission.title')}</h2>
              <p className="text-lg text-muted-foreground mb-6">
                {t('about.mission.description')}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">15,000+</div>
                  <div className="text-sm text-muted-foreground">{t('about.stats.residents')}</div>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">50+</div>
                  <div className="text-sm text-muted-foreground">{t('about.stats.services')}</div>
                </div>
              </div>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt={t('about.mission.imageAlt')}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Structure Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('about.structure.title')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('about.structure.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {structureCards.map((card, index) => (
              <Card key={index} className="p-6 text-center card-hover">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <card.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                <p className="text-muted-foreground text-sm">{card.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1558618047-b7c4c6209144?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt={t('about.history.imageAlt')}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">{t('about.history.title')}</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>{t('about.history.paragraph1')}</p>
                <p>{t('about.history.paragraph2')}</p>
                <p>{t('about.history.paragraph3')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
