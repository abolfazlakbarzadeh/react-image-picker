require("./index.css");
var $8zHUo$reactjsxdevruntime = require("react/jsx-dev-runtime");
var $8zHUo$react = require("react");
var $8zHUo$classnames = require("classnames");
var $8zHUo$tailwindmerge = require("tailwind-merge");
var $8zHUo$axios = require("axios");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "ImagePicker", () => $f8622788abb4b096$export$2e2bcd8739ae039);













const $293a6409a99d5e3b$export$84584c2a98eb6753 = {
    drag_drop_hint: "To select image click here or Drag and Drop image over here.",
    select_image: "Select image",
    preview_image_modal_title: "Preview Image"
};


const $767d8810f44814da$export$48a262eaf0aadda2 = {
    drag_drop_hint: "\u0628\u0631\u0627\u06CC \u0627\u0646\u062A\u062E\u0627\u0628 \u0639\u06A9\u0633 \u06A9\u0644\u06CC\u06A9 \u06A9\u0646\u06CC\u062F \u06CC\u0627 \u0639\u06A9\u0633 \u0631\u0627 \u0628\u0647 \u0627\u06CC\u0646\u062C\u0627 \u0628\u06A9\u0634\u06CC\u062F",
    select_image: "\u0627\u0646\u062A\u062E\u0627\u0628 \u0639\u06A9\u0633",
    preview_image_modal_title: "\u0645\u0634\u0627\u0647\u062F\u0647 \u062A\u0635\u0648\u06CC\u0631"
};




