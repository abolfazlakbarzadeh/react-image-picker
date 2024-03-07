import { FC, HTMLProps } from "react";

declare interface IFileSelectorProps extends HTMLProps<HTMLDivElement> {
  multiple?: boolean;
  onChange: (file: File[] | File) => void;
}

declare type IFileSelector = FC<IFileSelectorProps>;
