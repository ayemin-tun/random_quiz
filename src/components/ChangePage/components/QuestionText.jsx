import { decodeHTMLEntities } from "@/lib/utils";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

export default function QuestionText({ index, question }) {
  return (
    <p className="font-medium md:text-2xl text-xl flex gap-2 items-start">
      <span className="flex gap-1 items-center">
        {index + 1} <FaArrowRight className="text-sm" />
      </span>
      {decodeHTMLEntities(question)}
    </p>
  );
}
