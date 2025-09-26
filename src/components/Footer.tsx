import { Heart, Palette, Instagram, Twitter, Facebook } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-gallery-accent to-gallery-accent/70 rounded-lg flex items-center justify-center">
                <Heart className="w-4 h-4 text-gallery-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold">ArtVault</h3>
            </div>
            <p className="text-muted-foreground">
              Discover and share amazing artworks from talented artists worldwide.
            </p>
            <div className="flex space-x-3">
              <div className="w-8 h-8 bg-background rounded-full flex items-center justify-center cursor-pointer hover:bg-gallery-accent hover:text-gallery-accent-foreground transition-colors">
                <Instagram className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 bg-background rounded-full flex items-center justify-center cursor-pointer hover:bg-gallery-accent hover:text-gallery-accent-foreground transition-colors">
                <Twitter className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 bg-background rounded-full flex items-center justify-center cursor-pointer hover:bg-gallery-accent hover:text-gallery-accent-foreground transition-colors">
                <Facebook className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Explore */}
          <div className="space-y-4">
            <h4 className="font-semibold">Explore</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-foreground cursor-pointer transition-colors">Featured</li>
              <li className="hover:text-foreground cursor-pointer transition-colors">Categories</li>
              <li className="hover:text-foreground cursor-pointer transition-colors">Top Artists</li>
              <li className="hover:text-foreground cursor-pointer transition-colors">New Uploads</li>
            </ul>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h4 className="font-semibold">Community</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-foreground cursor-pointer transition-colors">Join Artists</li>
              <li className="hover:text-foreground cursor-pointer transition-colors">Guidelines</li>
              <li className="hover:text-foreground cursor-pointer transition-colors">Support</li>
              <li className="hover:text-foreground cursor-pointer transition-colors">Blog</li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold">Resources</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-foreground cursor-pointer transition-colors">Help Center</li>
              <li className="hover:text-foreground cursor-pointer transition-colors">Privacy Policy</li>
              <li className="hover:text-foreground cursor-pointer transition-colors">Terms of Service</li>
              <li className="hover:text-foreground cursor-pointer transition-colors">Contact</li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p className="flex items-center justify-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> for artists everywhere
          </p>
          <p className="mt-2">© 2024 ArtVault. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};