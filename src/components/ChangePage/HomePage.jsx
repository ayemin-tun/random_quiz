import React from "react";
import FilterQuestion from "../FilterQuestion";

export default function HomePage(question) {
  return (
    <div className="w-full h-screen flex justify-center items-start">
      <div>
        <FilterQuestion />
      </div>
    </div>
  );
}
