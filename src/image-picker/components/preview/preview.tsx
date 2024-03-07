import React, { useCallback, useEffect, useMemo, useState } from "react";
import { IPreview } from "./types";
const loadingImage = new URL(
  "../../../images/loading-image.png",
  import.meta.url
);

export const Preview: IPreview = (props) => {
  const [imageUrl, setImageUrl] = useState(loadingImage.href);
  const fileName = useMemo(() => props.file.name, []);
  const loadImage = useCallback(async () => {
    const arrayBuffer = await props.file.arrayBuffer();
    if (arrayBuffer) {
      var arrayBufferView = new Uint8Array(arrayBuffer);
      var blob = new Blob([arrayBufferView], {
        type: props.file.type,
      });
      const url = window.URL.createObjectURL(blob);
      setImageUrl(url);
    }
  }, []);

  useEffect(() => {
    loadImage();
  }, []);

  return (
    <div className="border p-2 rounded-[.5rem] items-center gap-2">
      <img src={imageUrl} />
      <div className="text-[1rem]">{fileName}</div>
    </div>
  );
};
