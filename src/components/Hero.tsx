import { Button } from "@/components/ui/button";
import { Star, Users, Film } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[600px] bg-gradient-hero flex items-center justify-center text-center px-4 overflow-hidden">
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto z-10">
        
        {/* Main hero text */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Track films you've watched.
            <br />
            <span className="text-primary">Save those you want to see.</span>
            <br />
            Tell your friends what's good.
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            The social network for film lovers. Join thousands of movie enthusiasts sharing their thoughts and discovering their next favorite film.
          </p>
        </div>

        {/* CTA Button */}
        <div className="mb-12">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4 h-auto">
            Get started — it's free!
          </Button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 text-center">
          <div className="flex items-center gap-2">
            <Film className="w-5 h-5 text-primary" />
            <span className="text-muted-foreground">Also available on</span>
            <div className="flex gap-2">
              <div className="w-6 h-6 bg-muted rounded opacity-60"></div>
              <div className="w-6 h-6 bg-muted rounded opacity-60"></div>
            </div>
          </div>
        </div>

        {/* Community stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-2">
              <Star className="w-5 h-5 text-primary" />
              <span className="text-2xl font-bold">4.8</span>
            </div>
            <p className="text-sm text-muted-foreground">Average Rating</p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-2">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-2xl font-bold">50K+</span>
            </div>
            <p className="text-sm text-muted-foreground">Active Users</p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-2">
              <Film className="w-5 h-5 text-primary" />
              <span className="text-2xl font-bold">100K+</span>
            </div>
            <p className="text-sm text-muted-foreground">Reviews Posted</p>
          </div>
        </div>
      </div>
    </section>
  );
};