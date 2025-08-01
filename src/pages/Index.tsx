import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MediaGrid } from "@/components/MediaGrid";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <MediaGrid 
        title="Popular This Week" 
        subtitle="Discover what the community is watching and loving right now"
      />
      <MediaGrid 
        title="Recently Reviewed" 
        subtitle="Fresh takes from our community of film enthusiasts"
      />
      <Footer />
    </div>
  );
};

export default Index;
