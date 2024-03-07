require("./index.css");
var $8zHUo$reactjsxdevruntime = require("react/jsx-dev-runtime");
var $8zHUo$react = require("react");
var $8zHUo$classnames = require("classnames");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "ImagePicker", () => $f8622788abb4b096$export$2e2bcd8739ae039);







// import dragDropImage from "";
const $839c8cc5f1d64e5c$var$dragDropImage = new URL("drag-drop.c2dd78b3.png", "file:" + __filename);
const $839c8cc5f1d64e5c$export$b4a441ca74fcf9d2 = ()=>{
    const ref = (0, $8zHUo$react.useRef)(null);
    const removeShield = ()=>{
        const shield = ref.current?.getElementsByClassName("shield")[0];
        if (shield) {
            shield.classList.remove("pointer-events-none");
            ref.current.classList.add("mouse-over");
        }
    };
    const addShield = ()=>{
        const shield = ref.current?.getElementsByClassName("shield")[0];
        if (shield) {
            shield.classList.add("pointer-events-none");
            ref.current.classList.remove("mouse-over");
        }
    };
    const hightlightZone = (highlight = true)=>()=>{
            const className = "drag-over";
            if (highlight) ref.current?.classList.add(className);
            else ref.current?.classList.remove(className);
        };
    const dragEnterHandler = (event)=>{
        console.log("dragEnterHandler", {
            event: event
        });
    };
    const dragOverHandler = (event)=>{
        console.log("dragOverHandler", {
            event: event
        });
    };
    const dragLeaveHandler = (event)=>{
        console.log("dragLeaveHandler", {
            event: event
        });
    };
    const dragStartHandler = (event)=>{
        console.log("dragStartHandler", {
            event: event
        });
    };
    const dropHandler = (event)=>{
        console.log("dropHandler", {
            event: event
        });
    };
    function handleZoneEvents(action) {
        const preventFunc = (handler)=>{
            return (event)=>{
                event.preventDefault();
                event.stopPropagation();
                handler(event);
            };
        };
        const setEvent = (events)=>{
            Object.entries(events).forEach(([event, handler])=>ref.current[action](event, preventFunc(handler), false));
        };
        if (ref.current) {
            setEvent({
                dragenter: dragEnterHandler,
                dragover: dragOverHandler,
                dragleave: dragLeaveHandler,
                dragstart: dragStartHandler,
                drop: dropHandler
            });
            setEvent({
                dragenter: hightlightZone(),
                dragover: hightlightZone(),
                dragstart: hightlightZone(),
                dragleave: hightlightZone(false),
                drop: hightlightZone(false)
            });
            setEvent({
                mouseover: removeShield,
                mouseleave: addShield
            });
        }
    }
    (0, $8zHUo$react.useEffect)(()=>{
        handleZoneEvents("addEventListener");
        return ()=>{
            handleZoneEvents("removeEventListener");
        };
    }, []);
    const handleFiles = (files)=>{
        console.log("handleFiles", {
            files: files
        });
    };
    return /*#__PURE__*/ (0, $8zHUo$reactjsxdevruntime.jsxDEV)("div", {
        ref: ref,
        id: "drag-drop",
        className: (0, ($parcel$interopDefault($8zHUo$classnames)))(" p-6 border rounded-[1rem] flex items-center justify-center relative overflow-hidden"),
        children: /*#__PURE__*/ (0, $8zHUo$reactjsxdevruntime.jsxDEV)("div", {
            className: "shield pointer-events-none",
            children: [
                /*#__PURE__*/ (0, $8zHUo$reactjsxdevruntime.jsxDEV)("form", {
                    className: "opacity-0",
                    children: /*#__PURE__*/ (0, $8zHUo$reactjsxdevruntime.jsxDEV)("input", {
                        type: "file",
                        multiple: true,
                        accept: "image/*",
                        className: "absolute inset-0",
                        onChange: handleFiles
                    }, void 0, false, {
                        fileName: "src/image-picker/components/drag-drop/drag-drop.tsx",
                        lineNumber: 126,
                        columnNumber: 11
                    }, undefined)
                }, void 0, false, {
                    fileName: "src/image-picker/components/drag-drop/drag-drop.tsx",
                    lineNumber: 125,
                    columnNumber: 9
                }, undefined),
                /*#__PURE__*/ (0, $8zHUo$reactjsxdevruntime.jsxDEV)("div", {
                    className: "flex flex-col gap-4 items-center  pointer-events-none",
                    children: [
                        /*#__PURE__*/ (0, $8zHUo$reactjsxdevruntime.jsxDEV)("img", {
                            src: $839c8cc5f1d64e5c$var$dragDropImage.href,
                            className: "w-[5rem] h-[5rem] opacity-50 z-0",
                            alt: ""
                        }, void 0, false, {
                            fileName: "src/image-picker/components/drag-drop/drag-drop.tsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, undefined),
                        /*#__PURE__*/ (0, $8zHUo$reactjsxdevruntime.jsxDEV)("div", {
                            className: "text-[1rem] text-center opacity-50 max-w-[20rem]",
                            children: "\u0628\u0631\u0627\u06CC \u0627\u0646\u062A\u062E\u0627\u0628 \u0639\u06A9\u0633 \u06A9\u0644\u06CC\u06A9 \u06A9\u0646\u06CC\u062F \u06CC\u0627 \u0639\u06A9\u0633 \u0647\u0627 \u0631\u0627 \u0628\u0647 \u0627\u06CC\u0646\u062C\u0627 \u0628\u06A9\u0634\u06CC\u062F"
                        }, void 0, false, {
                            fileName: "src/image-picker/components/drag-drop/drag-drop.tsx",
                            lineNumber: 140,
                            columnNumber: 11
                        }, undefined)
                    ]
                }, void 0, true, {
                    fileName: "src/image-picker/components/drag-drop/drag-drop.tsx",
                    lineNumber: 134,
                    columnNumber: 9
                }, undefined)
            ]
        }, void 0, true, {
            fileName: "src/image-picker/components/drag-drop/drag-drop.tsx",
            lineNumber: 124,
            columnNumber: 7
        }, undefined)
    }, void 0, false, {
        fileName: "src/image-picker/components/drag-drop/drag-drop.tsx",
        lineNumber: 117,
        columnNumber: 5
    }, undefined);
};


const $f8622788abb4b096$var$ImagePicker = ()=>{
    return /*#__PURE__*/ (0, $8zHUo$reactjsxdevruntime.jsxDEV)((0, $839c8cc5f1d64e5c$export$b4a441ca74fcf9d2), {}, void 0, false, {
        fileName: "src/image-picker/image-picker.tsx",
        lineNumber: 6,
        columnNumber: 10
    }, undefined);
};
var $f8622788abb4b096$export$2e2bcd8739ae039 = $f8622788abb4b096$var$ImagePicker;






//# sourceMappingURL=index.js.map
