import React from "react";
import { ChangeEventHandler } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import classNames from "classnames";
import "./drag-drop.scss";
// import dragDropImage from "";
const dragDropImage = new URL("../../../images/drag-drop.png", import.meta.url);

export const DragDrop = () => {
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
  const dragEnterHandler = (event: DragEvent) => {
    console.log("dragEnterHandler", {
      event,
    });
  };
  const dragOverHandler = (event: DragEvent) => {
    console.log("dragOverHandler", {
      event,
    });
  };
  const dragLeaveHandler = (event: DragEvent) => {
    console.log("dragLeaveHandler", {
      event,
    });
  };
  const dragStartHandler = (event: DragEvent) => {
    console.log("dragStartHandler", {
      event,
    });
  };
  const dropHandler = (event: DragEvent) => {
    console.log("dropHandler", {
      event,
    });
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
        dragenter: dragEnterHandler,
        dragover: dragOverHandler,
        dragleave: dragLeaveHandler,
        dragstart: dragStartHandler,
        drop: dropHandler,
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
    console.log("handleFiles", {
      files,
    });
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
        <form className="opacity-0">
          <input
            type="file"
            multiple
            accept="image/*"
            className="absolute inset-0"
            onChange={handleFiles}
          />
        </form>
        <div className="flex flex-col gap-4 items-center  pointer-events-none">
          <img
            src={dragDropImage.href}
            className="w-[5rem] h-[5rem] opacity-50 z-0"
            alt=""
          />
          <div className="text-[1rem] text-center opacity-50 max-w-[20rem]">
            برای انتخاب عکس کلیک کنید یا عکس ها را به اینجا بکشید
          </div>
        </div>
      </div>
    </div>
  );
};
