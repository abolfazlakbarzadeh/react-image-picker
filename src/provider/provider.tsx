import React, { FC, PropsWithChildren, createContext } from "react";
import { IImagePickerProps } from "../image-picker/image-picker";

//@ts-ignore
export const ProviderContext = createContext<IImagePickerProps>({});

export const Provider: FC<PropsWithChildren<IImagePickerProps>> = ({
  children,
  ...props
}) => {
  return (
    <ProviderContext.Provider value={props}>
      {children}
    </ProviderContext.Provider>
  );
};
