import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";

interface ProductCardProps {
  product: {
    id: number;
    title: string;
    price: number;
    image: string;
    description: string;
  };
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const router = useRouter();

  // Remove the argument here, we have access to the product directly via props
  const handleAddToCart = () => {
    addToCart(product);
    console.log("Adding to cart:", product);

    router.push("/cart");
  };

  return (
    <div className="border p-4 rounded-lg shadow-md">
      {/* Display product image */}
      <div className="w-full h-40 flex justify-center mb-4">
        <Image
          src={product.image}
          alt={product.title}
          width={200}
          height={200}
          className="object-contain transition-transform duration-300 transform hover:scale-105"
        />
      </div>

      <h3 className="text-lg font-semibold text-center">{product.title}</h3>

      <p className="text-center text-gray-600">${product.price}</p>

      <div className="flex justify-center mt-4">
        <button
          onClick={handleAddToCart} // Now calling without argument
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Add to Cart
        </button>
      </div>

      {/* Link to individual product details (if any) */}
      <div className="flex justify-center mt-2">
        <Link
          href={`/product/${product.id}`}
          className="text-blue-500 hover:underline"
        >
          View Product
        </Link>
      </div>
    </div>
  );
};
