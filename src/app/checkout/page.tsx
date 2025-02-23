"use client";

import { useCart } from "@/app/context/CartContext";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter

const CheckoutPage = () => {
  const { cart, totalPrice } = useCart();
  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
  });

  const router = useRouter(); // Initialize router

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: "", address: "", phone: "", email: "" }; // Changed from let to const

    if (!form.name) {
      newErrors.name = "Name is required";
      valid = false;
    }
    if (!form.address) {
      newErrors.address = "Address is required";
      valid = false;
    }
    if (!form.phone) {
      newErrors.phone = "Phone number is required";
      valid = false;
    }
    if (!form.email) {
      newErrors.email = "Email is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Order placed successfully!");

      // Clear the form fields after a successful order
      setForm({
        name: "",
        address: "",
        phone: "",
        email: "",
      });

      // Redirect to the homepage
      router.push("/"); // This will redirect to the homepage
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-lg">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id} className="mb-2">
            {item.title} - ${item.price} x {item.quantity}
          </li>
        ))}
      </ul>
      <p className="font-bold mt-4">Total: ${totalPrice.toFixed(2)}</p>
      <form onSubmit={handleSubmit} className="mt-6">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="block w-full p-2 mb-2 border"
        />
        {errors.name && <p className="text-red-500">{errors.name}</p>}
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          className="block w-full p-2 mb-2 border"
        />
        {errors.address && <p className="text-red-500">{errors.address}</p>}
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          className="block w-full p-2 mb-2 border"
        />
        {errors.phone && <p className="text-red-500">{errors.phone}</p>}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="block w-full p-2 mb-2 border"
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}
        <button
          type="submit"
          className="mt-4 bg-warning text-white px-4 py-2 rounded"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
