export interface BannerProps {
  preTitle: string;
  title: string;
}

export interface ProductProps {
  id: string;
  price: string;
  title: string;
  gender: string;
  img: string;
  description: string;
}

export interface BlogItemProps {
  title: string;
  excerpt: string;
  author: string;
  category: string;
  img: string;
  id: string;
}

export interface BlogProps {
  id: string;
  author: string;
  date: string;
  category: string;
  excerpt: string;
  img: string;
  title: string;
  first_content: string;
  second_content: string;
}

export interface HomeProps {
  bannerData: BannerProps;
  productsData: ProductProps[];
  blogsData: BlogProps[];
}

export interface AboutProps {
  title: string;
  firstContent: string;
  secondContent: string;
  thirdContent: string;
  firstImage: string;
  secondImage: string;
  secondTitle: string;
  fourthContent: string;
  fifthContent: string;
  author: string;
}
