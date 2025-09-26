export interface Artwork {
  id: string;
  title: string;
  artist: string;
  description: string;
  imageUrl: string;
  category: 'drawing' | 'painting' | 'digital' | 'sketch' | 'watercolor';
  likes: number;
  createdAt: string;
  tags: string[];
}

export const mockArtworks: Artwork[] = [
  {
    id: '1',
    title: 'Sunset Dreams',
    artist: 'Alex Chen',
    description: 'A beautiful hand-drawn sunset over mountains, capturing the peaceful essence of nature.',
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
    category: 'drawing',
    likes: 234,
    createdAt: '2024-03-15',
    tags: ['nature', 'sunset', 'mountains', 'peaceful']
  },
  {
    id: '2',
    title: 'Urban Sketches',
    artist: 'Maria Rodriguez',
    description: 'Quick sketches of city life - capturing the hustle and bustle of urban environments.',
    imageUrl: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop',
    category: 'sketch',
    likes: 189,
    createdAt: '2024-03-14',
    tags: ['urban', 'city', 'people', 'street']
  },
  {
    id: '3',
    title: 'Ocean Waves',
    artist: 'David Kim',
    description: 'Watercolor painting of crashing waves, showing the power and beauty of the ocean.',
    imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop',
    category: 'watercolor',
    likes: 312,
    createdAt: '2024-03-13',
    tags: ['ocean', 'waves', 'blue', 'nature']
  },
  {
    id: '4',
    title: 'Portrait Study',
    artist: 'Sarah Johnson',
    description: 'Detailed charcoal portrait focusing on emotional expression and realistic textures.',
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
    category: 'drawing',
    likes: 156,
    createdAt: '2024-03-12',
    tags: ['portrait', 'charcoal', 'realistic', 'emotion']
  },
  {
    id: '5',
    title: 'Digital Fantasy',
    artist: 'Jake Miller',
    description: 'Digital artwork featuring mythical creatures in an enchanted forest setting.',
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
    category: 'digital',
    likes: 445,
    createdAt: '2024-03-11',
    tags: ['fantasy', 'digital', 'creatures', 'forest']
  },
  {
    id: '6',
    title: 'Abstract Colors',
    artist: 'Emma Wilson',
    description: 'Bold abstract painting with vibrant colors expressing joy and energy.',
    imageUrl: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop',
    category: 'painting',
    likes: 278,
    createdAt: '2024-03-10',
    tags: ['abstract', 'colorful', 'energy', 'vibrant']
  }
];