interface User {
  firstName: string;
  lastName: string;
  starRating: number;
  profileImage?: string;
}

export interface Product {
  category: string;
  price: number;
  description: string;
  productImage: string;
  user: User;
}

export const DUMMY_WEDDING_DRESS_ITEMS: Product[] = [
  {
    category: "wedding-dress",
    price: 120,
    description:
      " Consectetur natus reiciendis quas aliquam, quidem neque autem? Quia",
    productImage: "/dresses/wedding-dress-1.jpg",
    user: { firstName: "Juulia", lastName: "Ketonen", starRating: 3 },
  },
  {
    category: "wedding-dress",
    price: 175,
    description:
      " Consectetur natus reiciendis quas aliquam, quidem neque autem? Quia",
    productImage: "/dresses/wedding-dress-2.jpg",
    user: { firstName: "Monica", lastName: "Lehikoinen", starRating: 4 },
  },
  {
    category: "wedding-dress",
    price: 80,
    description:
      " Consectetur natus reiciendis quas aliquam, quidem neque autem? Quia",
    productImage: "/dresses/wedding-dress-3.jpg",
    user: { firstName: "Hanna", lastName: "Hytönen", starRating: 5 },
  },
  {
    category: "wedding-dress",
    price: 90,
    description:
      " Consectetur natus reiciendis quas aliquam, quidem neque autem? Quia",
    productImage: "/dresses/wedding-dress-4.jpg",
    user: { firstName: "Johanna", lastName: "Pieitlä", starRating: 4 },
  },
  {
    category: "wedding-dress",
    price: 100,
    description:
      " Consectetur natus reiciendis quas aliquam, quidem neque autem? Quia",
    productImage: "/dresses/wedding-dress-5.jpg",
    user: { firstName: "Kassandra", lastName: "Ketonen", starRating: 3 },
  },
  {
    category: "wedding-dress",
    price: 170,
    description:
      " Consectetur natus reiciendis quas aliquam, quidem neque autem? Quia",
    productImage: "/dresses/wedding-dress-6.jpg",
    user: { firstName: "Mirjami", lastName: "Hännikäinen", starRating: 5 },
  },
  {
    category: "wedding-dress",
    price: 89,
    description:
      " Consectetur natus reiciendis quas aliquam, quidem neque autem? Quia",
    productImage: "/dresses/wedding-dress-8.jpg",
    user: { firstName: "Maryam", lastName: "Juujuu", starRating: 5 },
  },
];
