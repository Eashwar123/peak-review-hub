import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star } from "lucide-react";

interface Review {
  id: string;
  category: string;
  title: string;
  review: string;
  rating: number;
  date: string;
}

interface ReviewFormProps {
  onSubmitReview: (review: Omit<Review, 'id' | 'date'>) => void;
}

export const ReviewForm = ({ onSubmitReview }: ReviewFormProps) => {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const categories = [
    "Movie",
    "TV Show",
    "Book",
    "Podcast",
    "Video Game",
    "Documentary",
    "Album/Music"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!category || !title || !review || rating === 0) {
      return;
    }

    onSubmitReview({
      category,
      title,
      review,
      rating
    });

    // Reset form
    setCategory("");
    setTitle("");
    setReview("");
    setRating(0);
  };

  return (
    <Card className="p-6 bg-gradient-card border-border">
      <h2 className="text-2xl font-bold mb-6">Add Your Review</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Category Selection */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Media Category</label>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="bg-secondary/50 border-border">
              <SelectValue placeholder="Select a category..." />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat}>{cat}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Title Input */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Title</label>
          <Input 
            placeholder="Enter the name of the movie, book, show, etc."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-secondary/50 border-border focus:border-primary"
          />
        </div>

        {/* Rating */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Your Rating</label>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star 
                key={star}
                className={`w-6 h-6 cursor-pointer transition-colors ${
                  star <= (hoverRating || rating) 
                    ? 'fill-primary text-primary' 
                    : 'text-muted-foreground hover:text-primary'
                }`}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                onClick={() => setRating(star)}
              />
            ))}
            <span className="ml-2 text-sm text-muted-foreground">
              {rating > 0 ? `${rating} star${rating !== 1 ? 's' : ''}` : 'Click to rate'}
            </span>
          </div>
        </div>

        {/* Review Text */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Your Review</label>
          <Textarea 
            placeholder="What did you think? Share your thoughts..."
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="bg-secondary/50 border-border focus:border-primary min-h-32"
          />
        </div>

        {/* Submit Button */}
        <Button 
          type="submit" 
          variant="hero" 
          className="w-full"
          disabled={!category || !title || !review || rating === 0}
        >
          Post Review
        </Button>
      </form>
    </Card>
  );
};