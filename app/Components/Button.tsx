import React from "react";

export default function Button({ value, className }: { value: string; className?: string }) {
  return (
    <button className={`transform hover:scale-105 transition border border-indigo-700 rounded-md px-6 py-2 text-sm sm:text-base ${className}`}>
      {value}
    </button>
  );
}
