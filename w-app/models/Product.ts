import { User } from "./User";

export interface Product {
  category: string;
  price: number;
  description: string;
  productImage: string;
  user: User;
}
