import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { getColor, opacity } from '@src/lib/common/getColor';
import { itemRippleEffect } from '@src/lib/common/itemRippleEffect';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSBase, TypeSSBtn, TypeSSTypography } from '@src/lib/general/styleScheme';
import { TBaseProps, EBaseProps } from '@src/lib/types/TypeBase';
import React from 'react';
import styled, { css } from 'styled-components';

type TypeStyles = {
    base: TypeSSBase;
    btn: TypeSSBtn;
    typography: TypeSSTypography;
};

type MenuItemProps = {
    value: string;
    active?: boolean;
    sizeVariant?: TBaseProps.VariantSize;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
    color?: Hex;
    opacityHover?: opacity;
    opacityActive?: opacity;
    textColor?: Hex;
    textColorActive?: Hex;
    blocked?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void | Promise<void>;
    _isActiveHover?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

type SButtonProps = {
    $color?: Hex;
    $colors: TypeColorScheme;
    $styles: TypeStyles;
    $sizeVariant: TBaseProps.VariantSize;
    $opacityHover?: opacity;
    $opacityActive?: opacity;
    $textColor?: Hex;
    $textColorActive?: Hex;
    $active?: boolean;
    $_isActiveHover: boolean;
    $blocked?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const BTN_SIZE = {
    [EBaseProps.VariantSize.L]: (props: SButtonProps) => css`
        height: ${props.$styles.btn.btnHeight_L};
        padding: ${`${props.$styles.btn.btnPadding_Y_L} ${props.$styles.btn.btnPadding_X_L}`};
    `,
    [EBaseProps.VariantSize.M]: (props: SButtonProps) => css`
        height: ${props.$styles.btn.btnHeight_M};
        padding: ${`${props.$styles.btn.btnPadding_Y_M} ${props.$styles.btn.btnPadding_X_M}`};
    `,
};

export const SButton = styled.button<SButtonProps>`
    display: block;
    user-select: none;
    position: relative;
    overflow: hidden;
    line-height: normal;
    outline: 0;
    width: 100%;
    min-width: fit-content;
    white-space: nowrap;
    transition: background-color 400ms;
    background-color: transparent;
    font-size: ${({ $styles }) => $styles.typography.text};
    font-weight: ${(props) => props.$styles.typography.weightItem};
    border-radius: ${({ $styles }) => $styles.base.borderRadiusItem};
    cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
    border: 0;
    color: ${(props) => props.$textColor ?? props.$colors.primaryItem};
    ${(props) => BTN_SIZE[props.$sizeVariant](props)};
    ${(props) =>
        props.$blocked &&
        css`
            pointer-events: none;
        `}
    ${(props) => {
        if (props.$active) {
            return css`
                background-color: ${getColor({
                    cs: props.$colors,
                    color: props.$color ?? props.$colors.primaryItem,
                    opacity: props.$opacityActive,
                })};
                color: ${props.$textColorActive ?? props.$colors.textItem};
            `;
        }
    }};

    &:not([disabled]):hover {
        ${(props) =>
            !props.$active &&
            css`
                background-color: ${getColor({
                    cs: props.$colors,
                    color: props.$color ?? props.$colors.primaryItem,
                    opacity: props.$opacityHover ?? '20',
                })};
            `}
        transition: all 0.3s ease-in-out;
    }
`;

export const MenuItem = React.memo(
    React.forwardRef<HTMLButtonElement, MenuItemProps>(
        (
            {
                active,
                color,
                sizeVariant = EBaseProps.VariantSize.L,
                onClick,
                opacityHover,
                opacityActive,
                textColor,
                textColorActive,
                $colors,
                $styles,
                blocked,
                _isActiveHover = true,
                ...rest
            },
            ref
        ) => {
            const colors = useColorScheme($colors);
            const styles = useStyleScheme(['base', 'btn', 'typography'], $styles);

            const handleClick = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                itemRippleEffect(
                    event,
                    getColor({
                        cs: colors,
                        color: color ?? colors.textItem,
                        opacity: '40',
                    })
                );
                if (onClick) {
                    await onClick(event);
                }
            };

            return (
                <SButton
                    ref={ref}
                    $colors={colors}
                    $styles={styles}
                    $sizeVariant={sizeVariant}
                    $opacityHover={opacityHover}
                    $opacityActive={opacityActive}
                    $textColor={textColor}
                    $textColorActive={textColorActive}
                    $color={color}
                    $blocked={blocked}
                    $active={active}
                    $_isActiveHover={_isActiveHover}
                    onClick={handleClick}
                    {...rest}
                >
                    {rest.children}
                </SButton>
            );
        }
    )
);

//export component
export const SMenuItem = {
    Button: SButton,
};

//export type
export namespace TMenuItem {
    export type Styles = TypeStyles;
    export type Main = MenuItemProps;
    export type SButton = SButtonProps;
}
