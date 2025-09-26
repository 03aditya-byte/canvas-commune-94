import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Upload, User, Search, Menu } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  onOpenLogin: () => void;
  onOpenUpload: () => void;
}

export const Header = ({ onOpenLogin, onOpenUpload }: HeaderProps) => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', label: 'All Artworks' },
    { id: 'drawing', label: 'Drawings' },
    { id: 'painting', label: 'Paintings' },
    { id: 'digital', label: 'Digital Art' },
    { id: 'sketch', label: 'Sketches' },
    { id: 'watercolor', label: 'Watercolor' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4">
        {/* Top Navigation */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-gallery-accent to-gallery-accent/70 rounded-lg flex items-center justify-center">
              <Heart className="w-4 h-4 text-gallery-accent-foreground" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-gallery-accent to-gallery-accent/70 bg-clip-text text-transparent">
              ArtVault
            </h1>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <input 
                type="text" 
                placeholder="Search artworks..." 
                className="pl-10 pr-4 py-2 rounded-lg border bg-background/50 w-64 focus:outline-none focus:ring-2 focus:ring-gallery-accent/50"
              />
            </div>
            <Button variant="outline" onClick={onOpenUpload} className="gap-2">
              <Upload className="w-4 h-4" />
              Upload Art
            </Button>
            <Button onClick={onOpenLogin} className="gap-2 bg-gallery-accent hover:bg-gallery-accent/90 text-gallery-accent-foreground">
              <User className="w-4 h-4" />
              Login
            </Button>
          </div>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-4 h-4" />
          </Button>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Badge
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`cursor-pointer transition-all hover:scale-105 ${
                activeCategory === category.id 
                  ? "bg-gallery-accent text-gallery-accent-foreground" 
                  : "hover:bg-gallery-card-hover"
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </Badge>
          ))}
        </div>
      </div>
    </header>
  );
};