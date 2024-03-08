import React, { useCallback, useEffect, useMemo, useState } from "react";
import { IPreview, OnRemoveProps } from "./types";
import { CarbonCloseOutline } from "../../../icons/carbon-close-outline";
import classNames from "classnames";
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

  const handleRemove = () => {
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

  const layout = useMemo(() => {
    if (props.large) {
      return <div className="w-full"></div>;
    } else {
      return (
        <>
          <div className="flex items-center w-ful gap-2">
            <img
              className="w-[5rem] h-[5rem] !rounded-[.5rem] border p-2 grow-0"
              src={imageUrl}
            />
            <div className="text-[.8rem] grow">{name}</div>

            <CarbonCloseOutline
              className="shrink-0 cursor-pointer hover:scale-[1.1] transition-transform duration-100   grow-0 text-red-700"
              fontSize={24}
              onClick={handleRemove}
            />
          </div>
        </>
      );
    }
  }, [props.large, imageUrl]);

  return (
    <div
      className={classNames(
        "flex items-center border rounded-[.5rem] gap-2 p-2 transition-colors duration-[.3s]",
        {
          "border-red-500 border-[2px] bg-red-500/[.2]": props.failUpload,
        }
      )}
    >
      <div className="flex flex-col gap-2 w-full">
        {layout}
        {props.isUploading && (
          <div className="w-full flex items-center gap-2 justify-between">
            <div
              className="w-full
             h-[5px] bg-slate-100  rounded-full"
            >
              <div
                className="h-full bg-teal-600  rounded-full"
                style={{
                  width: `${props.uploadProgress || 0}%`,
                }}
              />
            </div>
            <span className="text-[.7rem] grow-0">{`${Math.floor(
              props.uploadProgress!
            )}%`}</span>
          </div>
        )}
      </div>
    </div>
  );
};
