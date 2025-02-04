import React from 'react';
import { TypeSSBtn, TypeSSInp } from '../general/styleScheme';
import { TBaseProps, EBaseProps } from '../types/TypeBase';

type renderIconTextFieldProps = {
    icon?: React.ReactNode;
    size: TypeSSInp;
    sizeVariant: TBaseProps.VariantSize;
    rest?: object;
};

export const renderIconTextField = ({ icon, size, sizeVariant, rest }: renderIconTextFieldProps) => {
    if (!icon) return null;
    const sizeIcon = {
        [EBaseProps.VariantSize.L]: {
            width: size.inpIconSize_L,
            height: size.inpIconSize_L,
            minWidth: size.inpIconSize_L,
            minHeight: size.inpIconSize_L,
        },
        [EBaseProps.VariantSize.M]: {
            width: size.inpIconSize_M,
            height: size.inpIconSize_M,
            minWidth: size.inpIconSize_M,
            minHeight: size.inpIconSize_M,
        },
    };
    return React.cloneElement(icon as React.ReactElement, {
        //@ts-ignore
        $importantColor: Boolean(icon?.props.color),
        ...rest,
        style: {
            ...sizeIcon[sizeVariant],
        },
        //@ts-ignore
        ...icon?.props,
    });
};

type renderIconBittonProps = {
    icon?: React.ReactNode;
    size: TypeSSBtn;
    sizeVariant: TBaseProps.VariantSize;
    rest?: object;
};

export const renderIconButton = ({ icon, size, sizeVariant, rest }: renderIconBittonProps) => {
    if (!icon) return null;
    const sizeIcon = {
        [EBaseProps.VariantSize.L]: {
            width: size.btnIconSize_L,
            height: size.btnIconSize_L,
            minWidth: size.btnIconSize_L,
            minHeight: size.btnIconSize_L,
        },
        [EBaseProps.VariantSize.M]: {
            width: size.btnIconSize_M,
            height: size.btnIconSize_M,
            minWidth: size.btnIconSize_M,
            minHeight: size.btnIconSize_M,
        },
    };
    return React.cloneElement(icon as React.ReactElement, {
        //@ts-ignore
        $importantColor: Boolean(icon?.props.color),
        ...rest,
        style: {
            ...sizeIcon[sizeVariant],
        },
        //@ts-ignore
        ...icon?.props,
    });
};
