import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSTypography } from '@src/lib/general/styleScheme';
import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { ETextVariant, TTextVariant } from '@src/lib/types/TypeText';
import React from 'react';
import styled, { css } from 'styled-components';

type TypeStyles = {
    typography: TypeSSTypography;
};

type BaseTextProps = {
    color?: Hex;
    // as?: keyof JSX.IntrinsicElements;
    sizeVariant?: TTextVariant;
} & React.HTMLAttributes<HTMLParagraphElement>;

type SRootProps = {
    $sizeVariant: TTextVariant;
    $colors: TypeColorScheme;
    $styles: TypeStyles;
    $color?: Hex;
} & React.HTMLAttributes<HTMLParagraphElement>;

export const TEXT_SIZE = {
    [ETextVariant.TEXT]: (props: TypeSSTypography) => css`
        line-height: ${props.lineHeightText};
        font-size: ${props.text};
    `,
    [ETextVariant.SUBTEXT]: (props: TypeSSTypography) => css`
        line-height: ${props.lineHeightSubText};
        font-size: ${props.subText};
    `,
};

const SRoot = styled.p<SRootProps>`
    font-weight: ${(props) => props.$styles.typography.weightGlobal};
    color: ${(props) => props.$color ?? props.$colors.text};
    ${(props) => TEXT_SIZE[props.$sizeVariant](props.$styles.typography)};
`;

export const BaseText: React.FC<BaseTextProps> = React.memo(({ sizeVariant = ETextVariant.TEXT, color, ...rest }) => {
    const colors = useColorScheme();
    const styles = useStyleScheme(['typography']);

    return (
        <SRoot $sizeVariant={sizeVariant} $colors={colors} $styles={styles} $color={color} {...rest}>
            {rest.children}
        </SRoot>
    );
});

//export component
export const SBaseText = {
    Root: SRoot,
};

//export type
export namespace TBaseText {
    export type Styles = TypeStyles;
    export type Main = BaseTextProps;
    export type SRoot = SRootProps;
}
