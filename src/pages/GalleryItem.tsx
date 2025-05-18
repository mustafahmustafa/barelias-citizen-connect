
import React, { useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Play, MapPin } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

// Enhanced media gallery data with locations
const mediaGallery = [
  {
    id: 1,
    title: "Town Center Renovation Project",
    type: "image",
    location: "Madinah",
    thumbnail: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    fullImage: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    description: "Progress on the town center renovation project",
    date: "May 10, 2025"
  },
  {
    id: 2,
    title: "New Municipal Building Opening",
    type: "image",
    location: "Riyadh",
    thumbnail: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    fullImage: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    description: "The grand opening of our new municipal building",
    date: "May 5, 2025"
  },
  {
    id: 3,
    title: "Infrastructure Improvement Works",
    type: "image",
    location: "Jeddah",
    thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    fullImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", 
    description: "Ongoing infrastructure improvements in Bar Elias",
    date: "April 28, 2025"
  },
  {
    id: 4,
    title: "Public Parks and Green Spaces",
    type: "image",
    location: "Abha",
    thumbnail: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    fullImage: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    description: "Our town's beautiful parks and green spaces",
    date: "April 20, 2025"
  },
  {
    id: 5,
    title: "Town Hall Meeting Highlights",
    type: "video",
    location: "Riyadh",
    thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    fullImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    description: "Highlights from our recent town hall meeting",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder for demo
    date: "April 15, 2025"
  },
  {
    id: 6,
    title: "Community Festival",
    type: "image",
    location: "Aseer",
    thumbnail: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    fullImage: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    description: "Scenes from our annual community festival",
    date: "April 10, 2025"
  },
  {
    id: 7,
    title: "Mountain View Landscape",
    type: "image",
    location: "Riyadh",
    thumbnail: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    fullImage: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    description: "Beautiful landscape view of the mountains",
    date: "April 5, 2025"
  },
  {
    id: 8,
    title: "Historical Site Restoration",
    type: "image",
    location: "Madinah",
    thumbnail: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    fullImage: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    description: "Progress on the restoration of local historical sites",
    date: "March 28, 2025"
  },
  {
    id: 9,
    title: "Cultural Exchange Program",
    type: "video",
    location: "Jeddah",
    thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    fullImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    description: "Highlights from our recent cultural exchange program",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder for demo
    date: "March 20, 2025"
  }
];

const GalleryItem = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const itemId = parseInt(id || "0");
  
  const currentItem = useMemo(() => {
    return mediaGallery.find(item => item.id === itemId);
  }, [itemId]);

  const currentIndex = useMemo(() => {
    return mediaGallery.findIndex(item => item.id === itemId);
  }, [itemId]);

  const handlePrevious = () => {
    const prevIndex = (currentIndex - 1 + mediaGallery.length) % mediaGallery.length;
    navigate(`/gallery/${mediaGallery[prevIndex].id}`);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % mediaGallery.length;
    navigate(`/gallery/${mediaGallery[nextIndex].id}`);
  };

  if (!currentItem) {
    return (
      <div className="container-custom py-16 text-center">
        <h1 className="text-2xl mb-4">Media not found</h1>
        <Button asChild>
          <Link to="/gallery">Back to Gallery</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="py-16">
      <div className="container-custom">
        <div className="mb-6 flex items-center justify-between">
          <Button variant="outline" asChild>
            <Link to="/gallery">
              <ChevronLeft className="mr-2" size={16} /> Back to Gallery
            </Link>
          </Button>
          <div className="flex space-x-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handlePrevious}
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handleNext}
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>

        <div className="bg-white border rounded-lg shadow-lg overflow-hidden">
          <div className="relative w-full">
            {currentItem.type === "image" ? (
              <AspectRatio ratio={16 / 9} className="bg-muted">
                <img 
                  src={currentItem.fullImage || currentItem.thumbnail} 
                  alt={currentItem.title}
                  className="w-full h-full object-cover" 
                />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white rounded-full px-3 py-1.5 flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {currentItem.location}
                </div>
              </AspectRatio>
            ) : (
              <AspectRatio ratio={16 / 9} className="bg-black">
                {currentItem.videoUrl ? (
                  <iframe
                    src={currentItem.videoUrl}
                    title={currentItem.title}
                    className="w-full h-full"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <div className="flex items-center justify-center w-full h-full">
                    <div className="flex flex-col items-center text-white">
                      <Play size={48} />
                      <p className="mt-2">Video not available</p>
                    </div>
                  </div>
                )}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white rounded-full px-3 py-1.5 flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {currentItem.location}
                </div>
              </AspectRatio>
            )}
          </div>
          
          <div className="p-6">
            <h1 className="text-2xl font-semibold mb-2">{currentItem.title}</h1>
            <p className="text-sm text-muted-foreground mb-4">{currentItem.date}</p>
            <p className="text-muted-foreground">{currentItem.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;
