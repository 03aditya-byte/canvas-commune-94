import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Share2, Download, Calendar, Tag } from "lucide-react";
import { Artwork } from "@/data/mockArtworks";
import { useState } from "react";

interface ArtworkModalProps {
  artwork: Artwork | null;
  open: boolean;
  onClose: () => void;
}

export const ArtworkModal = ({ artwork, open, onClose }: ArtworkModalProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(artwork?.likes || 0);

  if (!artwork) return null;

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(prev => isLiked ? prev - 1 : prev + 1);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(`Check out "${artwork.title}" by ${artwork.artist}!`);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-2">{artwork.title}</DialogTitle>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Image */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src={artwork.imageUrl} 
                alt={artwork.title}
                className="w-full h-auto object-contain max-h-96"
              />
            </div>
            
            {/* Action Buttons */}
            <div className="flex justify-center space-x-2">
              <Button
                variant="outline"
                onClick={handleLike}
                className={`gap-2 ${isLiked ? 'text-red-500 border-red-500' : ''}`}
              >
                <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                {likes} Likes
              </Button>
              <Button variant="outline" onClick={handleShare} className="gap-2">
                <Share2 className="w-4 h-4" />
                Share
              </Button>
              <Button variant="outline" className="gap-2">
                <Download className="w-4 h-4" />
                Save
              </Button>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Artist</h3>
              <p className="text-lg text-gallery-accent font-medium">{artwork.artist}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Description</h3>
              <p className="text-muted-foreground leading-relaxed">{artwork.description}</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  {new Date(artwork.createdAt).toLocaleDateString()}
                </span>
              </div>
              <Badge 
                variant="secondary"
                className="capitalize"
              >
                {artwork.category}
              </Badge>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <Tag className="w-4 h-4 text-muted-foreground" />
                <h3 className="font-semibold">Tags</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {artwork.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <Button 
                className="w-full bg-gallery-accent hover:bg-gallery-accent/90 text-gallery-accent-foreground"
                size="lg"
              >
                Follow Artist
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};