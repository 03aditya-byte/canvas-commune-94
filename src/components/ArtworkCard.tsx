import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Eye, Share2 } from "lucide-react";
import { Artwork } from "@/data/mockArtworks";
import { useState } from "react";

interface ArtworkCardProps {
  artwork: Artwork;
  onView: (artwork: Artwork) => void;
}

export const ArtworkCard = ({ artwork, onView }: ArtworkCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(artwork.likes);

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
    setLikes(prev => isLiked ? prev - 1 : prev + 1);
  };

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Mock share functionality
    navigator.clipboard.writeText(`Check out "${artwork.title}" by ${artwork.artist}!`);
  };

  return (
    <Card className="group cursor-pointer overflow-hidden bg-card hover:bg-gallery-card-hover transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in-up">
      <div className="relative overflow-hidden" onClick={() => onView(artwork)}>
        <img 
          src={artwork.imageUrl} 
          alt={artwork.title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
        
        {/* Category Badge */}
        <Badge 
          className="absolute top-3 left-3 bg-background/90 text-foreground hover:bg-background"
          variant="secondary"
        >
          {artwork.category}
        </Badge>

        {/* Action Buttons */}
        <div className="absolute top-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button 
            size="sm" 
            variant="secondary"
            className="bg-background/90 hover:bg-background"
            onClick={handleShare}
          >
            <Share2 className="w-3 h-3" />
          </Button>
        </div>

        {/* Quick View Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button 
            variant="secondary"
            className="bg-background/90 hover:bg-background gap-2"
          >
            <Eye className="w-4 h-4" />
            View Details
          </Button>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-1 group-hover:text-gallery-accent transition-colors">
              {artwork.title}
            </h3>
            <p className="text-muted-foreground text-sm">by {artwork.artist}</p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleLike}
            className={`gap-1 ${isLiked ? 'text-red-500 hover:text-red-600' : 'text-muted-foreground hover:text-red-500'}`}
          >
            <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
            {likes}
          </Button>
        </div>

        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {artwork.description}
        </p>

        <div className="flex flex-wrap gap-1">
          {artwork.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              #{tag}
            </Badge>
          ))}
          {artwork.tags.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{artwork.tags.length - 3}
            </Badge>
          )}
        </div>
      </div>
    </Card>
  );
};