import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import QuestionFilterForm from "./QuestionFilterForm";
const FilterQuestion = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="px-6 py-3 sm:py-2 bg-blue-800 text-white cursor-pointer ">
          Filter Question
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] w-auto overflow-hidden translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none ">
          <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
            Filter Question
          </Dialog.Title>

          <Dialog.Close asChild>
            <button
              className="text-red-600 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
            >
              <Cross2Icon />
            </button>
          </Dialog.Close>

          <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal border-b-2 pb-4">
            {"You can filter your questions here. Click save when you're done."}
          </Dialog.Description>

          <QuestionFilterForm />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default FilterQuestion;
