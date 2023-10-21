export interface Category {
  id: number;
  name: string;
}

export interface Product {
  id: number;
  name: string;
  category: number;
  price: number;
  imgUrl: string;
  description:string;
}
