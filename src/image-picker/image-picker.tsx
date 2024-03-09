import "../styles/global.scss";
import React, {
  FC,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { DragDrop } from "./components/drag-drop/drag-drop";
import { Preview } from "./components/preview";
import { OnRemoveProps } from "./components/preview/types";
import { getFileID } from "../utils";
import { Uploader, cancelUpload } from "./upload";
import { AxiosRequestConfig } from "axios";
import { Provider, ProviderContext } from "../provider/provider";

const ImagePicker: FC = () => {
  const configs = useContext(ProviderContext);
  const [uploadingFiles, setUploadingFiles] = useState<Record<string, number>>(
    {}
  );
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const selectedSum = useMemo(
    () => configs.files.length + ~~configs.images?.length!,
    [configs.files, configs.images]
  );
  useEffect(() => {
    configs.onChange?.(configs.files);
  }, [configs.files, configs.onChange]);

  const isLimitReached =
    ((!!configs.files.length || !!configs.images?.length) &&
      !configs.multiple &&
      typeof configs.limit == "undefined") ||
    (typeof configs.limit == "number" &&
      (configs.files.length >= configs.limit ||
        (configs.images?.length || 0) >= configs.limit));

  const isUploading = useCallback(
    (fileID: string) => {
      const progress = uploadingFiles[fileID];
      if (typeof progress == "undefined") return false;
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
    uploadAction: configs.uploadAction,
    uploadHandler: configs.uploadHandler,
    uploadOnSelect: configs.uploadOnSelect,
    uploadAxiosOptions: configs.uploadAxiosOptions,
  });
  const handleDropFiles = (files: File[]) => {
    configs.onFilesChange((selected) => [...selected, ...files]);
    uploader.upload(Array.from(files));
  };
  const handleRemove = (image: OnRemoveProps) => {
    if (image.isFile) {
      configs.onFilesChange((files) => [
        ...files.filter((file) => getFileID(file) != getFileID(image.file!)),
      ]);
      cancelUpload(getFileID(image.file!));
    } else {
      configs.onRemoveImage?.(image.image!);
    }
  };
  const previewSection = useMemo(() => {
    const fileItems = Array.from(configs.files).map((file, idx) => (
      <Preview
        key={getFileID(file)}
        large={!configs.multiple && !configs.limit}
        file={file}
        uploaded={isUploaded(getFileID(file))}
        isUploading={isUploading(getFileID(file))}
        failUpload={isFailUpload(getFileID(file))}
        onRemove={handleRemove}
        uploadProgress={uploadingFiles[getFileID(file)]}
      />
    ));
    const imageItems =
      configs.images?.map((image, idx) => (
        <Preview
          key={`image_${idx}`}
          large={!configs.multiple && !configs.limit}
          image={image}
          onRemove={handleRemove}
        />
      )) || [];

    const items = fileItems.concat(imageItems);

    return <div className="flex flex-col gap-4">{items}</div>;
  }, [configs.files, configs.images, uploadingFiles, uploadedFiles]);

  const uploadInterface = useMemo(() => {
    if (!isLimitReached && configs.dragabble) {
      return <DragDrop key={selectedSum} onDrop={handleDropFiles} />;
    }
  }, [configs.files.length, configs.images?.length]);

  return (
    <div className="flex flex-col gap-5">
      {uploadInterface}
      {configs.showPreview && previewSection}
    </div>
  );
};

const WithProvider: IImagePicker = (props) => (
  <Provider {...props}>
    <ImagePicker />
  </Provider>
);

export default WithProvider;

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
