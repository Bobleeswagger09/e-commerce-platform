// app/products/page.tsx
import { getProducts } from "@/lib/api";
import Image from "next/image";

export default async function ProductListPage() {
  const products = await getProducts();

  return (
    <div className="container mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="border p-4 rounded-lg shadow-md flex flex-col items-center"
        >
          <Image
            src={product.image}
            alt={product.title}
            width={200}
            height={200}
            className="rounded-lg"
            loading="lazy"
          />
          <h3 className="font-bold text-lg mt-4">{product.title}</h3>
          <p className="text-gray-600 mt-2">${product.price}</p>
          <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded transition duration-300 ease-in-out">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
