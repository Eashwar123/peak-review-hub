import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ReviewForm } from "@/components/ReviewForm";
import { ReviewList } from "@/components/ReviewList";
import { Footer } from "@/components/Footer";

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

  const handleSubmitReview = (newReview: Omit<Review, 'id' | 'date'>) => {
    const review: Review = {
      ...newReview,
      id: Date.now().toString(),
      date: new Date().toLocaleDateString()
    };
    setReviews([review, ...reviews]);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Review Form */}
          <div>
            <ReviewForm onSubmitReview={handleSubmitReview} />
          </div>

          {/* Reviews List */}
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
