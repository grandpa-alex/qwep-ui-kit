import styled, { css } from 'styled-components';
import { getColorIcon } from '../common/getColor';
import { getMargin } from '../common/getMargin';
import { Hex, TypeColorScheme } from '../general/colors';
import { TypeSSIcon, TypeSSMR } from '../general/styleScheme';
import { TBaseProps, EBaseProps } from '../types/TypeBase';

export type TypeStyleIconContainer = {
    icon: TypeSSIcon;
    mr: TypeSSMR;
};

export type StyledIconContainerProps = {
    $mr?: TBaseProps.Margin;
    $color?: Hex;
    $disabled?: boolean;
    $$importantColor?: boolean;
    $colorVariant?: TBaseProps.VariantColor;
    $sizeVariant: TBaseProps.VariantSize;
    $colors: TypeColorScheme;
    $styles: TypeStyleIconContainer;
};

const ICON_SIZE = {
    [EBaseProps.VariantSize.L]: (props: StyledIconContainerProps) => css`
        width: ${props.$styles.icon.iconSize_L};
        height: ${props.$styles.icon.iconSize_L};
        min-width: ${props.$styles.icon.iconSize_L};
        min-height: ${props.$styles.icon.iconSize_L};
    `,
    [EBaseProps.VariantSize.M]: (props: StyledIconContainerProps) => css`
        width: ${props.$styles.icon.iconSize_M};
        height: ${props.$styles.icon.iconSize_M};
        min-width: ${props.$styles.icon.iconSize_M};
        min-height: ${props.$styles.icon.iconSize_M};
    `,
};

export const StyledIconContainer = styled.svg<StyledIconContainerProps>`
    display: block;
    ${(props) => getMargin(props.$styles?.mr, props.$mr)};
    transition: all 0.3s ease-in-out;

    color: ${({ $colors, $color, $colorVariant, $disabled, $$importantColor }) =>
        `${getColorIcon({ cs: $colors, color: $color, variant: $colorVariant, disabled: $disabled })} ${$$importantColor ? '!important' : ''}`};

    ${(props) => ICON_SIZE[props.$sizeVariant](props)}
`;
