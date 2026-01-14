
import { Review, MenuItem } from './types';

export const BRAND = {
  name: "Café at the Cross",
  tagline: "A peaceful pause in the heart of the city.",
  address: "Watergate St, Chester CH1 2LA",
  phone: "01244 403634",
  openingHours: [
    { day: "Monday", hours: "Closed" },
    { day: "Tuesday", hours: "11:00 am – 4:00 pm" },
    { day: "Wednesday", hours: "11:00 am – 4:00 pm" },
    { day: "Thursday", hours: "11:00 am – 4:00 pm" },
    { day: "Friday", hours: "11:00 am – 4:00 pm" },
    { day: "Saturday", hours: "11:00 am – 4:00 pm" },
    { day: "Sunday", hours: "Closed" },
  ]
};

export const REVIEWS: Review[] = [
  {
    id: "1",
    author: "Local Guide",
    text: "A great place to escape the hustle and bustle of the city. Truly a hidden gem inside a beautiful church.",
    source: "Google Review"
  },
  {
    id: "2",
    author: "Sarah J.",
    text: "Lovely warm welcome... perfect spot for lunch and a bit of peace. The atmosphere is like nowhere else in Chester.",
    source: "Google Review"
  },
  {
    id: "3",
    author: "David M.",
    text: "Best kept secret in Chester. Amazing, peaceful atmosphere in the church. Highly recommend the homemade cakes.",
    source: "Google Review"
  },
  {
    id: "4",
    author: "Emma W.",
    text: "The perfect escape. If you need 30 minutes of quiet with a great coffee, this is the place to go.",
    source: "Google Review"
  }
];

export const MENU_PREVIEW: MenuItem[] = [
  { name: "Artisan Coffee", description: "Freshly roasted beans, served with care.", category: "Drinks" },
  { name: "Specialty Teas", description: "A selection of fine leaf and flavoured teas.", category: "Drinks" },
  { name: "Homemade Coffee & Walnut Cake", description: "Our signature bake, made with love.", category: "Cakes" },
  { name: "Seasonal Soup", description: "Warm and comforting, served with crusty bread.", category: "Food" },
  { name: "Toasted Paninis", description: "A variety of fillings, grilled to perfection.", category: "Food" },
];

export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1541167760496-1628856ab752?auto=format&fit=crop&q=80&w=2000",
  church: "https://images.unsplash.com/photo-1548678967-f1fc5d33934d?auto=format&fit=crop&q=80&w=1200",
  chester: "https://images.unsplash.com/photo-1580193813605-a5c78b4ee01a?auto=format&fit=crop&q=80&w=1200",
  newgate: "https://images.unsplash.com/photo-1577703387431-a6b10672e353?auto=format&fit=crop&q=80&w=1200", // Representative image of Chester's Roman Walls/Newgate
  people: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200",
  cake: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=1200",
  heroGallery: [
    "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1580193813605-a5c78b4ee01a?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1518134449072-40c428153920?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=2000"
  ]
};
