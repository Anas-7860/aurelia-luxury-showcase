export interface FragranceNotes {
  top: string[];
  heart: string[];
  base: string[];
}

export interface Product {
  id: string;
  name: string;
  price: number;
  shortDescription: string;
  fullDescription: string;
  category: string;
  image: string;
  fragranceNotes: FragranceNotes;
  longevity: string;
  occasion: string;
}
