
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';

// Enhanced media gallery data with locations
const mediaGallery = [
  {
    id: 1,
    type: "image",
    location: "Madinah",
    thumbnail: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    type: "image",
    location: "Riyadh",
    thumbnail: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    type: "image",
    location: "Jeddah",
    thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    type: "image",
    location: "Abha",
    thumbnail: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    type: "video",
    location: "Riyadh",
    thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    type: "image",
    location: "Aseer",
    thumbnail: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 7,
    type: "image",
    location: "Riyadh",
    thumbnail: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 8,
    type: "image",
    location: "Madinah",
    thumbnail: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 9,
    type: "video",
    location: "Jeddah",
    thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  }
];

const Gallery = () => {
  return (
    <div className="py-16">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Visual Assets</h1>
            <p className="text-muted-foreground">
              Explore our media library and discover 2000+ visuals for your marketing and promotions
            </p>
          </div>
          <Link to="/gallery" className="text-primary hover:underline">
            View All
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {mediaGallery.map((item) => (
            <Link to={`/gallery/${item.id}`} key={item.id}>
              <Card className="overflow-hidden h-60 card-hover group">
                <div className="relative w-full h-full">
                  <img 
                    src={item.thumbnail} 
                    alt={`Gallery media from ${item.location}`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Location Badge removed */}
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
