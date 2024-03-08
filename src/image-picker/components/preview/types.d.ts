import { FC } from "react";
import { IImagePickerImage } from "../../image-picker";

export type OnRemoveProps = {
  isFile: boolean;
  file?: File;
  image?: IImagePickerImage;
};

declare interface IPreviewProps {
  isUploading?: boolean;
  uploadProgress?: number;
  uploaded?: boolean;
  failUpload?: boolean;
  file?: File;
  image?: IImagePickerImage;
  large?: boolean;
  onRemove: (props: OnRemoveProps) => void;
}

declare type IPreview = FC<IPreviewProps>;
