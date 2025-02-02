import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Create a reference to the navbar
  const navRef = useRef<HTMLDivElement>(null);

  // Function to toggle nav open/close
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Close nav if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsNavOpen(false); // Close the nav
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div>
      {/* Button to toggle navigation */}
      <button onClick={toggleNav}>
        {isNavOpen ? "Close Nav" : "Open Nav"}
      </button>

      {/* Navigation menu */}
      {isNavOpen && (
        <div
          ref={navRef}
          className="absolute top-0 left-0 w-full h-full bg-gray-800 text-white flex items-center justify-center"
        >
          <div className="p-6 bg-white text-black rounded-lg shadow-lg">
            <button
              onClick={toggleNav}
              className="absolute top-2 right-2 text-xl text-gray-800"
            >
              X
            </button>
            <ul>
              <li className="py-2">Home</li>
              <li className="py-2">About</li>
              <li className="py-2">Contact</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
