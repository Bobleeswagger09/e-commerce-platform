"use client";

import HeroSection from "@/components/HeroSection";
import { ProductCard } from "@/components/ProductCard";
import Pagination from "@/components/PaginationBox";
import { Product, getProducts } from "@/lib/api";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);

  // Function to update pageSize based on screen width
  const updatePageSize = () => {
    if (window.innerWidth < 640) {
      setPageSize(3);
    } else if (window.innerWidth < 1024) {
      setPageSize(4);
    } else {
      setPageSize(6);
    }
  };

  // Effect to track window resize
  useEffect(() => {
    updatePageSize(); // Set initial size
    window.addEventListener("resize", updatePageSize);
    return () => window.removeEventListener("resize", updatePageSize);
  }, []);

  // Fetch Products using the function from libs/products
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await getProducts(); // Correct function
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products", error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  // Paginate products dynamically based on screen width
  const totalPages = Math.ceil(products.length / pageSize);
  const paginatedProducts = products.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  if (loading)
    return <p className="text-center text-xl">Loading products...</p>;

  return (
    <div className="container mx-auto px-2 lg:px-[2rem] py-8  text-black">
      <HeroSection />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 max-w-[97%] mx-auto text-black">
        {paginatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
