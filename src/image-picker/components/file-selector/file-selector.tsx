import React, { FC, HTMLProps } from "react";
import classNames from "classnames";
import { twMerge } from "tailwind-merge";
import { IFileSelector } from "./types";

export const FileSelector: IFileSelector = (props) => {
  const handleFiles = (event: any) => {
    props.onChange(event.target.files);
  };
  return (
    <div
      className={twMerge(
        classNames("w-full h-full relative opacity-0", props.className)
      )}
    >
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
