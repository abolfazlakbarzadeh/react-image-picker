import "./module.css";
import {jsxDEV as $hgUW1$jsxDEV, Fragment as $hgUW1$Fragment} from "react/jsx-dev-runtime";
import {useState as $hgUW1$useState, useCallback as $hgUW1$useCallback, useMemo as $hgUW1$useMemo, useRef as $hgUW1$useRef, useEffect as $hgUW1$useEffect} from "react";
import $hgUW1$classnames from "classnames";
import {twMerge as $hgUW1$twMerge} from "tailwind-merge";
import $hgUW1$axios from "axios";












const $843874b66901ca92$export$b3f7d4725397d87e = (props)=>{
    const handleFiles = (event)=>{
        props.onChange(event.target.files);
    };
    return /*#__PURE__*/ (0, $hgUW1$jsxDEV)("div", {
        className: (0, $hgUW1$twMerge)((0, $hgUW1$classnames)("w-full h-full relative opacity-0", props.className)),
        children: /*#__PURE__*/ (0, $hgUW1$jsxDEV)("input", {
            type: "file",
            multiple: true,
            accept: "image/*",
            className: "absolute inset-0",
            onChange: handleFiles
        }, void 0, false, {
            fileName: "src/image-picker/components/file-selector/file-selector.tsx",
            lineNumber: 16,
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
const $55b0fa228d3114c9$export$b4a441ca74fcf9d2 = (props)=>{
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
        props.onDrop(props.multiple ? files : [
            files?.[0]
        ]);
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
        props.onDrop(files);
    };
    return /*#__PURE__*/ (0, $hgUW1$jsxDEV)("div", {
        ref: ref,
        id: "drag-drop",
        className: (0, $hgUW1$classnames)(" p-6 border rounded-[1rem] flex items-center justify-center relative overflow-hidden"),
        children: /*#__PURE__*/ (0, $hgUW1$jsxDEV)("div", {
            className: "shield pointer-events-none",
            children: [
                /*#__PURE__*/ (0, $hgUW1$jsxDEV)((0, $843874b66901ca92$export$b3f7d4725397d87e), {
                    multiple: true,
                    onChange: handleFiles,
                    className: "absolute inset-0"
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
                            lineNumber: 131,
                            columnNumber: 11
                        }, undefined),
                        /*#__PURE__*/ (0, $hgUW1$jsxDEV)("div", {
                            className: "text-[1rem] text-center opacity-50 max-w-[20rem]",
                            children: "\u0628\u0631\u0627\u06CC \u0627\u0646\u062A\u062E\u0627\u0628 \u0639\u06A9\u0633 \u06A9\u0644\u06CC\u06A9 \u06A9\u0646\u06CC\u062F \u06CC\u0627 \u0639\u06A9\u0633 \u0647\u0627 \u0631\u0627 \u0628\u0647 \u0627\u06CC\u0646\u062C\u0627 \u0628\u06A9\u0634\u06CC\u062F"
                        }, void 0, false, {
                            fileName: "src/image-picker/components/drag-drop/drag-drop.tsx",
                            lineNumber: 136,
                            columnNumber: 11
                        }, undefined)
                    ]
                }, void 0, true, {
                    fileName: "src/image-picker/components/drag-drop/drag-drop.tsx",
                    lineNumber: 130,
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






function $9d09422361664eea$export$21c1139956c4884f(props) {
    return /*#__PURE__*/ (0, $hgUW1$jsxDEV)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "1em",
        height: "1em",
        viewBox: "0 0 32 32",
        ...props,
        children: [
            /*#__PURE__*/ (0, $hgUW1$jsxDEV)("path", {
                fill: "currentColor",
                d: "M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2m0 26C9.4 28 4 22.6 4 16S9.4 4 16 4s12 5.4 12 12s-5.4 12-12 12"
            }, void 0, false, {
                fileName: "src/icons/carbon-close-outline.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, $hgUW1$jsxDEV)("path", {
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



const $3508605efb37992a$var$loadingImage = new URL("loading-image.1c2309b4.png", import.meta.url);
const $3508605efb37992a$export$133773870222880f = (props)=>{
    const [imageUrl, setImageUrl] = (0, $hgUW1$useState)(!props.file ? props.image?.path : $3508605efb37992a$var$loadingImage.href);
    const isFile = (0, $hgUW1$useMemo)(()=>!!props.file, []);
    const loadImage = (0, $hgUW1$useCallback)(async ()=>{
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
    (0, $hgUW1$useEffect)(()=>{
        if (props.file) loadImage();
    }, []);
    const handleRemove = ()=>{
        const payload = {
            isFile: isFile
        };
        if (!isFile) payload.image = props.image;
        else payload.file = props.file;
        props.onRemove(payload);
    };
    const name = (0, $hgUW1$useMemo)(()=>isFile ? props.file?.name : props.image?.name || "image", []);
    const layout = (0, $hgUW1$useMemo)(()=>{
        if (props.large) return /*#__PURE__*/ (0, $hgUW1$jsxDEV)("div", {
            className: "w-full"
        }, void 0, false, {
            fileName: "src/image-picker/components/preview/preview.tsx",
            lineNumber: 46,
            columnNumber: 14
        }, undefined);
        else return /*#__PURE__*/ (0, $hgUW1$jsxDEV)((0, $hgUW1$Fragment), {
            children: /*#__PURE__*/ (0, $hgUW1$jsxDEV)("div", {
                className: "flex items-center w-ful gap-2",
                children: [
                    /*#__PURE__*/ (0, $hgUW1$jsxDEV)("img", {
                        className: "w-[5rem] h-[5rem] !rounded-[.5rem] border p-2 grow-0",
                        src: imageUrl
                    }, void 0, false, {
                        fileName: "src/image-picker/components/preview/preview.tsx",
                        lineNumber: 51,
                        columnNumber: 13
                    }, undefined),
                    /*#__PURE__*/ (0, $hgUW1$jsxDEV)("div", {
                        className: "text-[.8rem] grow",
                        children: name
                    }, void 0, false, {
                        fileName: "src/image-picker/components/preview/preview.tsx",
                        lineNumber: 55,
                        columnNumber: 13
                    }, undefined),
                    /*#__PURE__*/ (0, $hgUW1$jsxDEV)((0, $9d09422361664eea$export$21c1139956c4884f), {
                        className: "shrink-0 cursor-pointer hover:scale-[1.1] transition-transform duration-100   grow-0 text-red-700",
                        fontSize: 24,
                        onClick: handleRemove
                    }, void 0, false, {
                        fileName: "src/image-picker/components/preview/preview.tsx",
                        lineNumber: 57,
                        columnNumber: 13
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/image-picker/components/preview/preview.tsx",
                lineNumber: 50,
                columnNumber: 11
            }, undefined)
        }, void 0, false);
    }, [
        props.large,
        imageUrl
    ]);
    return /*#__PURE__*/ (0, $hgUW1$jsxDEV)("div", {
        className: (0, $hgUW1$classnames)("flex items-center border rounded-[.5rem] gap-2 p-2 transition-colors duration-[.3s]", {
            "border-red-500 border-[2px] bg-red-500/[.2]": props.failUpload
        }),
        children: /*#__PURE__*/ (0, $hgUW1$jsxDEV)("div", {
            className: "flex flex-col gap-2 w-full",
            children: [
                layout,
                props.isUploading && /*#__PURE__*/ (0, $hgUW1$jsxDEV)("div", {
                    className: "w-full flex items-center gap-2 justify-between",
                    children: [
                        /*#__PURE__*/ (0, $hgUW1$jsxDEV)("div", {
                            className: "w-full h-[5px] bg-slate-100  rounded-full",
                            children: /*#__PURE__*/ (0, $hgUW1$jsxDEV)("div", {
                                className: "h-full bg-teal-600  rounded-full",
                                style: {
                                    width: `${props.uploadProgress || 0}%`
                                }
                            }, void 0, false, {
                                fileName: "src/image-picker/components/preview/preview.tsx",
                                lineNumber: 85,
                                columnNumber: 15
                            }, undefined)
                        }, void 0, false, {
                            fileName: "src/image-picker/components/preview/preview.tsx",
                            lineNumber: 81,
                            columnNumber: 13
                        }, undefined),
                        /*#__PURE__*/ (0, $hgUW1$jsxDEV)("span", {
                            className: "text-[.7rem] grow-0",
                            children: `${Math.floor(props.uploadProgress)}%`
                        }, void 0, false, {
                            fileName: "src/image-picker/components/preview/preview.tsx",
                            lineNumber: 92,
                            columnNumber: 13
                        }, undefined)
                    ]
                }, void 0, true, {
                    fileName: "src/image-picker/components/preview/preview.tsx",
                    lineNumber: 80,
                    columnNumber: 11
                }, undefined)
            ]
        }, void 0, true, {
            fileName: "src/image-picker/components/preview/preview.tsx",
            lineNumber: 77,
            columnNumber: 7
        }, undefined)
    }, void 0, false, {
        fileName: "src/image-picker/components/preview/preview.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, undefined);
};




const $fab42eb3dee39b5b$export$a0781c1cbbc5fc36 = (file)=>`${file.name}_${file.size}`;




const $6661cbb223503df2$var$abortControllers = {};
const $6661cbb223503df2$export$5130fb4c263997a4 = (id)=>{
    const controller = $6661cbb223503df2$var$abortControllers[id];
    if (controller) {
        controller.abort();
        delete $6661cbb223503df2$var$abortControllers[id];
    }
};
const $6661cbb223503df2$export$b4ba47569ccac746 = (props)=>{
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
                files.find((file)=>(0, $fab42eb3dee39b5b$export$a0781c1cbbc5fc36)(file) == id)
            ]);
    };
    return {
        async upload (files) {
            if (!props.uploadOnSelect) return;
            if (!props.uploadHandler && !props.uploadAction) throw Error("You didn't provide any upload action to upload files");
            let axios;
            if (!props.uploadHandler) axios = (0, $hgUW1$axios).create({
                baseURL: props.uploadAction
            });
            props.setUploadingFiles((uploadingFiles)=>({
                    ...uploadingFiles,
                    ...Object.fromEntries(files.map((file)=>[
                            (0, $fab42eb3dee39b5b$export$a0781c1cbbc5fc36)(file),
                            0
                        ]))
                }));
            const promises = [];
            for (const file of files){
                const fileID = (0, $fab42eb3dee39b5b$export$a0781c1cbbc5fc36)(file);
                if (props.uploadHandler) // upload by custom handler
                promises.push(props.uploadHandler(file, (0, $fab42eb3dee39b5b$export$a0781c1cbbc5fc36)(file), {
                    done: setUploadDone.bind(this, fileID, files),
                    fail: setUploadFail.bind(this, fileID),
                    setProgress: setUploadProgress.bind(this, fileID),
                    cancel: $6661cbb223503df2$export$5130fb4c263997a4.bind(this, fileID)
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
                    $6661cbb223503df2$var$abortControllers[fileID] = abortController;
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


const $9956d2773e85558f$var$ImagePicker = (props)=>{
    const [uploadingFiles, setUploadingFiles] = (0, $hgUW1$useState)({});
    const [uploadedFiles, setUploadedFiles] = (0, $hgUW1$useState)([]);
    const isLimitReached = (!!props.files.length || !!props.images?.length) && !props.multiple && typeof props.limit == "undefined" || typeof props.limit == "number" && (props.files.length >= props.limit || (props.images?.length || 0) >= props.limit);
    const isUploading = (0, $hgUW1$useCallback)((fileID)=>{
        const progress = uploadingFiles[fileID];
        if (!progress) return false;
        return progress < 100 && progress > -1;
    }, [
        uploadingFiles
    ]);
    const isUploaded = (0, $hgUW1$useCallback)((fileID)=>uploadedFiles.findIndex((file)=>(0, $fab42eb3dee39b5b$export$a0781c1cbbc5fc36)(file) == fileID) != -1, [
        uploadedFiles
    ]);
    const isFailUpload = (0, $hgUW1$useCallback)((fileID)=>{
        const progress = uploadingFiles[fileID];
        if (!progress) return false;
        return progress == -1;
    }, [
        uploadingFiles
    ]);
    const uploader = (0, $6661cbb223503df2$export$b4ba47569ccac746)({
        isUploading: isUploading,
        setUploadedFiles: setUploadedFiles,
        setUploadingFiles: setUploadingFiles,
        uploadAction: props.uploadAction,
        uploadHandler: props.uploadHandler,
        uploadOnSelect: props.uploadOnSelect,
        uploadAxiosOptions: props.uploadAxiosOptions
    });
    const handleDropFiles = (files)=>{
        props.onFilesChange((selected)=>[
                ...selected,
                ...files
            ]);
        uploader.upload(Array.from(files));
    };
    const handleRemove = (image)=>{
        if (image.isFile) {
            props.onFilesChange((files)=>[
                    ...files.filter((file)=>(0, $fab42eb3dee39b5b$export$a0781c1cbbc5fc36)(file) != (0, $fab42eb3dee39b5b$export$a0781c1cbbc5fc36)(image.file))
                ]);
            (0, $6661cbb223503df2$export$5130fb4c263997a4)((0, $fab42eb3dee39b5b$export$a0781c1cbbc5fc36)(image.file));
        } else props.onRemoveImage?.(image.image);
    };
    const previewSection = (0, $hgUW1$useMemo)(()=>{
        const fileItems = Array.from(props.files).map((file, idx)=>/*#__PURE__*/ (0, $hgUW1$jsxDEV)((0, $3508605efb37992a$export$133773870222880f), {
                // large={!props.multiple}
                file: file,
                uploaded: isUploaded((0, $fab42eb3dee39b5b$export$a0781c1cbbc5fc36)(file)),
                isUploading: isUploading((0, $fab42eb3dee39b5b$export$a0781c1cbbc5fc36)(file)),
                failUpload: isFailUpload((0, $fab42eb3dee39b5b$export$a0781c1cbbc5fc36)(file)),
                onRemove: handleRemove,
                uploadProgress: uploadingFiles[(0, $fab42eb3dee39b5b$export$a0781c1cbbc5fc36)(file)]
            }, (0, $fab42eb3dee39b5b$export$a0781c1cbbc5fc36)(file), false, {
                fileName: "src/image-picker/image-picker.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, undefined));
        const imageItems = props.images?.map((image, idx)=>/*#__PURE__*/ (0, $hgUW1$jsxDEV)((0, $3508605efb37992a$export$133773870222880f), {
                // large={!props.multiple}
                image: image,
                onRemove: handleRemove
            }, `image_${idx}`, false, {
                fileName: "src/image-picker/image-picker.tsx",
                lineNumber: 83,
                columnNumber: 9
            }, undefined)) || [];
        const items = fileItems.concat(imageItems);
        return /*#__PURE__*/ (0, $hgUW1$jsxDEV)("div", {
            className: "flex flex-col gap-4",
            children: items
        }, void 0, false, {
            fileName: "src/image-picker/image-picker.tsx",
            lineNumber: 93,
            columnNumber: 12
        }, undefined);
    }, [
        props.files,
        props.images,
        uploadingFiles,
        uploadedFiles
    ]);
    return /*#__PURE__*/ (0, $hgUW1$jsxDEV)("div", {
        className: "flex flex-col gap-5 w-[25rem]",
        children: [
            !isLimitReached && props.dragabble && /*#__PURE__*/ (0, $hgUW1$jsxDEV)((0, $55b0fa228d3114c9$export$b4a441ca74fcf9d2), {
                multiple: props.multiple,
                onDrop: handleDropFiles
            }, void 0, false, {
                fileName: "src/image-picker/image-picker.tsx",
                lineNumber: 99,
                columnNumber: 9
            }, undefined),
            props.showPreview && previewSection
        ]
    }, void 0, true, {
        fileName: "src/image-picker/image-picker.tsx",
        lineNumber: 97,
        columnNumber: 5
    }, undefined);
};
var $9956d2773e85558f$export$2e2bcd8739ae039 = $9956d2773e85558f$var$ImagePicker;






export {$9956d2773e85558f$export$2e2bcd8739ae039 as ImagePicker};
//# sourceMappingURL=module.js.map
