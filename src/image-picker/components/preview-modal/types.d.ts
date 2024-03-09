import { FC } from "react";

declare interface IPreviewModalProps {
  url: string;
  name?: string;
  open: boolean;
  onClose: () => void;
}

declare type IPreviewModal = FC<IPreviewModalProps>;
