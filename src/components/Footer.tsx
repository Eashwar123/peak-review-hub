import { Film, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Film className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-bold">Peak Media</h3>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              The social platform where film lovers track, rate, and review their favorite movies and TV shows.
            </p>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> for movie lovers
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Discover</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Popular Movies</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Top Rated</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">New Releases</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">TV Shows</a></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold mb-4">Community</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Recent Reviews</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Top Critics</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Film Lists</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Discussions</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Peak Media. A platform for passionate film enthusiasts.
          </p>
        </div>
      </div>
    </footer>
  );
};