const $4867e356d9e401b7$export$b1da5abff9d0406 = /*#__PURE__*/ (0, $8zHUo$react.createContext)({});
const $4867e356d9e401b7$export$2881499e37b75b9a = ({ children: children, ...props })=>{
    const locales = {
        en: $293a6409a99d5e3b$export$84584c2a98eb6753,
        fa: $767d8810f44814da$export$48a262eaf0aadda2
    };
    return /*#__PURE__*/ (0, $8zHUo$reactjsxdevruntime.jsxDEV)($4867e356d9e401b7$export$b1da5abff9d0406.Provider, {
        value: {
            ...props,
            locale: Object.assign({}, typeof props.locale == "string" ? locales[props.locale] || locales.en : locales.en, props.locale),
            rtl: props.rtl || props.locale == "fa"
        },
        children: children
    }, void 0, false, {
        fileName: "src/provider/provider.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, undefined);
};


const $9ba0f9a5c47c04f2$export$a0781c1cbbc5fc36 = (file)=>`${file.name}_${file.size}`;
const $9ba0f9a5c47c04f2$export$37db6582fd067b92 = (files, newfiles)=>newfiles.filter((_file)=>!files.some((__file)=>$9ba0f9a5c47c04f2$export$a0781c1cbbc5fc36(_file) == $9ba0f9a5c47c04f2$export$a0781c1cbbc5fc36(__file)));
const $9ba0f9a5c47c04f2$export$63b087218d043c45 = (configs)=>configs.files.length + ~~configs.images?.length;
const $9ba0f9a5c47c04f2$export$34bc97de79737939 = (configs)=>(!!configs.files.length || !!configs.images?.length) && !configs.multiple && typeof configs.limit == "undefined" || typeof configs.limit == "number" && (configs.files.length >= configs.limit || (configs.images?.length || 0) >= configs.limit);


const $570ac3403482c4dc$export$b3f7d4725397d87e = (props)=>{
    const configs = (0, $8zHUo$react.useContext)((0, $4867e356d9e401b7$export$b1da5abff9d0406));
    const selectedSum = (0, $8zHUo$react.useMemo)(()=>(0, $9ba0f9a5c47c04f2$export$63b087218d043c45)(configs), [
        configs.files,
        configs.images
    ]);
    const handleFiles = (event)=>{
        props.onChange(event.target.files);
    };
    const counter = (0, $8zHUo$react.useMemo)(()=>{
        if (selectedSum > 1) return `(${selectedSum})`;
    }, [
        selectedSum
    ]);
    return /*#__PURE__*/ (0, $8zHUo$reactjsxdevruntime.jsxDEV)("div", {
        className: (0, $8zHUo$tailwindmerge.twMerge)((0, ($parcel$interopDefault($8zHUo$classnames)))("w-full h-full relative p-6 border rounded-[1rem]", {
            "opacity-0": configs.dragabble
        }, props.className)),
        children: [
            /*#__PURE__*/ (0, $8zHUo$reactjsxdevruntime.jsxDEV)("input", {
                type: "file",
                multiple: true,
                accept: "image/*",
                className: "absolute inset-0 opacity-0",
                onChange: handleFiles
            }, void 0, false, {
                fileName: "src/image-picker/components/file-selector/file-selector.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, $8zHUo$reactjsxdevruntime.jsxDEV)("div", {
                className: "text-typography/[.5] text-center pointer-events-none",
                children: [
                    configs.locale.select_image,
                    " ",
                    counter
                ]
            }, void 0, true, {
                fileName: "src/image-picker/components/file-selector/file-selector.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/image-picker/components/file-selector/file-selector.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, undefined);
};






// import dragDropImage from "";
const $839c8cc5f1d64e5c$var$dragDropImage = new URL("drag-drop.c2dd78b3.png", "file:" + __filename);
const $839c8cc5f1d64e5c$export$b4a441ca74fcf9d2 = (props)=>{
    const configs = (0, $8zHUo$react.useContext)((0, $4867e356d9e401b7$export$b1da5abff9d0406));
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
    const dropHandler = (droppedFiles)=>{
        const files = (0, $9ba0f9a5c47c04f2$export$37db6582fd067b92)(configs.files, Array.from(droppedFiles || []));
        if (!configs.multiple && typeof configs.limit == "undefined") props.onDrop([
            files?.[0]
        ]);
        else if (configs.multiple) props.onDrop(files);
        else if (typeof configs.limit == "number") props.onDrop(files.slice(0, configs.limit - (configs.files.length + ~~configs.images?.length)));
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
                drop: (event)=>{
                    dropHandler(event.dataTransfer?.files);
                }
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
        dropHandler(files);
    };
    return /*#__PURE__*/ (0, $8zHUo$reactjsxdevruntime.jsxDEV)("div", {
        ref: ref,
        id: "drag-drop",
        className: (0, ($parcel$interopDefault($8zHUo$classnames)))(" p-6 border rounded-[1rem] flex items-center justify-center relative overflow-hidden"),
        children: /*#__PURE__*/ (0, $8zHUo$reactjsxdevruntime.jsxDEV)("div", {
            className: "shield pointer-events-none",
            children: [
                /*#__PURE__*/ (0, $8zHUo$reactjsxdevruntime.jsxDEV)((0, $570ac3403482c4dc$export$b3f7d4725397d87e), {
                    multiple: configs.multiple,
                    onChange: handleFiles,
                    className: "absolute inset-0"
                }, void 0, false, {
                    fileName: "src/image-picker/components/drag-drop/drag-drop.tsx",
                    lineNumber: 117,
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
                            lineNumber: 123,
                            columnNumber: 11
                        }, undefined),
                        /*#__PURE__*/ (0, $8zHUo$reactjsxdevruntime.jsxDEV)("div", {
                            className: "text-[1rem] text-center opacity-50 max-w-[17rem]",
                            children: configs.locale.drag_drop_hint
                        }, void 0, false, {
                            fileName: "src/image-picker/components/drag-drop/drag-drop.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, undefined)
                    ]
                }, void 0, true, {
                    fileName: "src/image-picker/components/drag-drop/drag-drop.tsx",
                    lineNumber: 122,
                    columnNumber: 9
                }, undefined)
            ]
        }, void 0, true, {
            fileName: "src/image-picker/components/drag-drop/drag-drop.tsx",
            lineNumber: 116,
            columnNumber: 7
        }, undefined)
    }, void 0, false, {
        fileName: "src/image-picker/components/drag-drop/drag-drop.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, undefined);
};







function $b2fed9bcf31ddc71$export$914e0b886a5281f8(props) {
    return /*#__PURE__*/ (0, $8zHUo$reactjsxdevruntime.jsxDEV)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "1em",
        height: "1em",
        viewBox: "0 0 24 24",
        ...props,
        children: /*#__PURE__*/ (0, $8zHUo$reactjsxdevruntime.jsxDEV)("path", {
            fill: "currentColor",
            d: "M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"
        }, void 0, false, {
            fileName: "src/icons/mdi-trash.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "src/icons/mdi-trash.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}






const $275cb6fd79e38b77$export$c17561cb55d4db30 = (props)=>{
    return /*#__PURE__*/ (0, $8zHUo$reactjsxdevruntime.jsxDEV)("div", {
        className: (0, $8zHUo$tailwindmerge.twMerge)((0, ($parcel$interopDefault($8zHUo$classnames)))("w-full flex items-center gap-2 justify-between", props.className)),
        children: [
            /*#__PURE__*/ (0, $8zHUo$reactjsxdevruntime.jsxDEV)("div", {
                className: (0, $8zHUo$tailwindmerge.twMerge)((0, ($parcel$interopDefault($8zHUo$classnames)))("w-full h-[5px] bg-white/[.2]  rounded-full", props.progressWrapperClassName)),
                children: /*#__PURE__*/ (0, $8zHUo$reactjsxdevruntime.jsxDEV)("div", {
                    className: (0, $8zHUo$tailwindmerge.twMerge)((0, ($parcel$interopDefault($8zHUo$classnames)))("h-full bg-white rounded-full transition-all duration-[.3s]", props.progressClassName)),
                    style: {
                        width: `${props.percent || 0}%`
                    }
                }, void 0, false, {
                    fileName: "src/image-picker/components/preview/components/progress-bar/progress-bar.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, undefined)
            }, void 0, false, {
                fileName: "src/image-picker/components/preview/components/progress-bar/progress-bar.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, undefined),
            props.showPercent && /*#__PURE__*/ (0, $8zHUo$reactjsxdevruntime.jsxDEV)("span", {
                className: (0, $8zHUo$tailwindmerge.twMerge)((0, ($parcel$interopDefault($8zHUo$classnames)))("text-[.7rem] grow-0", props.percentClassName)),
                children: `${Math.floor(props.percent)}%`
            }, void 0, false, {
                fileName: "src/image-picker/components/preview/components/progress-bar/progress-bar.tsx",
                lineNumber: 37,
                columnNumber: 9
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/image-picker/components/preview/components/progress-bar/progress-bar.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, undefined);
};




const $1712531664cb6699$var$loadingImage = new URL("loading-image.7bd5d733.png", "file:" + __filename);
const $1712531664cb6699$export$133773870222880f = (props)=>{
    const [imageUrl, setImageUrl] = (0, $8zHUo$react.useState)(!props.file ? props.image?.path : $1712531664cb6699$var$loadingImage.href);
    const isFile = (0, $8zHUo$react.useMemo)(()=>!!props.file, []);
    const loadImage = (0, $8zHUo$react.useCallback)(async ()=>{
        const arrayBuffer = await props.file?.arrayBuffer();
        if (arrayBuffer) {
            var arrayBufferView = new Uint8Array(arrayBuffer);
            var blob = new Blob([
                arrayBufferView
            ], {
                type: props.file?.type
            });
            const url = window.URL.createObjectURL(blob);
            setImageUrl(url);
        }
    }, []);
    (0, $8zHUo$react.useEffect)(()=>{
        if (props.file) loadImage();
    }, []);
    const handleRemove = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        const payload = {
            isFile: isFile
        };
        if (!isFile) payload.image = props.image;
        else payload.file = props.file;
        props.onRemove(payload);
    };
    const name = (0, $8zHUo$react.useMemo)(()=>isFile ? props.file?.name : props.image?.name || "image", []);
    const handleImageModal = ()=>{
        props.onShowInModal({
            url: imageUrl,
            name: name
        });
    };
    const layout = (0, $8zHUo$react.useMemo)(()=>{
        if (props.large) return /*#__PURE__*/ (0, $8zHUo$reactjsxdevruntime.jsxDEV)((0, $8zHUo$reactjsxdevruntime.Fragment), {
            children: /*#__PURE__*/ (0, $8zHUo$reactjsxdevruntime.jsxDEV)("div", {
                className: "items-center relative w-full",
                onClick: handleImageModal,
                children: [
                    /*#__PURE__*/ (0, $8zHUo$reactjsxdevruntime.jsxDEV)("img", {
                        className: "h-[10rem] w-full grow-0 object-cover",
                        src: imageUrl
                    }, void 0, false, {
                        fileName: "src/image-picker/components/preview/preview.tsx",
                        lineNumber: 60,
                        columnNumber: 13
                    }, undefined),
                    /*#__PURE__*/ (0, $8zHUo$reactjsxdevruntime.jsxDEV)("div", {
                        className: "absolute bottom-0 inset-0 bg-gradient-to-t from-black/[.8] to-transparent flex flex-col justify-end p-2 gap-2",
                        children: [
                            /*#__PURE__*/ (0, $8zHUo$reactjsxdevruntime.jsxDEV)("div", {
                                children: props.isUploading && /*#__PURE__*/ (0, $8zHUo$reactjsxdevruntime.jsxDEV)((0, $275cb6fd79e38b77$export$c17561cb55d4db30), {
                                    showPercent: true,
                                    percent: props.uploadProgress,
                                    percentClassName: "text-white"
                                }, void 0, false, {
                                    fileName: "src/image-picker/components/preview/preview.tsx",
                                    lineNumber: 67,
                                    columnNumber: 19
                                }, undefined)
                            }, void 0, false, {
                                fileName: "src/image-picker/components/preview/preview.tsx",
                                lineNumber: 65,
                                columnNumber: 15
                            }, undefined),
                            /*#__PURE__*/ (0, $8zHUo$reactjsxdevruntime.jsxDEV)("div", {
                                className: "flex items-center text-white",
                                children: [
                                    /*#__PURE__*/ (0, $8zHUo$reactjsxdevruntime.jsxDEV)("div", {
                                        className: "text-[.9rem] h-[1rem] w-full grow relative",
                                        children: /*#__PURE__*/ (0, $8zHUo$reactjsxdevruntime.jsxDEV)("div", {
                                            className: "absolute inset-0",
                                            children: name
                                        }, void 0, false, {
                                            fileName: "src/image-picker/components/preview/preview.tsx",
                                            lineNumber: 76,
                                            columnNumber: 19
                                        }, undefined)
                                    }, void 0, false, {
                                        fileName: "src/image-picker/components/preview/preview.tsx",
                                        lineNumber: 75,
                                        columnNumber: 17
                                    }, undefined),
                                    /*#__PURE__*/ (0, $8zHUo$reactjsxdevruntime.jsxDEV)((0, $b2fed9bcf31ddc71$export$914e0b886a5281f8), {
                                        className: "shrink-0 cursor-pointer hover:scale-[1.1] transition-transform duration-100   grow-0 m-1 active:scale-[.95]",
                                        fontSize: 20,
                                        onClick: handleRemove
                                    }, void 0, false, {
                                        fileName: "src/image-picker/components/preview/preview.tsx",
                                        lineNumber: 79,
                                        columnNumber: 17
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "src/image-picker/components/preview/preview.tsx",
                                lineNumber: 74,
                                columnNumber: 15
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "src/image-picker/components/preview/preview.tsx",
                        lineNumber: 64,
                        columnNumber: 13
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/image-picker/components/preview/preview.tsx",
                lineNumber: 56,
                columnNumber: 11
            }, undefined)
        }, void 0, false);
        else return /*#__PURE__*/ (0, $8zHUo$reactjsxdevruntime.jsxDEV)((0, $8zHUo$reactjsxdevruntime.Fragment), {
            children: [
                /*#__PURE__*/ (0, $8zHUo$reactjsxdevruntime.jsxDEV)("div", {
                    className: "flex items-center w-ful gap-2 justify-between p-2",
                    onClick: handleImageModal,
                    children: [
                        /*#__PURE__*/ (0, $8zHUo$reactjsxdevruntime.jsxDEV)("img", {
                            className: "w-[5rem] h-[5rem] !rounded-[.5rem] border p-2 grow-0",
                            src: imageUrl
                        }, void 0, false, {
                            fileName: "src/image-picker/components/preview/preview.tsx",
                            lineNumber: 96,
                            columnNumber: 13
                        }, undefined),
                        /*#__PURE__*/ (0, $8zHUo$reactjsxdevruntime.jsxDEV)("div", {
                            className: "text-[.9rem] w-full h-4 grow relative overflow-hidden",
                            children: /*#__PURE__*/ (0, $8zHUo$reactjsxdevruntime.jsxDEV)("div", {
                                className: "absolute inset-0",
                                title: name,
                                children: name
                            }, void 0, false, {
                                fileName: "src/image-picker/components/preview/preview.tsx",
                                lineNumber: 101,
                                columnNumber: 15
                            }, undefined)
                        }, void 0, false, {
                            fileName: "src/image-picker/components/preview/preview.tsx",
                            lineNumber: 100,
                            columnNumber: 13
                        }, undefined),
                        /*#__PURE__*/ (0, $8zHUo$reactjsxdevruntime.jsxDEV)((0, $b2fed9bcf31ddc71$export$914e0b886a5281f8), {
                            className: "shrink-0 cursor-pointer hover:scale-[1.1] transition-transform duration-100   grow-0 text-red-700 mr-2 active:scale-[.95]",
                            fontSize: 24,
                            onClick: handleRemove
                        }, void 0, false, {
                            fileName: "src/image-picker/components/preview/preview.tsx",
                            lineNumber: 106,
                            columnNumber: 13
                        }, undefined)
                    ]
                }, void 0, true, {
                    fileName: "src/image-picker/components/preview/preview.tsx",
                    lineNumber: 92,
                    columnNumber: 11
                }, undefined),
                props.isUploading && /*#__PURE__*/ (0, $8zHUo$reactjsxdevruntime.jsxDEV)("div", {
                    className: "px-2 pb-2",
                    children: /*#__PURE__*/ (0, $8zHUo$reactjsxdevruntime.jsxDEV)((0, $275cb6fd79e38b77$export$c17561cb55d4db30), {
                        percent: props.uploadProgress,
                        progressClassName: "bg-cyan-500",
                        progressWrapperClassName: "bg-cyan-50",
                        showPercent: true
                    }, void 0, false, {
                        fileName: "src/image-picker/components/preview/preview.tsx",
                        lineNumber: 114,
                        columnNumber: 15
                    }, undefined)
                }, void 0, false, {
                    fileName: "src/image-picker/components/preview/preview.tsx",
                    lineNumber: 113,
                    columnNumber: 13
                }, undefined)
            ]
        }, void 0, true);
    }, [
        props.large,
        props.isUploading,
        imageUrl,
        props.uploadProgress,
        props.uploaded
    ]);
    return /*#__PURE__*/ (0, $8zHUo$reactjsxdevruntime.jsxDEV)("div", {
        className: (0, ($parcel$interopDefault($8zHUo$classnames)))("flex items-center border rounded-[.5rem] overflow-hidden gap-2 transition-colors duration-[.3s]", {
            "border-red-500 border-[2px] bg-red-500/[.2]": props.failUpload
        }),
        children: /*#__PURE__*/ (0, $8zHUo$reactjsxdevruntime.jsxDEV)("div", {
            className: "flex flex-col gap-2 w-full",
            children: layout
        }, void 0, false, {
            fileName: "src/image-picker/components/preview/preview.tsx",
            lineNumber: 142,
            columnNumber: 7
        }, undefined)
    }, void 0, false, {
        fileName: "src/image-picker/components/preview/preview.tsx",
        lineNumber: 134,
        columnNumber: 5
    }, undefined);
};







const $ad2d0e4d43ca0263$var$abortControllers = {};
const $ad2d0e4d43ca0263$export$5130fb4c263997a4 = (id)=>{
    const controller = $ad2d0e4d43ca0263$var$abortControllers[id];
    if (controller) {
        controller.abort();
        delete $ad2d0e4d43ca0263$var$abortControllers[id];
    }
};
const $ad2d0e4d43ca0263$export$b4ba47569ccac746 = (props)=>{
    const setUploadingItemData = (id, data)=>{
        props.setUploadingFiles((uploading)=>({
                ...Object.fromEntries(Object.entries(uploading).map(([fileID, prg])=>id == fileID ? [
                        fileID,
                        data
                    ] : [
                        fileID,
                        prg
                    ]))
            }));
    };
    const setUploadProgress = (id, progress)=>{
        setUploadingItemData(id, progress);
    };
    const setUploadFail = (id)=>{
        setUploadingItemData(id, -1);
    };
    const setUploadDone = (id, files)=>{
        setUploadingItemData(id, 100);
        props.setUploadedFiles((uploaded)=>[
                ...uploaded,
                files.find((file)=>(0, $9ba0f9a5c47c04f2$export$a0781c1cbbc5fc36)(file) == id)
            ]);
    };
    return {
        async upload (files) {
            if (!props.uploadOnSelect) return;
            if (!props.uploadHandler && !props.uploadAction) throw Error("You didn't provide any upload action to upload files");
            let axios;
            if (!props.uploadHandler) axios = (0, ($parcel$interopDefault($8zHUo$axios))).create({
                baseURL: props.uploadAction
            });
            props.setUploadingFiles((uploadingFiles)=>({
                    ...uploadingFiles,
                    ...Object.fromEntries(files.map((file)=>[
                            (0, $9ba0f9a5c47c04f2$export$a0781c1cbbc5fc36)(file),
                            0
                        ]))
                }));
            const promises = [];
            for (const file of files){
                const fileID = (0, $9ba0f9a5c47c04f2$export$a0781c1cbbc5fc36)(file);
                if (props.uploadHandler) // upload by custom handler
                promises.push(props.uploadHandler(file, (0, $9ba0f9a5c47c04f2$export$a0781c1cbbc5fc36)(file), {
                    done: setUploadDone.bind(this, fileID, files),
                    fail: setUploadFail.bind(this, fileID),
                    setProgress: setUploadProgress.bind(this, fileID),
                    cancel: $ad2d0e4d43ca0263$export$5130fb4c263997a4.bind(this, fileID)
                }));
                else {
                    // upload by default handler
                    const form = new FormData();
                    const abortController = new AbortController();
                    form.append("file", file);
                    let uploadOptions = {
                        onUploadProgress: (progEvent)=>{
                            setUploadProgress(fileID, progEvent.loaded * 100 / progEvent.total);
                        },
                        signal: abortController.signal
                    };
                    if (props.uploadAxiosOptions) uploadOptions = Object.assign({}, uploadOptions, props.uploadAxiosOptions);
                    promises.push(axios.post("/", form, uploadOptions).then((data)=>{
                        setUploadDone(fileID, files);
                        return data;
                    }).catch((err)=>{
                        setUploadFail(fileID);
                        return Promise.reject(err);
                    }));
                    $ad2d0e4d43ca0263$var$abortControllers[fileID] = abortController;
                }
            }
            try {
                const result = await Promise.all(promises);
                return result;
            } catch (error) {
                console.error("Upload failed!");
            }
        }
    };
};









function $40ca87a7eda3004b$export$21c1139956c4884f(props) {
    return /*#__PURE__*/ (0, $8zHUo$reactjsxdevruntime.jsxDEV)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "1em",
        height: "1em",
        viewBox: "0 0 32 32",
        ...props,
        children: [
            /*#__PURE__*/ (0, $8zHUo$reactjsxdevruntime.jsxDEV)("path", {
                fill: "currentColor",
                d: "M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2m0 26C9.4 28 4 22.6 4 16S9.4 4 16 4s12 5.4 12 12s-5.4 12-12 12"
            }, void 0, false, {
                fileName: "src/icons/carbon-close-outline.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, $8zHUo$reactjsxdevruntime.jsxDEV)("path", {
                fill: "currentColor",
                d: "M21.4 23L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z"
            }, void 0, false, {
                fileName: "src/icons/carbon-close-outline.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/icons/carbon-close-outline.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}



const $2deccf817de11e2a$export$183013bc7f2f4b5e = (props)=>{
    const configs = (0, $8zHUo$react.useContext)((0, $4867e356d9e401b7$export$b1da5abff9d0406));
    const [loaded, setLoaded] = (0, $8zHUo$react.useState)(false);
    const onLoadHandler = ()=>{
        setLoaded(true);
    };
    (0, $8zHUo$react.useEffect)(()=>{
        setLoaded(props.open);
    }, [
        props.open
    ]);
    return /*#__PURE__*/ (0, $8zHUo$reactjsxdevruntime.jsxDEV)("div", {
        className: (0, $8zHUo$tailwindmerge.twMerge)((0, ($parcel$interopDefault($8zHUo$classnames)))("absolute inset-0", {
            "pointer-events-none": !props.open && !loaded
        })),
        children: [
            /*#__PURE__*/ (0, $8zHUo$reactjsxdevruntime.jsxDEV)("span", {
                className: (0, $8zHUo$tailwindmerge.twMerge)((0, ($parcel$interopDefault($8zHUo$classnames)))("absolute inset-0 bg-black/[.2] transition-opacity duration-[.3s] z-0", {
                    "opacity-0": !props.open
                })),
                onClick: props.onClose
            }, void 0, false, {
                fileName: "src/image-picker/components/preview-modal/preview-modal.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, undefined),
            props.open && /*#__PURE__*/ (0, $8zHUo$reactjsxdevruntime.jsxDEV)("div", {
                className: (0, $8zHUo$tailwindmerge.twMerge)((0, ($parcel$interopDefault($8zHUo$classnames)))("max-w-[90%] max-h-[90%] absolute translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%] p-2 rounded-[.5rem] border bg-white z-10 flex flex-col gap-2 transition-opacity duration-[.3s]", {
                    "opacity-0": !loaded
                })),
                children: [
                    /*#__PURE__*/ (0, $8zHUo$reactjsxdevruntime.jsxDEV)("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, $8zHUo$reactjsxdevruntime.jsxDEV)("div", {
                                className: "text-typography text-[.8rem]",
                                children: configs.locale.preview_image_modal_title
                            }, void 0, false, {
                                fileName: "src/image-picker/components/preview-modal/preview-modal.tsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, undefined),
                            /*#__PURE__*/ (0, $8zHUo$reactjsxdevruntime.jsxDEV)((0, $40ca87a7eda3004b$export$21c1139956c4884f), {
                                fontSize: 20,
                                className: "text-typography cursor-pointer",
                                onClick: props.onClose
                            }, void 0, false, {
                                fileName: "src/image-picker/components/preview-modal/preview-modal.tsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "src/image-picker/components/preview-modal/preview-modal.tsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, undefined),
                    /*#__PURE__*/ (0, $8zHUo$reactjsxdevruntime.jsxDEV)("img", {
                        src: props.url,
                        className: "w-full h-full rounded-[1rem]",
                        onLoad: onLoadHandler
                    }, void 0, false, {
                        fileName: "src/image-picker/components/preview-modal/preview-modal.tsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, undefined),
                    !!props.name && /*#__PURE__*/ (0, $8zHUo$reactjsxdevruntime.jsxDEV)("div", {
                        className: "text-typography text-[.8rem] text-center",
                        children: props.name
                    }, void 0, false, {
                        fileName: "src/image-picker/components/preview-modal/preview-modal.tsx",
                        lineNumber: 63,
                        columnNumber: 13
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/image-picker/components/preview-modal/preview-modal.tsx",
                lineNumber: 37,
                columnNumber: 9
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/image-picker/components/preview-modal/preview-modal.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, undefined);
};





const $f8622788abb4b096$var$ImagePicker = ()=>{
    const configs = (0, $8zHUo$react.useContext)((0, $4867e356d9e401b7$export$b1da5abff9d0406));
    const [uploadingFiles, setUploadingFiles] = (0, $8zHUo$react.useState)({});
    const [previewModal, setPreviewModal] = (0, $8zHUo$react.useState)();
    const [uploadedFiles, setUploadedFiles] = (0, $8zHUo$react.useState)([]);
    (0, $8zHUo$react.useEffect)(()=>{
        configs.onChange?.(configs.files);
    }, [
        configs.files,
        configs.onChange
    ]);
    const selectedSum = (0, $8zHUo$react.useMemo)(()=>(0, $9ba0f9a5c47c04f2$export$63b087218d043c45)(configs), [
        configs.files,
        configs.images
    ]);
    const isLimitReached = (0, $8zHUo$react.useMemo)(()=>(0, $9ba0f9a5c47c04f2$export$34bc97de79737939)(configs), [
        configs.files,
        configs.images,
        configs.multiple,
        configs.limit
    ]);
    const isUploading = (0, $8zHUo$react.useCallback)((fileID)=>{
        const progress = uploadingFiles[fileID];
        if (typeof progress == "undefined") return false;
        return progress < 100 && progress > -1;
    }, [
        uploadingFiles
    ]);
    const isUploaded = (0, $8zHUo$react.useCallback)((fileID)=>uploadedFiles.findIndex((file)=>(0, $9ba0f9a5c47c04f2$export$a0781c1cbbc5fc36)(file) == fileID) != -1, [
        uploadedFiles
    ]);
    const isFailUpload = (0, $8zHUo$react.useCallback)((fileID)=>{
        const progress = uploadingFiles[fileID];
        if (!progress) return false;
        return progress == -1;
    }, [
        uploadingFiles
    ]);
    const uploader = (0, $ad2d0e4d43ca0263$export$b4ba47569ccac746)({
        isUploading: isUploading,
        setUploadedFiles: setUploadedFiles,
        setUploadingFiles: setUploadingFiles,
        uploadAction: configs.uploadAction,
        uploadHandler: configs.uploadHandler,
        uploadOnSelect: configs.uploadOnSelect,
        uploadAxiosOptions: configs.uploadAxiosOptions
    });
    const handleDropFiles = (files)=>{
        configs.onFilesChange((selected)=>[
                ...selected,
                ...files
            ]);
        uploader.upload(Array.from(files));
    };
    const handleRemove = (image)=>{
        if (image.isFile) {
            configs.onFilesChange((files)=>[
                    ...files.filter((file)=>(0, $9ba0f9a5c47c04f2$export$a0781c1cbbc5fc36)(file) != (0, $9ba0f9a5c47c04f2$export$a0781c1cbbc5fc36)(image.file))
                ]);
            (0, $ad2d0e4d43ca0263$export$5130fb4c263997a4)((0, $9ba0f9a5c47c04f2$export$a0781c1cbbc5fc36)(image.file));
        } else configs.onRemoveImage?.(image.image);
    };
    const previewSection = (0, $8zHUo$react.useMemo)(()=>{
        const fileItems = Array.from(configs.files).map((file, idx)=>/*#__PURE__*/ (0, $8zHUo$reactjsxdevruntime.jsxDEV)((0, $1712531664cb6699$export$133773870222880f), {
                large: !configs.multiple && !configs.limit,
                file: file,
                uploaded: isUploaded((0, $9ba0f9a5c47c04f2$export$a0781c1cbbc5fc36)(file)),
                isUploading: isUploading((0, $9ba0f9a5c47c04f2$export$a0781c1cbbc5fc36)(file)),
                failUpload: isFailUpload((0, $9ba0f9a5c47c04f2$export$a0781c1cbbc5fc36)(file)),
                onRemove: handleRemove,
                uploadProgress: uploadingFiles[(0, $9ba0f9a5c47c04f2$export$a0781c1cbbc5fc36)(file)],
                onShowInModal: (url)=>setPreviewModal(url)
            }, (0, $9ba0f9a5c47c04f2$export$a0781c1cbbc5fc36)(file), false, {
                fileName: "src/image-picker/image-picker.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, undefined));
        const imageItems = configs.images?.map((image, idx)=>/*#__PURE__*/ (0, $8zHUo$reactjsxdevruntime.jsxDEV)((0, $1712531664cb6699$export$133773870222880f), {
                large: !configs.multiple && !configs.limit,
                image: image,
                onRemove: handleRemove,
                onShowInModal: (url)=>setPreviewModal(url)
            }, `image_${idx}`, false, {
                fileName: "src/image-picker/image-picker.tsx",
                lineNumber: 103,
                columnNumber: 9
            }, undefined)) || [];
        const items = fileItems.concat(imageItems);
        return /*#__PURE__*/ (0, $8zHUo$reactjsxdevruntime.jsxDEV)("div", {
            className: "flex flex-col gap-4",
            children: items
        }, void 0, false, {
            fileName: "src/image-picker/image-picker.tsx",
            lineNumber: 114,
            columnNumber: 12
        }, undefined);
    }, [
        configs.files,
        configs.images,
        uploadingFiles,
        uploadedFiles
    ]);
    const uploadInterface = (0, $8zHUo$react.useMemo)(()=>{
        if (!isLimitReached) {
            if (configs.dragabble) return /*#__PURE__*/ (0, $8zHUo$reactjsxdevruntime.jsxDEV)((0, $839c8cc5f1d64e5c$export$b4a441ca74fcf9d2), {
                onDrop: handleDropFiles
            }, selectedSum, false, {
                fileName: "src/image-picker/image-picker.tsx",
                lineNumber: 120,
                columnNumber: 16
            }, undefined);
            else return /*#__PURE__*/ (0, $8zHUo$reactjsxdevruntime.jsxDEV)((0, $570ac3403482c4dc$export$b3f7d4725397d87e), {
                onChange: handleDropFiles
            }, selectedSum, false, {
                fileName: "src/image-picker/image-picker.tsx",
                lineNumber: 122,
                columnNumber: 16
            }, undefined);
        }
    }, [
        selectedSum,
        isLimitReached
    ]);
    return /*#__PURE__*/ (0, $8zHUo$reactjsxdevruntime.jsxDEV)("div", {
        className: "flex flex-col gap-5",
        style: {
            direction: configs.rtl ? "rtl" : "ltr"
        },
        children: [
            uploadInterface,
            configs.showPreview && previewSection,
            /*#__PURE__*/ (0, $8zHUo$reactjsxdevruntime.jsxDEV)((0, $2deccf817de11e2a$export$183013bc7f2f4b5e), {
                open: !!previewModal,
                ...previewModal,
                onClose: ()=>setPreviewModal(undefined)
            }, void 0, false, {
                fileName: "src/image-picker/image-picker.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/image-picker/image-picker.tsx",
        lineNumber: 127,
        columnNumber: 5
    }, undefined);
};
const $f8622788abb4b096$var$WithProvider = (props)=>/*#__PURE__*/ (0, $8zHUo$reactjsxdevruntime.jsxDEV)((0, $4867e356d9e401b7$export$2881499e37b75b9a), {
        ...props,
        children: /*#__PURE__*/ (0, $8zHUo$reactjsxdevruntime.jsxDEV)($f8622788abb4b096$var$ImagePicker, {}, void 0, false, {
            fileName: "src/image-picker/image-picker.tsx",
            lineNumber: 146,
            columnNumber: 5
        }, undefined)
    }, void 0, false, {
        fileName: "src/image-picker/image-picker.tsx",
        lineNumber: 145,
        columnNumber: 3
    }, undefined);
var $f8622788abb4b096$export$2e2bcd8739ae039 = $f8622788abb4b096$var$WithProvider;






//# sourceMappingURL=index.js.map
