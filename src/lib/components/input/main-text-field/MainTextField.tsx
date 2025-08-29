import { getColorIcon } from '@src/lib/common/getColor';
import { renderIconTextField } from '@src/lib/common/renderIconItem';
import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import React, { useCallback, useMemo, useState } from 'react';
import styled, { css } from 'styled-components';
import { SBaseTextField, TBaseTextField } from '../base-text-field/BaseTextField';
import { EBaseProps } from '@src/lib/types/TypeBase';

type MainTextFieldProps = {
    iconStart?: React.ReactNode;
    iconsEnd?: React.ReactNode[];
    rootProps?: React.HTMLAttributes<HTMLDivElement>;
    iconContainerProps?: React.HTMLAttributes<HTMLDivElement>;
} & TBaseTextField.Main;

type SIconContainerProps = {
    $isStart: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export const SIconContainer = styled.div<SIconContainerProps>`
    margin: 0;
    outline: none;
    cursor: pointer;
    ${({ $isStart }) => {
        if ($isStart) {
            return css`
                padding-right: 8px;
            `;
        }
        return css`
            padding-left: 8px;
        `;
    }};
`;

export const SRoot = styled(SBaseTextField.Root)<TBaseTextField.SRoot>`
    display: inline-flex;
    align-items: center;
    ${SIconContainer} {
        display: flex;
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
                    hover: false,
                })};
        }

        &:hover svg {
            color: ${(props) =>
                getColorIcon({
                    cs: props.$colors,
                    color: props.$color,
                    disabled: props.$disabled,
                    variant: props.$colorVariant,
                    hover: true,
                })};
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
                sizeVariant = EBaseProps.VariantSize.L,
                colorVariant = EBaseProps.VariantColor.DEFAULT,
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
                if (!iconStart) return null;
                return (
                    <SIconContainer $isStart={true}>
                        {renderIconTextField({
                            icon: iconStart,
                            size: styles.inp,
                            sizeVariant,
                        })}
                    </SIconContainer>
                );
            }, [iconStart, styles, sizeVariant]);

            const renderIconsEnd = useMemo(() => {
                return iconsEnd?.map((icon, index) => (
                    <SIconContainer key={`text-field-icon-end-${index}`} $isStart={false}>
                        {renderIconTextField({
                            icon,
                            size: styles.inp,
                            sizeVariant,
                        })}
                    </SIconContainer>
                ));
            }, [iconsEnd, styles, sizeVariant]);

            return (
                <SRoot
                    $mr={mr}
                    $colors={colors}
                    $styles={styles}
                    $color={color}
                    $colorVariant={colorVariant}
                    $sizeVariant={sizeVariant}
                    $disabled={rest.disabled}
                    $blocked={rest.blocked}
                    $_isActiveHover={_isActiveHover}
                    $_isFocused={isFocused}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    {...rootProps}
                >
                    {renderIconStart}

                    <SBaseTextField.Input
                        ref={ref}
                        $styles={{ typography: styles.typography }}
                        $colors={colors}
                        $color={color}
                        $colorVariant={colorVariant}
                        {...rest}
                    />

                    {renderIconsEnd}
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
    export type SIconContainer = React.HTMLAttributes<HTMLDivElement>;
}
