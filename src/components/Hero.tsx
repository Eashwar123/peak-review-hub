import { Button } from "@/components/ui/button";
import { Star, MessageCircle, Film } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative py-20 bg-gradient-hero flex items-center justify-center text-center px-4 overflow-hidden">
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-3xl mx-auto z-10">
        
        {/* Main hero text */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Share Your Media
            <br />
            <span className="text-primary">Reviews & Ratings</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Simple platform to review movies, TV shows, books, and more. Share what you love and discover great recommendations.
          </p>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-lg mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-2">
              <Star className="w-5 h-5 text-primary" />
              <span className="text-lg font-bold">Rate</span>
            </div>
            <p className="text-sm text-muted-foreground">Give your rating</p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-2">
              <MessageCircle className="w-5 h-5 text-primary" />
              <span className="text-lg font-bold">Review</span>
            </div>
            <p className="text-sm text-muted-foreground">Share your thoughts</p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-2">
              <Film className="w-5 h-5 text-primary" />
              <span className="text-lg font-bold">Discover</span>
            </div>
            <p className="text-sm text-muted-foreground">Find new favorites</p>
          </div>
        </div>
      </div>
    </section>
  );
};