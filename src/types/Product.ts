// api/products.ts
// api/products.ts
export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

// Pagination.tsx
export interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange?: (page: number) => void;
}

// ProductCard.tsx
export interface ProductCardProps {
  product: Product;
}

// CartContext.tsx
export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
  totalAmount: number;
  totalQuantity: number;
}

// ProductPage.tsx
export interface ProductPageProps {
  id: number;
}
