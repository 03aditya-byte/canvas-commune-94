import { useState } from "react";
import { Header } from "@/components/Header";
import { ArtworkCard } from "@/components/ArtworkCard";
import { ArtworkModal } from "@/components/ArtworkModal";
import { LoginModal } from "@/components/LoginModal";
import { UploadModal } from "@/components/UploadModal";
import { Footer } from "@/components/Footer";
import { mockArtworks, Artwork } from "@/data/mockArtworks";

const Index = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showUpload, setShowUpload] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header 
        onOpenLogin={() => setShowLogin(true)}
        onOpenUpload={() => setShowUpload(true)}
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Discover Amazing{" "}
              <span className="bg-gradient-to-r from-gallery-accent to-gallery-accent/70 bg-clip-text text-transparent">
                Artworks
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Explore a curated collection of stunning hand-drawn artworks, paintings, and digital masterpieces from talented artists around the world.
            </p>
            <div className="flex items-center justify-center gap-4 pt-4">
              <button 
                onClick={() => setShowLogin(true)}
                className="bg-gallery-accent hover:bg-gallery-accent/90 text-gallery-accent-foreground px-8 py-3 rounded-lg font-medium transition-all hover:scale-105"
              >
                Join Our Community
              </button>
              <button 
                onClick={() => setShowUpload(true)}
                className="border border-gallery-accent text-gallery-accent hover:bg-gallery-accent hover:text-gallery-accent-foreground px-8 py-3 rounded-lg font-medium transition-all hover:scale-105"
              >
                Share Your Art
              </button>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gallery-accent/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gallery-accent/5 rounded-full blur-2xl animate-pulse delay-1000" />
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Artworks</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse through our collection of amazing artworks created by passionate artists
            </p>
          </div>

          {/* Artwork Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockArtworks.map((artwork, index) => (
              <div key={artwork.id} style={{ animationDelay: `${index * 100}ms` }}>
                <ArtworkCard 
                  artwork={artwork}
                  onView={setSelectedArtwork}
                />
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-secondary hover:bg-secondary/80 text-secondary-foreground px-8 py-3 rounded-lg font-medium transition-all hover:scale-105">
              Load More Artworks
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-gallery-accent">2.5K+</div>
              <div className="text-muted-foreground">Artworks</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-gallery-accent">500+</div>
              <div className="text-muted-foreground">Artists</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-gallery-accent">15K+</div>
              <div className="text-muted-foreground">Likes</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-gallery-accent">200+</div>
              <div className="text-muted-foreground">Daily Uploads</div>
            </div>
          </div>
        </div>
      </section>

      {/* Modals */}
      <ArtworkModal 
        artwork={selectedArtwork}
        open={!!selectedArtwork}
        onClose={() => setSelectedArtwork(null)}
      />
      
      <LoginModal 
        open={showLogin}
        onClose={() => setShowLogin(false)}
      />
      
      <UploadModal 
        open={showUpload}
        onClose={() => setShowUpload(false)}
      />

      <Footer />
    </div>
  );
};

export default Index;
