import { FC } from "react";

declare interface IDragDropProps {
  multiple?: boolean;
  onDrop: (files: any) => void;
}

declare type IDragDrop = FC<IDragDropProps>;
