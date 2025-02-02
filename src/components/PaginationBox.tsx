"use client";

import Link from "next/link";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
}

const Pagination = ({ totalPages, currentPage }: PaginationProps) => {
  return (
    totalPages > 1 && (
      <div className="flex gap-2 mt-6 justify-center">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <Link
            key={page}
            href={`?page=${page}`}
            className={`px-4 py-2 border rounded-lg ${
              currentPage === page
                ? "bg-secondary text-white"
                : "bg-white text-black"
            }`}
          >
            {page}
          </Link>
        ))}
      </div>
    )
  );
};

export default Pagination;
