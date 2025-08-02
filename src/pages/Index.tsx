import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ReviewForm } from "@/components/ReviewForm";
import { ReviewList } from "@/components/ReviewList";
import { UserLevel } from "@/components/UserLevel";
import { Footer } from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

interface Review {
  id: string;
  category: string;
  title: string;
  review: string;
  rating: number;
  date: string;
}

const Index = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const { toast } = useToast();

  const handleSubmitReview = (newReview: Omit<Review, 'id' | 'date'>) => {
    const previousLevel = getUserLevel(reviews.length);
    
    const review: Review = {
      ...newReview,
      id: Date.now().toString(),
      date: new Date().toLocaleDateString()
    };
    
    const newReviews = [review, ...reviews];
    setReviews(newReviews);
    
    // Check for level up
    const newLevel = getUserLevel(newReviews.length);
    if (newLevel > previousLevel) {
      toast({
        title: `Level Up! 🎉`,
        description: `Congratulations! You've reached Level ${newLevel}!`,
      });
    }
  };

  const getUserLevel = (reviewCount: number) => {
    if (reviewCount >= 10) return 3;
    if (reviewCount >= 5) return 2;
    return 1;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Left Column */}
          <div className="space-y-8">
            <UserLevel reviewCount={reviews.length} />
            <ReviewForm onSubmitReview={handleSubmitReview} />
          </div>

          {/* Right Column - Reviews List */}
          <div>
            <ReviewList reviews={reviews} />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
