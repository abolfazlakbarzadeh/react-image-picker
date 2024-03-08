import React, { SetStateAction } from "react";
import { getFileID } from "../utils";
import { IImagePickerProps } from "./image-picker";
import Axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export interface UploaderProps
  extends Pick<
    IImagePickerProps,
    "uploadAction" | "uploadHandler" | "uploadOnSelect" | "uploadAxiosOptions"
  > {
  setUploadedFiles: React.Dispatch<React.SetStateAction<File[]>>;
  setUploadingFiles: React.Dispatch<
    React.SetStateAction<Record<string, number>>
  >;
  isUploading: (fileID: string) => boolean;
}
const abortControllers: Record<string, AbortController> = {};

export const cancelUpload = (id: string) => {
  const controller = abortControllers[id];
  if (controller) {
    controller.abort();
    delete abortControllers[id];
  }
};
export const Uploader = (props: UploaderProps) => {
  const setUploadingItemData = (id: string, data: number) => {
    props.setUploadingFiles((uploading) => ({
      ...Object.fromEntries(
        Object.entries(uploading).map(([fileID, prg]) =>
          id == fileID ? [fileID, data] : [fileID, prg]
        )
      ),
    }));
  };
  const setUploadProgress = (id: string, progress: number) => {
    setUploadingItemData(id, progress);
  };
  const setUploadFail = (id: string) => {
    setUploadingItemData(id, -1);
  };
  const setUploadDone = (id: string, files: File[]) => {
    setUploadingItemData(id, 100);
    props.setUploadedFiles((uploaded) => [
      ...uploaded,
      files.find((file) => getFileID(file) == id)!,
    ]);
  };

  return {
    async upload<T = unknown>(files: File[]) {
      if (!props.uploadOnSelect) return;
      if (!props.uploadHandler && !props.uploadAction) {
        throw Error("You didn't provide any upload action to upload files");
      }

      let axios: AxiosInstance;
      if (!props.uploadHandler)
        axios = Axios.create({
          baseURL: props.uploadAction,
        });
      props.setUploadingFiles((uploadingFiles) => ({
        ...uploadingFiles,
        ...Object.fromEntries(files.map((file) => [getFileID(file), 0])),
      }));
      const promises = [];
      for (const file of files) {
        const fileID = getFileID(file);
        if (props.uploadHandler) {
          // upload by custom handler
          promises.push(
            props.uploadHandler!(file, getFileID(file), {
              done: setUploadDone.bind(this, fileID, files),
              fail: setUploadFail.bind(this, fileID),
              setProgress: setUploadProgress.bind(this, fileID),
              cancel: cancelUpload.bind(this, fileID),
            })
          );
        } else {
          // upload by default handler
          const form = new FormData();
          const abortController = new AbortController();
          form.append("file", file);
          let uploadOptions: AxiosRequestConfig<FormData> = {
            onUploadProgress: (progEvent) => {
              setUploadProgress(
                fileID,
                (progEvent.loaded * 100) / progEvent.total!
              );
            },
            signal: abortController.signal,
          };
          if (props.uploadAxiosOptions) {
            uploadOptions = Object.assign(
              {},
              uploadOptions,
              props.uploadAxiosOptions
            );
          }
          promises.push(
            axios!
              .post("/", form, uploadOptions)
              .then((data) => {
                setUploadDone(fileID, files);
                return data;
              })
              .catch((err) => {
                setUploadFail(fileID);
                return Promise.reject(err);
              })
          );
          abortControllers[fileID] = abortController;
        }
      }
      try {
        const result: T[] = await Promise.all(promises);
        return result;
      } catch (error) {
        console.error("Upload failed!");
      }
    },
  };
};
