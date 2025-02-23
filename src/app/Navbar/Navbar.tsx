"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import ThemeToggle from "../themeProvider/ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Explicitly typing the ref as a div element or null
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Close the menu if the user clicks outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false); // Close the menu
      }
    };

    // Add event listener for click outside
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)} // Toggle open state directly
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        ref={menuRef} // Attach the ref to the mobile menu
        className={`md:hidden fixed top-0 right-0 w-3/4 h-full bg-primary shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out p-6`}
      >
        {/* Close Button Inside Menu */}
        <button
          className="absolute top-4 right-4 text-white focus:outline-none"
          onClick={() => setIsOpen(false)} // Close the menu directly
        >
          <X size={28} />
        </button>

        {/* Mobile Menu Links */}
        <div className="flex flex-col space-y-6 mt-10">
          <Link
            href="/products"
            className="text-lg hover:bg-secondary hover:text-white p-2 rounded-md transition duration-300 font-semibold"
            onClick={() => setIsOpen(false)} // Close the menu when a link is clicked
          >
            Products
          </Link>
          <Link
            href="/cart"
            className="text-lg hover:bg-secondary hover:text-white p-2 rounded-md transition duration-300 font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Cart
          </Link>
          <Link
            href="/checkout"
            className="text-lg hover:bg-secondary hover:text-white p-2 rounded-md transition duration-300 font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Checkout
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
