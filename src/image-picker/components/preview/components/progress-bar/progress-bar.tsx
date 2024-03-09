import React from "react";
import { IProgressBar } from "./types";
import classNames from "classnames";
import { twMerge } from "tailwind-merge";

export const ProgressBar: IProgressBar = (props) => {
  return (
    <div
      className={twMerge(
        classNames(
          "w-full flex items-center gap-2 justify-between",
          props.className
        )
      )}
    >
      <div
        className={twMerge(
          classNames(
            "w-full h-[5px] bg-white/[.2]  rounded-full",
            props.progressWrapperClassName
          )
        )}
      >
        <div
          className={twMerge(
            classNames(
              "h-full bg-white rounded-full transition-all duration-[.3s]",
              props.progressClassName
            )
          )}
          style={{
            width: `${props.percent || 0}%`,
          }}
        />
      </div>
      {props.showPercent && (
        <span
          className={twMerge(
            classNames("text-[.7rem] grow-0", props.percentClassName)
          )}
        >{`${Math.floor(props.percent!)}%`}</span>
      )}
    </div>
  );
};
