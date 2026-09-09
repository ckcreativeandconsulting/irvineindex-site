export type Category = {
  name: string;
  slug: string;
  description: string;
};

export type Listing = {
  name: string;
  slug: string;
  category: string;
  description: string;
  neighborhood: string;
  phone: string;
  website: string;
  hours: string;
  featured: boolean;
};
