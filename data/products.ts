import type { Product } from "../types/product";

export const products: Product[] = [
  {
    id: "nocturne-extrait",
    name: "Nocturne Extrait",
    price: 320,
    shortDescription:
      "An ink-dark extrait where smoked tea folds into black vanilla.",
    fullDescription:
      "Nocturne Extrait is composed for rooms lit only by reflection. Uplifted by bergamot and smoked tea, the fragrance settles into a dense accord of black vanilla, cedar and slow-burning resins. It is quiet, but it occupies the air long after you leave.",
    category: "Extrait de Parfum",
    image: "/images/noir-absolu.jpeg",
    fragranceNotes: {
      top: ["Italian bergamot", "Smoked black tea", "Pink pepper"],
      heart: ["Osmanthus", "Blackcurrant leaf", "Iris concrete"],
      base: ["Madagascar vanilla", "Cedarwood", "Labdanum", "Birch tar"],
    },
    longevity: "10–12 hours",
    occasion: "Winter evenings, private gatherings, late studio work",
  },
  {
    id: "ivory-veil",
    name: "Ivory Veil",
    price: 265,
    shortDescription:
      "A pale floral musk that clings to linen and memory.",
    fullDescription:
      "Ivory Veil is an ode to restrained intimacy. Sheer petals, clean musks and a trace of ambrette seed create the sensation of sun-warmed fabric and skin. It never shouts, yet it is unmistakably present.",
    category: "Eau de Parfum",
    image: "/images/floral.jpeg",
    fragranceNotes: {
      top: ["Pear skin", "Aldehydes", "Ambrette seed"],
      heart: ["Jasmine petals", "Hedione", "Orange blossom"],
      base: ["Cashmere woods", "White musk", "Ambroxan"],
    },
    longevity: "8–10 hours",
    occasion: "Daylight rituals, gallery visits, quiet celebrations",
  },
  {
    id: "palais-dor",
    name: "Palais d'Or",
    price: 345,
    shortDescription:
      "Sun on carved wood, saffron dust and honeyed resins.",
    fullDescription:
      "Palais d'Or captures the stillness of a grand hall at dusk. Saffron threads and dried citrus peel rest on a structure of polished woods and ambered resins. The result is luminous yet solemn, with a gilded depth on skin.",
    category: "Parfum",
    image: "/images/velvet-dusk.jpeg",
    fragranceNotes: {
      top: ["Saffron", "Dried mandarin", "Cardamom"],
      heart: ["Rose absolute", "Cedarwood", "Olibanum"],
      base: ["Amber accord", "Oakwood", "Honeyed labdanum"],
    },
    longevity: "9–11 hours",
    occasion: "Formal evenings, winter salons, ceremonial dinners",
  },
  {
    id: "silent-amber",
    name: "Silent Amber",
    price: 280,
    shortDescription:
      "Salted amber and incense wrapped in cool mineral air.",
    fullDescription:
      "Silent Amber studies contrast: warmth and stone, resin and air. A salted amber accord is lifted by mineral notes and dry incense, giving an architectural impression that feels both ancient and deliberate.",
    category: "Eau de Parfum",
    image: "/images/sel-marin.jpeg",
    fragranceNotes: {
      top: ["Grapefruit zest", "Mineral accord", "Juniper"],
      heart: ["Somalian frankincense", "Angelica", "Cypress"],
      base: ["Ambergris accord", "Guaiac wood", "Musk"],
    },
    longevity: "7–9 hours",
    occasion: "Architectural visits, shoreline walks, late afternoon meetings",
  },
  {
    id: "ink-reserve",
    name: "Ink Reserve",
    price: 295,
    shortDescription:
      "Violet leaf, cedar shavings and the cool calm of ink.",
    fullDescription:
      "Ink Reserve recalls the solitude of a writing desk. Sharp violet leaf and metallic aldehydes settle into a composed structure of cedar shavings, vetiver and a trace of black leather, leaving a precise, linear trail.",
    category: "Parfum",
    image: "/images/cuir-ottoman.jpeg",
    fragranceNotes: {
      top: ["Violet leaf", "Metallic aldehydes", "Bergamot"],
      heart: ["Iris", "Elemi", "Galbanum"],
      base: ["Cedar shavings", "Vetiver", "Black leather"],
    },
    longevity: "8–10 hours",
    occasion: "Studios, boardrooms, nights spent revising work",
  },
  {
    id: "lumen-sable",
    name: "Lumen Sable",
    price: 310,
    shortDescription:
      "Dry sandalwood, toasted seeds and late citrus.",
    fullDescription:
      "Lumen Sable is a dry, radiant sandalwood built without sweetness. Toasted sesame, amber seeds and pared-back citrus create a veil of light over a dense, meditative base.",
    category: "Extrait de Parfum",
    image: "/images/ambre-sacre.jpeg",
    fragranceNotes: {
      top: ["Yuzu", "Grapefruit", "Pink pepper"],
      heart: ["Toasted sesame", "Cedar", "Carrot seed"],
      base: ["Australian sandalwood", "Ambrette", "Oakmoss"],
    },
    longevity: "10–12 hours",
    occasion: "Desert light, reading rooms, reflective travel",
  },
  {
    id: "argent-linea",
    name: "Argent Linea",
    price: 270,
    shortDescription:
      "A silvered iris with cool metal and soft suede.",
    fullDescription:
      "Argent Linea sketches the outline of iris in graphite and suede. Metallic facets are balanced by a muted floral heart and a soft grey suede accord, resulting in a deliberately linear, elegant trail.",
    category: "Eau de Parfum",
    image: "/images/jardin-de-miniuit.jpeg",
    fragranceNotes: {
      top: ["Aldehydes", "Black pepper", "Citrus peel"],
      heart: ["Orris butter", "Violet", "Heliotrope"],
      base: ["Grey suede accord", "Cedar", "White musk"],
    },
    longevity: "7–8 hours",
    occasion: "Studios, monochrome evenings, open galleries",
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}
