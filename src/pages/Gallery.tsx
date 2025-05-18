
import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Film } from 'lucide-react';
import { Card } from '@/components/ui/card';

// Using the same media gallery data as in GalleryItem.tsx
const mediaGallery = [
  {
    id: 1,
    type: "image",
    thumbnail: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    type: "image",
    thumbnail: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    type: "image",
    thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    type: "image",
    thumbnail: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    type: "video",
    thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    type: "image",
    thumbnail: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  // Adding more items for a fuller gallery
  {
    id: 7,
    type: "image",
    thumbnail: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 8,
    type: "image",
    thumbnail: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 9,
    type: "video",
    thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  }
];

const Gallery = () => {
  return (
    <div className="py-16">
      <div className="container-custom">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Media Gallery</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {mediaGallery.map((item) => (
            <Link to={`/gallery/${item.id}`} key={item.id}>
              <Card className="overflow-hidden h-60 card-hover">
                <div className="relative w-full h-full">
                  <img 
                    src={item.thumbnail} 
                    alt="Gallery media" 
                    className="w-full h-full object-cover"
                  />
                  
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-black/50 flex items-center justify-center">
                        <Film className="text-white" size={20} />
                      </div>
                    </div>
                  )}
                  
                  <div className="absolute top-2 right-2">
                    {item.type === "image" ? (
                      <div className="bg-black/70 text-white rounded-full p-1.5">
                        <Image size={14} />
                      </div>
                    ) : (
                      <div className="bg-black/70 text-white rounded-full p-1.5">
                        <Film size={14} />
                      </div>
                    )}
                  </div>
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
