import { FC, HTMLAttributes } from "react";

declare interface IProgressBarProps extends HTMLAttributes<HTMLDivElement> {
  percent: number;
  showPercent?: boolean;
  progressWrapperClassName?: string;
  progressClassName?: string;
  percentClassName?: string;
}

declare type IProgressBar = FC<IProgressBarProps>;
