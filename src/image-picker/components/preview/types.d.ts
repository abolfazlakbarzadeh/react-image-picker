import { FC } from "react";
import { IImagePickerImage } from "../../image-picker";
import { IPreviewModalProps } from "../preview-modal/types";

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
  onShowInModal: (url: Pick<IPreviewModalProps, "name" | "url">) => void;
}

declare type IPreview = FC<IPreviewProps>;
