"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function SearchParamsWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const searchParams = useSearchParams();

  return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>;
}
