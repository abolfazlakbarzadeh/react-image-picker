import React, { FC } from "react";
import { AxiosRequestConfig } from "axios";
export const ImagePicker: IImagePicker;
type IUploadHandler = (file: File, fileID: string, options: {
    setProgress: (progress: number) => void;
    done: () => void;
    fail: () => void;
    cancel: () => void;
}) => Promise<any> | any;
type IImagePickerImage = {
    id: string | number;
    path: string;
    name?: string;
};
interface IImagePickerProps {
    dragabble?: boolean;
    rtl?: boolean;
    uploadOnSelect?: boolean;
    multiple?: boolean;
    showPreview?: boolean;
    uploadAction?: string;
    limit?: number;
    locale?: string | Locale;
    uploadAxiosOptions?: AxiosRequestConfig<FormData>;
    uploadHandler?: IUploadHandler;
    files: File[];
    onFilesChange: React.Dispatch<React.SetStateAction<File[]>>;
    onChange?: (files: File[]) => void;
    images?: IImagePickerImage[];
    onRemoveImage?: (props: IImagePickerImage) => void;
}
type IImagePicker = FC<IImagePickerProps>;
type Locale = Partial<{
    drag_drop_hint: string;
    select_image: string;
    preview_image_modal_title: string;
}>;

//# sourceMappingURL=types.d.ts.map
