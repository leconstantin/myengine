"use client";

import Link from "next/link";
import { Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export default function PaginationButtons() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const searchTerm = searchParams.get("searchTerm");
  const startIndex = parseInt(searchParams.get("start") || "1", 10);

  return (
    <Suspense>
      <div className="text-blue-700 flex px-10 pb-4 justify-between sm:justify-start sm:space-x-44 sm:px-0">
        {/* Previous Button */}
        {startIndex > 1 && (
          <Link
            href={`${pathname}?searchTerm=${searchTerm}&start=${
              startIndex - 10
            }`}
            scroll={false}
          >
            <div className="flex flex-col items-center hover:underline">
              <BsChevronLeft className="h-5" />
              <p>Previous</p>
            </div>
          </Link>
        )}
        {/* Next Button */}
        {startIndex < 91 && (
          <Link
            href={`${pathname}?searchTerm=${searchTerm}&start=${
              startIndex + 10
            }`}
            scroll={false}
          >
            <div className="flex flex-col items-center hover:underline">
              <BsChevronRight className="h-5" />
              <p>Next</p>
            </div>
          </Link>
        )}
      </div>
    </Suspense>
  );
}
