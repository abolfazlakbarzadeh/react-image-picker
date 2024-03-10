import React, { FC, HTMLProps, useContext, useMemo } from "react";
import classNames from "classnames";
import { twMerge } from "tailwind-merge";
import { IFileSelector } from "./types";
import { ProviderContext } from "../../../provider/provider";
import { getSelectedSum } from "../../../utils";

export const FileSelector: IFileSelector = (props) => {
  const configs = useContext(ProviderContext);
  const selectedSum = useMemo(
    () => getSelectedSum(configs),
    [configs.files, configs.images]
  );
  const handleFiles = (event: any) => {
    props.onChange(event.target.files);
  };

  const counter = useMemo(() => {
    if (selectedSum > 1) {
      return `(${selectedSum})`;
    }
  }, [selectedSum]);
  return (
    <div
      className={twMerge(
        classNames(
          "w-full h-full relative p-6 border rounded-[1rem]",
          {
            "opacity-0": configs.dragabble,
          },
          props.className
        )
      )}
    >
      <input
        type="file"
        multiple
        accept="image/*"
        className="absolute inset-0 opacity-0"
        onChange={handleFiles}
      />
      <div className="text-typography/[.5] text-center pointer-events-none">
        {configs.locale.select_image} {counter}
      </div>
    </div>
  );
};
