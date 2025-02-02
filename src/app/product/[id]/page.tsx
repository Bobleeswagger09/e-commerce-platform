"use client";

import { useEffect, useState } from "react";
import { getProductById, Product } from "@/lib/api"; // Import the function and Product type
import { useRouter } from "next/navigation";
import React from "react";

import { useCart } from "@/app/context/CartContext";

interface ProductPageProps {
  params: { id: string };
}

const ProductPage = ({ params }: ProductPageProps) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { addToCart } = useCart();

  useEffect(() => {
    if (params?.id) {
      const fetchProduct = async () => {
        try {
          const data = await getProductById(Number(params.id)); // Fetch product by ID from params
          setProduct(data);
        } catch (error) {
          console.error("Failed to fetch product", error);
        } finally {
          setLoading(false);
        }
      };

      fetchProduct();
    }
  }, [params?.id]);

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    console.log("Adding to cart:", product);
    router.push("/cart"); // Navigate to the cart page
  };

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center space-y-6">
        <div className="relative w-full max-w-md mx-auto">
          <img
            src={product.image}
            alt={product.title}
            className="object-contain w-full h-full rounded-lg transition-transform duration-300 transform hover:scale-105"
          />
        </div>

        <div className="text-center">
          <h1 className="text-3xl font-semibold text-gray-900 mb-4 ">
            {product.title}
          </h1>
          <p className="text-xl text-gray-600 mb-4">${product.price}</p>
          <p className="text-gray-800 text-base mb-6 w-[500px] mx-auto">
            {product.description}
          </p>
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => handleAddToCart(product)} // Pass the product here
            className=" bg-blue-500 text-white py-2 px-6 rounded-lg transform transition-all duration-300 hover:bg-blue-600 hover:scale-105 "
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
