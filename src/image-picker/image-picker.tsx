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
import { getFileID, getLimitationReached, getSelectedSum } from "../utils";
import { Uploader, cancelUpload } from "./upload";
import { AxiosRequestConfig } from "axios";
import { Provider, ProviderContext } from "../provider/provider";
import { PreviewModal } from "./components/preview-modal";
import { IPreviewModalProps } from "./components/preview-modal/types";
import { FileSelector } from "./components/file-selector";

const ImagePicker: FC = () => {
  const configs = useContext(ProviderContext);
  const [uploadingFiles, setUploadingFiles] = useState<Record<string, number>>(
    {}
  );
  const [previewModal, setPreviewModal] =
    useState<Pick<IPreviewModalProps, "name" | "url">>();
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  useEffect(() => {
    configs.onChange?.(configs.files);
  }, [configs.files, configs.onChange]);
  const selectedSum = useMemo(
    () => getSelectedSum(configs),
    [configs.files, configs.images]
  );
  const isLimitReached = useMemo(
    () => getLimitationReached(configs),
    [configs.files, configs.images, configs.multiple, configs.limit]
  );

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
        onShowInModal={(url) => setPreviewModal(url)}
      />
    ));
    const imageItems =
      configs.images?.map((image, idx) => (
        <Preview
          key={`image_${idx}`}
          large={!configs.multiple && !configs.limit}
          image={image}
          onRemove={handleRemove}
          onShowInModal={(url) => setPreviewModal(url)}
        />
      )) || [];

    const items = fileItems.concat(imageItems);

    return <div className="flex flex-col gap-4">{items}</div>;
  }, [configs.files, configs.images, uploadingFiles, uploadedFiles]);

  const uploadInterface = useMemo(() => {
    if (!isLimitReached) {
      if (configs.dragabble) {
        return <DragDrop key={selectedSum} onDrop={handleDropFiles} />;
      } else
        return <FileSelector key={selectedSum} onChange={handleDropFiles} />;
    }
  }, [selectedSum, isLimitReached]);

  return (
    <div
      className="flex flex-col gap-5"
      style={{
        direction: configs.rtl ? "rtl" : "ltr",
      }}
    >
      {uploadInterface}
      {configs.showPreview && previewSection}
      <PreviewModal
        open={!!previewModal}
        {...previewModal!}
        onClose={() => setPreviewModal(undefined)}
      />
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

declare type IImagePicker = FC<IImagePickerProps>;
export type Locale = Partial<{
  drag_drop_hint: string;
  select_image: string;
  preview_image_modal_title: string;
}>;
