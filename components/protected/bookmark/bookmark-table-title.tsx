import PostCreateButton from "@/components/protected/post/buttons/post-create-button";
import { postConfig } from "@/config/post";
import { Separator } from "@radix-ui/react-dropdown-menu";
import React from "react";

const BookMarkTableTitle = () => {
  return (
    <>
      <div className="mb-5 flex flex-row border-b border-gray-200 pb-5">
        <div className="flex-none items-center justify-start">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            {postConfig.title}
          </h1>
          <p className="mt-2 text-sm text-gray-700">{postConfig.description}</p>
        </div>
        <div className="flex-grow"></div>
      </div>
    </>
  );
};

export default BookMarkTableTitle;
