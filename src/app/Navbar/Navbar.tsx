"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Importing icons for mobile menu toggle

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    // Toggle dropdown visibility
    setIsOpen((prev) => !prev);
  };
  return (
    <nav className="bg-primary text-primary-content shadow-md p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo and Brand Name */}
        <Link href="/" className="flex items-center text-xl font-semibold">
          <span className="ml-2 text-2xl">E-Shop</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="/products"
            className="relative px-4 py-2 hover:bg-secondary hover:text-white transition duration-300 rounded-md font-semibold"
          >
            Products
          </Link>
          <Link
            href="/cart"
            className="relative px-4 py-2 hover:bg-secondary hover:text-white transition duration-300 rounded-md font-semibold"
          >
            Cart
          </Link>
          <Link
            href="/checkout"
            className="relative px-4 py-2 hover:bg-secondary hover:text-white transition duration-300 rounded-md font-semibold"
          >
            Checkout
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 w-3/4 h-full bg-primary shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out p-6`}
      >
        {/* Close Button Inside Menu */}
        <button
          className="absolute top-4 right-4 text-white focus:outline-none"
          onClick={() => setIsOpen(true)}
        >
          <X size={28} />
        </button>

        {/* Mobile Menu Links */}
        <div className="flex flex-col space-y-6 mt-10">
          <Link
            href="/products"
            className="text-lg hover:bg-secondary hover:text-white p-2 rounded-md transition duration-300 font-semibold"
            onClick={toggleDropdown}
          >
            Products
          </Link>
          <Link
            href="/cart"
            className="text-lg hover:bg-secondary hover:text-white p-2 rounded-md transition duration-300 font-semibold"
            onClick={() => setIsOpen(true)}
          >
            Cart
          </Link>
          <Link
            href="/checkout"
            className="text-lg hover:bg-secondary hover:text-white p-2 rounded-md transition duration-300 font-semibold"
            onClick={() => setIsOpen(true)}
          >
            Checkout
          </Link>
        </div>
      </div>
    </nav>
  );
}
