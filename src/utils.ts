export const getFileID = (file: File) => `${file.name}_${file.size}`;
export const removeDuplicateFiles = (files: File[], newfiles: File[]) =>
  newfiles.filter(
    (_file) => !files.some((__file) => getFileID(_file) == getFileID(__file))
  );
