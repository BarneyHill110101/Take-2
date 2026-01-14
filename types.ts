
export interface Review {
  id: string;
  author: string;
  text: string;
  source: string;
}

export interface MenuItem {
  name: string;
  description: string;
  category: 'Drinks' | 'Food' | 'Cakes';
}

export enum Section {
  HERO = 'hero',
  ABOUT = 'about',
  REVIEWS = 'reviews',
  MENU = 'menu',
  SPACE = 'space',
  VISIT = 'visit'
}
