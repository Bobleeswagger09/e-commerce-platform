"use client";

import { use, useEffect, useState } from "react";
import { getProductById, Product } from "@/lib/api";
import { useRouter } from "next/navigation";
import { useCart } from "@/app/context/CartContext";
import Image from "next/image";

type Params = Promise<{ slug: string[] }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default function ProductPage(props: {
  params: Params;
  searchParams: SearchParams;
}) {
  const params = use(props.params); // Resolves the Promise

  const slug = params?.slug?.[0]; // Extracts the product ID from slug array

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { addToCart } = useCart();

  useEffect(() => {
    if (slug) {
      const fetchProduct = async () => {
        setLoading(true);
        try {
          const data = await getProductById(Number(slug));
          setProduct(data);
        } catch (error) {
          console.error("Failed to fetch product", error);
        } finally {
          setLoading(false);
        }
      };

      fetchProduct();
    }
  }, [slug]);

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    router.push("/cart");
  };

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center space-y-6">
        <div className="relative w-full max-w-md mx-auto">
          <Image
            src={product.image}
            alt={product.title}
            className="object-contain w-full h-full rounded-lg transition-transform duration-300 transform hover:scale-105"
            width={500}
            height={500}
            priority
          />
        </div>

        <div className="text-center">
          <h1 className="text-3xl font-semibold text-gray-900 mb-4">
            {product.title}
          </h1>
          <p className="text-xl text-gray-600 mb-4">${product.price}</p>
          <p className="text-gray-800 text-base mb-6 max-w-md mx-auto">
            {product.description}
          </p>
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => handleAddToCart(product)}
            className="bg-blue-500 text-white py-2 px-6 rounded-lg transform transition-all duration-300 hover:bg-blue-600 hover:scale-105"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
