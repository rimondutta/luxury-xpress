export type ServiceCategory =
  | 'all'
  | 'engine-mechanical'
  | 'tires-wheels'
  | 'body-denting'
  | 'electrical'
  | 'detailing-coating'
  | 'glass-windshield';

export interface Service {
  id: string;
  title: string;
  slug: string;
  category: ServiceCategory;
  description: string;
  shortDescription: string;
  icon: string;         // lucide icon name
  isActive?: boolean;   // alternating red border highlight
  duration?: string;    // e.g. "2-4 hours"
  price?: string;       // e.g. "From $99"
  image?: string;       // placeholder gradient or real asset path
  features?: string[];  // e.g. "Ceramic Coating Services"
  benefits?: { title: string; desc: string; icon: string }[];
  detailedDescription?: string[];
}

export interface FilterTab {
  label: string;
  value: ServiceCategory;
  count: number;
}
