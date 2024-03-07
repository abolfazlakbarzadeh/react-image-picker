import "./module.css";
import {jsxDEV as $hgUW1$jsxDEV} from "react/jsx-dev-runtime";
import {useRef as $hgUW1$useRef, useEffect as $hgUW1$useEffect} from "react";
import $hgUW1$classnames from "classnames";










const $843874b66901ca92$export$b3f7d4725397d87e = (props)=>{
    const handleFiles = (event)=>{
        console.log("handleFiles", {
            files: event.target.files
        });
    };
    return /*#__PURE__*/ (0, $hgUW1$jsxDEV)("div", {
        className: "w-full h-full relative",
        children: /*#__PURE__*/ (0, $hgUW1$jsxDEV)("input", {
            type: "file",
            multiple: true,
            accept: "image/*",
            className: "absolute inset-0",
            onChange: handleFiles
        }, void 0, false, {
            fileName: "src/image-picker/components/file-selector/file-selector.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, undefined)
    }, void 0, false, {
        fileName: "src/image-picker/components/file-selector/file-selector.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, undefined);
};




// import dragDropImage from "";
const $55b0fa228d3114c9$var$dragDropImage = new URL("drag-drop.e052da2e.png", import.meta.url);
const $55b0fa228d3114c9$export$b4a441ca74fcf9d2 = ()=>{
    const ref = (0, $hgUW1$useRef)(null);
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
    // console.log("dragOverHandler", {
    //   event,
    // });
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
        const dt = event.dataTransfer;
        const files = dt?.files;
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
    (0, $hgUW1$useEffect)(()=>{
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
    return /*#__PURE__*/ (0, $hgUW1$jsxDEV)("div", {
        ref: ref,
        id: "drag-drop",
        className: (0, $hgUW1$classnames)(" p-6 border rounded-[1rem] flex items-center justify-center relative overflow-hidden"),
        children: /*#__PURE__*/ (0, $hgUW1$jsxDEV)("div", {
            className: "shield pointer-events-none",
            children: [
                /*#__PURE__*/ (0, $hgUW1$jsxDEV)((0, $843874b66901ca92$export$b3f7d4725397d87e), {
                    onChange: handleFiles,
                    multiple: true
                }, void 0, false, {
                    fileName: "src/image-picker/components/drag-drop/drag-drop.tsx",
                    lineNumber: 125,
                    columnNumber: 9
                }, undefined),
                /*#__PURE__*/ (0, $hgUW1$jsxDEV)("div", {
                    className: "flex flex-col gap-4 items-center  pointer-events-none",
                    children: [
                        /*#__PURE__*/ (0, $hgUW1$jsxDEV)("img", {
                            src: $55b0fa228d3114c9$var$dragDropImage.href,
                            className: "w-[5rem] h-[5rem] opacity-50 z-0",
                            alt: ""
                        }, void 0, false, {
                            fileName: "src/image-picker/components/drag-drop/drag-drop.tsx",
                            lineNumber: 127,
                            columnNumber: 11
                        }, undefined),
                        /*#__PURE__*/ (0, $hgUW1$jsxDEV)("div", {
                            className: "text-[1rem] text-center opacity-50 max-w-[20rem]",
                            children: "\u0628\u0631\u0627\u06CC \u0627\u0646\u062A\u062E\u0627\u0628 \u0639\u06A9\u0633 \u06A9\u0644\u06CC\u06A9 \u06A9\u0646\u06CC\u062F \u06CC\u0627 \u0639\u06A9\u0633 \u0647\u0627 \u0631\u0627 \u0628\u0647 \u0627\u06CC\u0646\u062C\u0627 \u0628\u06A9\u0634\u06CC\u062F"
                        }, void 0, false, {
                            fileName: "src/image-picker/components/drag-drop/drag-drop.tsx",
                            lineNumber: 132,
                            columnNumber: 11
                        }, undefined)
                    ]
                }, void 0, true, {
                    fileName: "src/image-picker/components/drag-drop/drag-drop.tsx",
                    lineNumber: 126,
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


const $9956d2773e85558f$var$ImagePicker = ()=>{
    return /*#__PURE__*/ (0, $hgUW1$jsxDEV)((0, $55b0fa228d3114c9$export$b4a441ca74fcf9d2), {}, void 0, false, {
        fileName: "src/image-picker/image-picker.tsx",
        lineNumber: 6,
        columnNumber: 10
    }, undefined);
};
var $9956d2773e85558f$export$2e2bcd8739ae039 = $9956d2773e85558f$var$ImagePicker;






export {$9956d2773e85558f$export$2e2bcd8739ae039 as ImagePicker};
//# sourceMappingURL=module.js.map
