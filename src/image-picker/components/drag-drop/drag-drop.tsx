import React, { useContext } from "react";
import { ChangeEventHandler } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import classNames from "classnames";
import "./drag-drop.scss";
import { FileSelector } from "../file-selector";
import { IDragDrop } from "./types";
import { ProviderContext } from "../../../provider/provider";
import { removeDuplicateFiles } from "../../../utils";
// import dragDropImage from "";
const dragDropImage = new URL("../../../images/drag-drop.png", import.meta.url);

export const DragDrop: IDragDrop = (props) => {
  const configs = useContext(ProviderContext);
  const ref = useRef<HTMLDivElement>(null);

  const removeShield = () => {
    const shield = ref.current?.getElementsByClassName("shield")[0];
    if (shield) {
      shield.classList.remove("pointer-events-none");
      ref.current.classList.add("mouse-over");
    }
  };
  const addShield = () => {
    const shield = ref.current?.getElementsByClassName("shield")[0];
    if (shield) {
      shield.classList.add("pointer-events-none");
      ref.current.classList.remove("mouse-over");
    }
  };

  const hightlightZone =
    (highlight = true) =>
    () => {
      const className = "drag-over";
      if (highlight) {
        ref.current?.classList.add(className);
      } else {
        ref.current?.classList.remove(className);
      }
    };
  const dropHandler = (droppedFiles?: FileList) => {
    const files = removeDuplicateFiles(
      configs.files,
      Array.from(droppedFiles || [])
    );
    if (!configs.multiple && typeof configs.limit == "undefined")
      props.onDrop([files?.[0]]);
    else if (configs.multiple) props.onDrop(files);
    else if (typeof configs.limit == "number")
      props.onDrop(
        files.slice(
          0,
          configs.limit - (configs.files.length + ~~configs.images?.length!)
        )
      );
  };

  function handleZoneEvents(
    action: "addEventListener" | "removeEventListener"
  ) {
    const preventFunc = (handler: Function) => {
      return (event: any) => {
        event.preventDefault();
        event.stopPropagation();
        handler(event);
      };
    };
    const setEvent = (events: Record<string, Function>) => {
      Object.entries(events).forEach(([event, handler]) =>
        ref.current![action](event, preventFunc(handler), false)
      );
    };
    if (ref.current) {
      setEvent({
        drop: (event: DragEvent) => {
          dropHandler(event.dataTransfer?.files);
        },
      });
      setEvent({
        dragenter: hightlightZone(),
        dragover: hightlightZone(),
        dragstart: hightlightZone(),
        dragleave: hightlightZone(false),
        drop: hightlightZone(false),
      });
      setEvent({
        mouseover: removeShield,
        mouseleave: addShield,
      });
    }
  }

  useEffect(() => {
    handleZoneEvents("addEventListener");

    return () => {
      handleZoneEvents("removeEventListener");
    };
  }, []);

  const handleFiles = (files: any) => {
    dropHandler(files);
  };

  return (
    <div
      ref={ref}
      id="drag-drop"
      className={classNames(
        " p-6 border rounded-[1rem] flex items-center justify-center relative overflow-hidden"
      )}
    >
      <div className="shield pointer-events-none">
        <FileSelector
          multiple={configs.multiple}
          onChange={handleFiles}
          className="absolute inset-0"
        />
        <div className="flex flex-col gap-4 items-center  pointer-events-none">
          <img
            src={dragDropImage.href}
            className="w-[5rem] h-[5rem] opacity-50 z-0"
            alt=""
          />
          <div className="text-[1rem] text-center opacity-50 max-w-[17rem]">
            {configs.locale.drag_drop_hint}
          </div>
        </div>
      </div>
    </div>
  );
};
