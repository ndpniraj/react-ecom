import React from "react";

export default function FeaturedTitle({ text, className }) {
  return (
    <h1 className={className + " text-xl text-gray-900 font-semibold"}>
      {text}
    </h1>
  );
}
