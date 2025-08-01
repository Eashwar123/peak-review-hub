import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, User, Film } from "lucide-react";
import { Input } from "@/components/ui/input";

export const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Film className="w-8 h-8 text-primary" />
            <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Peak Media
            </h1>
          </div>

          {/* Search */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                placeholder="Search movies, TV shows..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-secondary/50 border-border focus:border-primary"
              />
            </div>
          </div>

          {/* User actions */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm">
              <User className="w-4 h-4" />
              Sign In
            </Button>
            <Button variant="hero" size="sm">
              Join Peak Media
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};