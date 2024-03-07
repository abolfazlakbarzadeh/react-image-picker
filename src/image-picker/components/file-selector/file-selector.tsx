import React from "react";
import { IFileSelector } from "./types";

export const FileSelector: IFileSelector = (props) => {
  const handleFiles = (event: any) => {
    console.log("handleFiles", {
      files: event.target.files,
    });
  };
  return (
    <div className="w-full h-full relative">
      <input
        type="file"
        multiple
        accept="image/*"
        className="absolute inset-0"
        onChange={handleFiles}
      />
    </div>
  );
};
