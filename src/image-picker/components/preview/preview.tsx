import React, { useCallback, useEffect, useMemo, useState } from "react";
import { IPreview, OnRemoveProps } from "./types";
import { CarbonCloseOutline } from "../../../icons/carbon-close-outline";
import classNames from "classnames";
import { MdiTrash } from "../../../icons/mdi-trash";
import { ProgressBar } from "./components/progress-bar";
const loadingImage = new URL(
  "../../../images/loading-image.png",
  import.meta.url
);

export const Preview: IPreview = (props) => {
  const [imageUrl, setImageUrl] = useState(
    !props.file ? props.image?.path : loadingImage.href
  );
  const isFile = useMemo(() => !!props.file, []);
  const loadImage = useCallback(async () => {
    const arrayBuffer = await props.file?.arrayBuffer();
    if (arrayBuffer) {
      var arrayBufferView = new Uint8Array(arrayBuffer);
      var blob = new Blob([arrayBufferView], {
        type: props.file?.type,
      });
      const url = window.URL.createObjectURL(blob);
      setImageUrl(url);
    }
  }, []);

  useEffect(() => {
    if (props.file) loadImage();
  }, []);

  const handleRemove = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    const payload: OnRemoveProps = {
      isFile,
    };
    if (!isFile) payload.image = props.image;
    else payload.file = props.file;
    props.onRemove(payload);
  };
  const name = useMemo(
    () => (isFile ? props.file?.name : props.image?.name || "image"),
    []
  );

  const handleImageModal = () => {
    props.onShowInModal({ url: imageUrl!, name });
  };

  const layout = useMemo(() => {
    if (props.large) {
      return (
        <>
          <div
            className="items-center relative w-full"
            onClick={handleImageModal}
          >
            <img
              className="h-[10rem] w-full grow-0 object-cover"
              src={imageUrl}
            />
            <div className="absolute bottom-0 inset-0 bg-gradient-to-t from-black/[.8] to-transparent flex flex-col justify-end p-2 gap-2">
              <div>
                {props.isUploading && (
                  <ProgressBar
                    showPercent
                    percent={props.uploadProgress!}
                    percentClassName="text-white"
                  />
                )}
              </div>
              <div className="flex items-center text-white">
                <div className="text-[.9rem] w-full grow">{name}</div>

                <MdiTrash
                  className="shrink-0 cursor-pointer hover:scale-[1.1] transition-transform duration-100   grow-0 m-1 active:scale-[.95]"
                  fontSize={20}
                  onClick={handleRemove}
                />
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div
            className="flex items-center w-ful gap-2 justify-between p-2"
            onClick={handleImageModal}
          >
            <img
              className="w-[5rem] h-[5rem] !rounded-[.5rem] border p-2 grow-0"
              src={imageUrl}
            />
            <div className="text-[.8rem] w-full grow">{name}</div>

            <MdiTrash
              className="shrink-0 cursor-pointer hover:scale-[1.1] transition-transform duration-100   grow-0 text-red-700 mr-2 active:scale-[.95]"
              fontSize={24}
              onClick={handleRemove}
            />
          </div>
          {props.isUploading && (
            <div className="px-2 pb-2">
              <ProgressBar
                percent={props.uploadProgress!}
                progressClassName="bg-cyan-500"
                progressWrapperClassName="bg-cyan-50"
                showPercent
              />
            </div>
          )}
        </>
      );
    }
  }, [
    props.large,
    props.isUploading,
    imageUrl,
    props.uploadProgress,
    props.uploaded,
  ]);

  return (
    <div
      className={classNames(
        "flex items-center border rounded-[.5rem] overflow-hidden gap-2 transition-colors duration-[.3s]",
        {
          "border-red-500 border-[2px] bg-red-500/[.2]": props.failUpload,
        }
      )}
    >
      <div className="flex flex-col gap-2 w-full">{layout}</div>
    </div>
  );
};
