import { IImagePickerProps } from "./image-picker/image-picker";

export const getFileID = (file: File) => `${file.name}_${file.size}`;
export const removeDuplicateFiles = (files: File[], newfiles: File[]) =>
  newfiles.filter(
    (_file) => !files.some((__file) => getFileID(_file) == getFileID(__file))
  );
export const getSelectedSum = (configs: IImagePickerProps) =>
  configs.files.length + ~~configs.images?.length!;
export const getLimitationReached = (configs: IImagePickerProps) =>
  ((!!configs.files.length || !!configs.images?.length) &&
    !configs.multiple &&
    typeof configs.limit == "undefined") ||
  (typeof configs.limit == "number" &&
    (configs.files.length >= configs.limit ||
      (configs.images?.length || 0) >= configs.limit));
