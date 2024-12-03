"use client";

import { useEffect } from "react";

// Props type definition
type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Error:", error);
  }, [error]);

  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <h1 className="text-3xl mb-4">Something went wrong!</h1>
      <button onClick={reset} className="text-blue-500 hover:underline">
        Try again
      </button>
    </div>
  );
}
