export const TOP_RESTAURANTS: number = 10;

export interface Restaurant {
  reviews: number;
  parkinglot: boolean;
  phone: string;
  image: string;
  restauranttype: string;
  businessname: string;
  address: string;
  slug: string;
  email: string;
  id: string;
  reviewsList: Review[];
}

export interface Review {
  id: number;
  author: string;
  comment: string;
  stars: number;
}
