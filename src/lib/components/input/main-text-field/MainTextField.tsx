import { getColorIcon } from '@src/lib/common/getColor';
import { renderIconTextField } from '@src/lib/common/renderIconItem';
import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { EVariantColor, EVariantSize } from '@src/lib/types/TypeBase';
import { EInpVariant } from '@src/lib/types/TypeInp';
import React, { useCallback, useMemo, useState } from 'react';
import styled, { css } from 'styled-components';

import { SBaseInput } from '../base-text-field/BaseInput';
import { SBaseTextField, TBaseTextField } from '../base-text-field/BaseTextField';

type MainTextFieldProps = {
    icon?: React.ReactNode;
    iconsEnd?: React.ReactNode[];
    rootProps?: React.HTMLAttributes<HTMLDivElement>;
    iconContainerProps?: React.HTMLAttributes<HTMLDivElement> & React.ButtonHTMLAttributes<HTMLButtonElement>;
} & TBaseTextField.Main;

export const SIconContainer = styled.div`
    margin: 0;
    outline: none;
`;

export const SRoot = styled(SBaseTextField.Root)<TBaseTextField.SRoot>`
    display: inline-flex;
    align-items: center;
    ${SIconContainer} {
        display: flex;
        padding-right: 8px;
        ${(props) =>
            props.$disabled &&
            css`
                pointer-events: none;
            `};
        svg {
            color: ${(props) =>
                getColorIcon({
                    cs: props.$colors,
                    color: props.$color,
                    disabled: props.$disabled,
                    variant: props.$colorVariant,
                    hover: props.$_isFocused,
                })};
        }
    }
    &:hover {
        ${SIconContainer} {
            svg {
                color: ${(props) =>
                    getColorIcon({
                        cs: props.$colors,
                        color: props.$color,
                        disabled: props.$disabled,
                        variant: props.$colorVariant,
                        hover: props.$_isActiveHover,
                    })};
            }
        }
    }
`;

const SInput = styled(SBaseInput.Input)<TBaseTextField.SInput>`
    &:disabled {
        color: ${(props) => props.$colors.disabled};
    }

    &:not([disabled]) {
        color: ${(props) => props.$colors.subText};
        &::placeholder {
            user-select: none;
            color: ${(props) => props.$colors.lightElem};
        }
    }
`;

export const MainTextField = React.memo(
    React.forwardRef<HTMLInputElement, MainTextFieldProps>(
        (
            {
                mr,
                iconStart,
                iconsEnd,
                color,
                _isActiveHover = true,
                variant = EInpVariant.OUTLINED,
                sizeVariant = EVariantSize.L,
                colorVariant = EVariantColor.DEFAULT,
                $colors,
                $styles,
                rootProps,
                ...rest
            },
            ref
        ) => {
            const colors = useColorScheme($colors);
            const styles = useStyleScheme(['base', 'inp', 'typography', 'mr'], $styles);
            const [isFocused, setIsFocused] = useState(false);
            const handleFocus = useCallback(() => !rest.disabled && setIsFocused(true), [rest.disabled]);
            const handleBlur = useCallback(() => !rest.disabled && setIsFocused(false), [rest.disabled]);

            const renderIconStart = useMemo(() => {
                return renderIconTextField({
                    icon: iconStart,
                    size: styles.inp,
                    sizeVariant,

                    rest: { ...rest },
                });
            }, [iconStart, styles, sizeVariant, rest]);

            const renderIconsEnd = useMemo(() => {
                return iconsEnd?.map((icon, index) =>
                    renderIconTextField({
                        icon,
                        size: styles.inp,
                        sizeVariant,
                        rest: { ...rest, key: `text-field-icon-end-${index}` },
                    })
                );
            }, [iconsEnd, styles, sizeVariant, rest]);

            return (
                <SRoot
                    $mr={mr}
                    $colors={colors}
                    $styles={styles}
                    $color={color}
                    $colorVariant={colorVariant}
                    $sizeVariant={sizeVariant}
                    $variant={variant}
                    $disabled={rest.disabled}
                    $blocked={rest.blocked}
                    $_isActiveHover={_isActiveHover}
                    $_isFocused={isFocused}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    {...rootProps}
                >
                    <SIconContainer>{renderIconStart}</SIconContainer>
                    <SInput
                        ref={ref}
                        $styles={{ typography: styles.typography }}
                        $colors={colors}
                        $color={color}
                        $colorVariant={colorVariant}
                        {...rest}
                    />
                    <SIconContainer>{renderIconsEnd}</SIconContainer>
                </SRoot>
            );
        }
    )
);

//export component
export const SMainTextField = {
    Root: SRoot,
    IconContainer: SIconContainer,
};

//export type
export namespace TMainTextField {
    export type Main = MainTextFieldProps;
}
