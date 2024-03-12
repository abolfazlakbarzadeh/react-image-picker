
# React Image Picker

[![Version](https://img.shields.io/badge/Version-1.1.4-green?style=flat)](https://choosealicense.com/licenses/mit/)


A useful image picker for your react.js/next.js projects :)

##

<div style="display: flex; align-items: center; gap: 16px; flex-wrap: wrap; justify-content: center;">
<div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
<img src="https://github.com/abolfazlakbarzadeh/react-image-picker/blob/main/src/images/image-1.png?raw=true" width="150">
</div>
<div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
<img src="https://github.com/abolfazlakbarzadeh/react-image-picker/blob/main/src/images/image-2.png?raw=true" width="150">
</div>
<div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
<img src="https://github.com/abolfazlakbarzadeh/react-image-picker/blob/main/src/images/image-3.png?raw=true" width="150">
</div>
<div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
<img src="https://github.com/abolfazlakbarzadeh/react-image-picker/blob/main/src/images/image-4.png?raw=true" width="150">
</div>
<div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
<img src="https://github.com/abolfazlakbarzadeh/react-image-picker/blob/main/src/images/image-5.png?raw=true" width="150">
</div>
<div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
<img src="https://github.com/abolfazlakbarzadeh/react-image-picker/blob/main/src/images/image-6.png?raw=true" width="150">
</div>

</div>

## Documentation

### Install

To install `react-image-picker`, you can use this command in you project's directory:
```bash
npm install --save @abak/react-image-picker
```

### Usage

To use image picker in simplest approach:
```js
const Component = () => {
  const [selectedFiles, setSelectedFiles] = useState[]);

  return (
    <ImagePicker
        files={selectedFiles}
        onFilesChange={setSelectedFiles}
        onChange={(files) => {}} //optional
    />
  )
}
```

To use image picker with Drag and Drop:
```js
const Component = () => {
  const [selectedFiles, setSelectedFiles] = useState[]);

  return (
    <ImagePicker
        draggable
        files={selectedFiles}
        onFilesChange={setSelectedFiles}
    />
  )
}
```

If you wanna show images those already exist:
```js
const Component = () => {
  const [selectedFiles, setSelectedFiles] = useState[]);
  const [images, setImages] = useState([]);

  return (
    <ImagePicker
        draggable
        files={selectedFiles}
        onFilesChange={setSelectedFiles}
        images={images}
        onRemoveImage={onRemoveImageHandler}
    />
  )
}
```
etc...

### Options
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `files` | Array of **File** | **Required**. To store selected files. |
| `onFilesChange` | Func | **Required**. A function that calls when new file selected. |
| `locale` | `Locale` or `string` | To change locale or change the texts used in interface. |
| `rtl`| `boolean` | To set direction, if locale is set on `fa`, the rtl will set true default. |
| `showPreview`| `boolean` | To set show preview of images. |
| `multiple`| `boolean` | To multiple selection. |
| `limit`| `number` | To set limits on the number of displays and selection of images.|
| `uploadAction`| `string` | The URL of the action that auto upload uses to upload the image, **Required IF** the uploadOnSelect is set.|
| `uploadAxiosOptions`| `AxiosRequestConfig` | The axios configs that uploader will uses for axios uploader.|
| `uploadHandler`| `IUploadHandler` | Custom handler to perform uploading.|
| `images`| `IImagePickerImage[]` | List of image object that have `id`, `path` and `name`(optional).|
| `onRemoveImage`| `(image: IImagePickerImage) => void` | When an image of `images` is removed, this func will be called.|
| `onChange`| `(files: File[]) => void` | This func will be called when a new image is selected.|

#### `IUploadHandler`
```ts
(file: File, fileID: string, options: {
    setProgress: (progress: number) => void;
    done: () => void;
    fail: () => void;
    cancel: () => void;
}) => Promise<any> | any
```
### `IImagePickerImage`
```ts
{
    id: string | number;
    path: string;
    name?: string;
}
```
## Contributing

Contributions are always welcome!


## License

[MIT](https://choosealicense.com/licenses/mit/)

