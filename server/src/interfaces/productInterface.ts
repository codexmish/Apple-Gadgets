// create Product

export interface ProductVariant {
  sku?: string;
  color?: string;
  size?: string;
  stock?: number;
}

export interface CreateProduct {
  title: string;
  slug: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  variants: ProductVariant[];
  tags: string;
  isActive: boolean;
}
