import "../styles/global.scss";
import React, { FC, useCallback, useMemo, useRef, useState } from "react";
import { DragDrop } from "./components/drag-drop/drag-drop";
import { Preview } from "./components/preview";
import { OnRemoveProps } from "./components/preview/types";
import { getFileID } from "../utils";
import { Uploader, cancelUpload } from "./upload";
import { AxiosRequestConfig } from "axios";

const ImagePicker: IImagePicker = (props) => {
  const [uploadingFiles, setUploadingFiles] = useState<Record<string, number>>(
    {}
  );
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const isLimitReached =
    ((!!props.files.length || !!props.images?.length) &&
      !props.multiple &&
      typeof props.limit == "undefined") ||
    (typeof props.limit == "number" &&
      (props.files.length >= props.limit ||
        (props.images?.length || 0) >= props.limit));

  const isUploading = useCallback(
    (fileID: string) => {
      const progress = uploadingFiles[fileID];
      if (!progress) return false;
      return progress < 100 && progress > -1;
    },
    [uploadingFiles]
  );
  const isUploaded = useCallback(
    (fileID: string) =>
      uploadedFiles.findIndex((file) => getFileID(file) == fileID) != -1,
    [uploadedFiles]
  );
  const isFailUpload = useCallback(
    (fileID: string) => {
      const progress = uploadingFiles[fileID];
      if (!progress) return false;
      return progress == -1;
    },
    [uploadingFiles]
  );
  const uploader = Uploader({
    isUploading,
    setUploadedFiles,
    setUploadingFiles,
    uploadAction: props.uploadAction,
    uploadHandler: props.uploadHandler,
    uploadOnSelect: props.uploadOnSelect,
    uploadAxiosOptions: props.uploadAxiosOptions,
  });
  const handleDropFiles = (files: File[]) => {
    props.onFilesChange((selected) => [...selected, ...files]);
    uploader.upload(Array.from(files));
  };
  const handleRemove = (image: OnRemoveProps) => {
    if (image.isFile) {
      props.onFilesChange((files) => [
        ...files.filter((file) => getFileID(file) != getFileID(image.file!)),
      ]);
      cancelUpload(getFileID(image.file!));
    } else {
      props.onRemoveImage?.(image.image!);
    }
  };
  const previewSection = useMemo(() => {
    const fileItems = Array.from(props.files).map((file, idx) => (
      <Preview
        key={getFileID(file)}
        // large={!props.multiple}
        file={file}
        uploaded={isUploaded(getFileID(file))}
        isUploading={isUploading(getFileID(file))}
        failUpload={isFailUpload(getFileID(file))}
        onRemove={handleRemove}
        uploadProgress={uploadingFiles[getFileID(file)]}
      />
    ));
    const imageItems =
      props.images?.map((image, idx) => (
        <Preview
          key={`image_${idx}`}
          // large={!props.multiple}
          image={image}
          onRemove={handleRemove}
        />
      )) || [];

    const items = fileItems.concat(imageItems);

    return <div className="flex flex-col gap-4">{items}</div>;
  }, [props.files, props.images, uploadingFiles, uploadedFiles]);

  return (
    <div className="flex flex-col gap-5 w-[25rem]">
      {!isLimitReached && props.dragabble && (
        <DragDrop multiple={props.multiple} onDrop={handleDropFiles} />
      )}
      {props.showPreview && previewSection}
    </div>
  );
};

export default ImagePicker;

declare type IUploadHandler = (
  file: File,
  fileID: string,
  options: {
    setProgress: (progress: number) => void;
    done: () => void;
    fail: () => void;
    cancel: () => void;
  }
) => Promise<any> | any;

export type IImagePickerImage = {
  id: string | number;
  path: string;
  name?: string;
};

export interface IImagePickerProps {
  dragabble?: boolean;
  uploadOnSelect?: boolean;
  multiple?: boolean;
  showPreview?: boolean;
  uploadAction?: string;
  limit?: number;
  uploadAxiosOptions?: AxiosRequestConfig<FormData>;
  uploadHandler?: IUploadHandler;
  files: File[];
  onFilesChange: React.Dispatch<React.SetStateAction<File[]>>;
  onChange?: (files: File[]) => void;
  images?: IImagePickerImage[];
  onRemoveImage?: (props: IImagePickerImage) => void;
}

declare type IImagePicker = FC<IImagePickerProps>;
