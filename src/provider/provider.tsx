import React, { FC, PropsWithChildren, createContext } from "react";
import { IImagePickerProps, Locale } from "../image-picker/image-picker";
import { en, fa } from "../image-picker/locales";

//@ts-ignore
export const ProviderContext = createContext<
  IImagePickerProps & { locale: Locale; rtl: boolean }
  //@ts-ignore
>({});

export const Provider: FC<PropsWithChildren<IImagePickerProps>> = ({
  children,
  ...props
}) => {
  const locales = {
    en,
    fa,
  };
  return (
    <ProviderContext.Provider
      value={{
        ...props,
        locale: Object.assign(
          {},
          typeof props.locale == "string"
            ? //@ts-ignore
              locales[props.locale] || locales.en
            : locales.en,
          props.locale
        ),
        rtl: props.rtl || props.locale == "fa",
      }}
    >
      {children}
    </ProviderContext.Provider>
  );
};
