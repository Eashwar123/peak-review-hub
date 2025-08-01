import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

interface Review {
  id: string;
  category: string;
  title: string;
  review: string;
  rating: number;
  date: string;
}

interface ReviewListProps {
  reviews: Review[];
}

export const ReviewList = ({ reviews }: ReviewListProps) => {
  if (reviews.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground text-lg">No reviews yet. Be the first to share your thoughts!</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Recent Reviews</h2>
      
      <div className="grid gap-6">
        {reviews.map((review) => (
          <Card key={review.id} className="p-6 bg-gradient-card border-border">
            
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    {review.category}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{review.date}</span>
                </div>
                <h3 className="text-xl font-semibold">{review.title}</h3>
              </div>
              
              {/* Rating */}
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star}
                    className={`w-4 h-4 ${
                      star <= review.rating 
                        ? 'fill-primary text-primary' 
                        : 'text-muted-foreground'
                    }`}
                  />
                ))}
                <span className="ml-1 text-sm font-medium">{review.rating}/5</span>
              </div>
            </div>

            {/* Review Content */}
            <p className="text-foreground leading-relaxed">{review.review}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};