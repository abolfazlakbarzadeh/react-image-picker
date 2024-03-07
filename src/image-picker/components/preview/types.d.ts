import { FC } from "react";

declare interface IPreviewProps {
  isUploading?: boolean;
  uploadProgress?: number;
  uploaded?: boolean;
  file: File;
}

declare type IPreview = FC<IPreviewProps>;
