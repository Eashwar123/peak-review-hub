import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Heart, MessageCircle } from "lucide-react";

interface MediaCardProps {
  id: number;
  title: string;
  poster: string;
  year: number;
  genre: string;
  rating: number;
  reviewCount: number;
  userRating?: number;
  onRate?: (rating: number) => void;
  onReview?: () => void;
}

export const MediaCard = ({ 
  title, 
  poster, 
  year, 
  genre, 
  rating, 
  reviewCount,
  userRating,
  onRate,
  onReview 
}: MediaCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [userHover, setUserHover] = useState(0);

  const handleStarClick = (starRating: number) => {
    onRate?.(starRating);
  };

  return (
    <Card 
      className="group relative bg-gradient-card border-border hover:border-primary/30 transition-all duration-300 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-[2/3] relative overflow-hidden">
        <img 
          src={poster} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay on hover */}
        <div className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-all duration-300 flex flex-col justify-end p-4 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          
          {/* Quick rating */}
          <div className="flex items-center gap-1 mb-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star 
                key={star}
                className={`w-5 h-5 cursor-pointer transition-colors ${
                  star <= (userHover || userRating || 0) 
                    ? 'fill-primary text-primary' 
                    : 'text-muted-foreground hover:text-primary'
                }`}
                onMouseEnter={() => setUserHover(star)}
                onMouseLeave={() => setUserHover(0)}
                onClick={() => handleStarClick(star)}
              />
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex gap-2">
            <Button 
              variant="hero" 
              size="sm" 
              className="flex-1"
              onClick={onReview}
            >
              <MessageCircle className="w-4 h-4" />
              Review
            </Button>
            <Button variant="secondary" size="sm">
              <Heart className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Card info */}
      <div className="p-4">
        <h3 className="font-semibold text-foreground mb-1 truncate">{title}</h3>
        <p className="text-sm text-muted-foreground mb-2">{year} • {genre}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-primary text-primary" />
            <span className="text-sm font-medium">{rating.toFixed(1)}</span>
          </div>
          <span className="text-xs text-muted-foreground">{reviewCount} reviews</span>
        </div>
      </div>
    </Card>
  );
};