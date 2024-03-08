import { FC, HTMLProps } from "react";

declare interface IFileSelectorProps extends HTMLProps<HTMLDivElement> {
  multiple?: boolean;
  onChange: (files: any) => void;
}

declare type IFileSelector = FC<IFileSelectorProps>;
