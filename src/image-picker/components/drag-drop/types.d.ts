import { FC } from "react";

declare interface IDragDropProps {
  onDrop: (files: any) => void;
}

declare type IDragDrop = FC<IDragDropProps>;
