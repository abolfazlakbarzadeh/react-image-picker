import React, { useEffect, useState } from "react";
import { IPreviewModal } from "./types";
import { twMerge } from "tailwind-merge";
import classNames from "classnames";
import { CarbonCloseOutline } from "../../../icons/carbon-close-outline";

export const PreviewModal: IPreviewModal = (props) => {
  const [loaded, setLoaded] = useState(false);
  const onLoadHandler = () => {
    setLoaded(true);
  };
  useEffect(() => {
    setLoaded(props.open);
  }, [props.open]);
  return (
    <div
      className={twMerge(
        classNames("absolute inset-0", {
          "pointer-events-none": !props.open && !loaded,
        })
      )}
    >
      <span
        className={twMerge(
          classNames(
            "absolute inset-0 bg-black/[.2] transition-opacity duration-[.3s] z-0",
            {
              "opacity-0": !props.open,
            }
          )
        )}
        onClick={props.onClose}
      />
      {props.open && (
        <div
          className={twMerge(
            classNames(
              "max-w-[90%] max-h-[90%] absolute translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%] p-2 rounded-[.5rem] border bg-white z-10 flex flex-col gap-2 transition-opacity duration-[.3s]",
              {
                "opacity-0": !loaded,
              }
            )
          )}
        >
          <div className="flex items-center justify-between">
            <CarbonCloseOutline fontSize={20} className="text-typography" />
            <div className="text-typography text-[.8rem]">مشاهده تصویر</div>
          </div>
          <img
            src={props.url}
            className="w-full h-full rounded-[1rem]"
            onLoad={onLoadHandler}
          />
          {!!props.name && (
            <div className="text-typography text-[.8rem] text-center">
              {props.name}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
