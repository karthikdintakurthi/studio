"use client"

import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps';
import { useState, type FC } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from './ui/button';
import { X } from 'lucide-react';

type Story = {
  name: string;
  location: string;
  story: string;
  swap: string;
  position: {
    lat: number;
    lng: number;
  };
  fallback: string;
};

type StoriesMapProps = {
  stories: Story[];
};

export const StoriesMap: FC<StoriesMapProps> = ({ stories }) => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);

  if (!apiKey) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-muted p-4 text-center text-destructive">
        Google Maps API Key is missing. Please add it to your .env file to display the map.
      </div>
    );
  }

  const mapCenter = { lat: 39.8283, lng: -98.5795 }; // Center of US

  return (
    <APIProvider apiKey={apiKey}>
      <div className="relative h-full w-full">
        <Map
          defaultCenter={mapCenter}
          defaultZoom={4}
          gestureHandling={'greedy'}
          disableDefaultUI={true}
          mapId={'shift-stories-map'}
          style={{ width: '100%', height: '100%' }}
        >
          {stories.map((story) => (
            <AdvancedMarker
              key={story.name}
              position={story.position}
              onClick={() => setSelectedStory(story)}
            >
              <button className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary-foreground bg-primary shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                <span className="text-sm font-bold text-primary-foreground">
                  {story.fallback || story.name.substring(0, 1)}
                </span>
                <span className="sr-only">{`View story from ${story.name}`}</span>
              </button>
            </AdvancedMarker>
          ))}
        </Map>

        {selectedStory && (
          <div className="absolute bottom-4 left-1/2 w-11/12 max-w-sm -translate-x-1/2 transform animate-in fade-in-0 slide-in-from-bottom-5 duration-500">
            <Card className="relative shadow-2xl">
              <CardContent className="flex flex-col items-start gap-3 p-4">
                <Badge variant="outline" className="border-accent text-accent-foreground">{selectedStory.swap}</Badge>
                <p className="text-sm text-foreground/80">"{selectedStory.story}"</p>
                <div className="flex w-full items-center gap-4 border-t pt-3">
                  <div>
                    <p className="font-semibold">{selectedStory.name}</p>
                    <p className="text-sm text-foreground/70">{selectedStory.location}</p>
                  </div>
                </div>
              </CardContent>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setSelectedStory(null)} 
                className="absolute top-2 right-2 h-7 w-7 rounded-full"
              >
                  <X className="h-4 w-4" />
                  <span className="sr-only">Close story details</span>
              </Button>
            </Card>
          </div>
        )}
      </div>
    </APIProvider>
  );
}
