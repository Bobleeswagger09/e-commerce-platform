"use client";

import { useCart } from "@/app/context/CartContext";
import Image from "next/image";
import { useRouter } from "next/navigation";

// SVG Trash Icon
const TrashIconSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
    />
  </svg>
);

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

const CartPage = () => {
  const { cart, removeFromCart, totalPrice } = useCart();
  const router = useRouter();

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {cart.length === 0 ? (
        <div className="text-center text-xl font-semibold text-gray-600">
          Your cart is empty
        </div>
      ) : (
        <div>
          <div className="space-y-6">
            {cart.map((item: CartItem) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row justify-between items-center bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition duration-300 ease-in-out"
              >
                <div className="flex flex-col sm:flex-row gap-3 items-center space-x-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded-lg"
                    width={64}
                    height={64}
                  />
                  <div className="">
                    <h4 className="hidden md:block text-lg font-medium text-gray-800 ">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-500">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 mt-2 md:mt-0">
                  <span className="text-lg font-semibold text-gray-700">
                    ${item.price * item.quantity}
                  </span>
                  {/* Remove Button with Custom Trash Icon */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 hover:text-red-800 transition duration-200"
                  >
                    <TrashIconSVG /> {/* Custom SVG Trash Icon */}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
            <p className="text-xl font-semibold text-gray-800">Total: </p>
            <span className="text-2xl font-bold text-green-600">
              ${totalPrice?.toFixed(2)} {/* Added optional chaining */}
            </span>
          </div>

          <button
            onClick={() => router.push("/checkout")}
            className="mt-8 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold py-2 px-4 rounded-md w-full hover:from-green-500 hover:to-blue-600 transition duration-200"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
