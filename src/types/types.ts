export type CardPageType = {
  items: ProductType["items"];
};

export type ProductType = {
  items: {
    id: number;
    name: string;
    description: string;
    price: string;
    stock: number;
    categoryId: number;
    createdAt: string;
    imageUrl: string;
  }[];
  page: number;
  limit: number;
  totalItems: number;
};

export type BannerType = {
  createdAt: string;
  id: number;
  imageUrl: string;
  isActive: boolean;
  title: string;
};

export type CategoriesType = {
  createdAt: string;
  description: string;
  id: number;
  name: string;
}[];

export type ProductPageType = {
  id: number;
  name: string;
  description: string;
  price: string;
  stock: number;
  categoryId: number;
  createdAt: string;
  imageUrl: string;
};
