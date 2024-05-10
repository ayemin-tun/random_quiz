import React from "react";
import { Loader } from "lucide-react";
export default function LoadingSpinner() {
  return (
    <div className="w-full h-full flex-center">
      <Loader className="animate-spin" />
    </div>
  );
}
