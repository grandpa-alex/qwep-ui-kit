import {
    CSSBackgroundEffect,
    CSSBaseLayout,
    CSSBaseLayoutStart,
    CSSBlurEffect,
    CSSBoxLayout,
} from '@src/lib/common-styled-component/StyledComponentBox';
import { useColorScheme } from '@src/lib/general';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSLayout } from '@src/lib/general/styleScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { TBaseProps } from '@src/lib/types/TypeBase';
import React from 'react';
import { JSX } from 'react/jsx-runtime';
import { styled } from 'styled-components';

type TypeStyles = {
    layout: TypeSSLayout;
};
type WrapperProps = {
    wrapperBg?: Hex;
    as?: keyof JSX.IntrinsicElements;
} & React.HTMLAttributes<HTMLDivElement>;

export type BoxLayoutProps = {
    as?: keyof JSX.IntrinsicElements;
    bgStyles?: TBaseProps.BackgroundStyles;
    wrapperProps?: WrapperProps;
    $styles?: TypeStyles;
    $colors?: TypeColorScheme;
} & React.HTMLAttributes<HTMLDivElement>;

type SRootProps = {
    $styles: TypeStyles;
} & React.HTMLAttributes<HTMLDivElement>;

type SWrapperProps = {
    $bgStyles?: TBaseProps.BackgroundStyles;
    $wrapperBg?: Hex;
    $styles: TypeStyles;
    $colors: TypeColorScheme;
} & React.HTMLAttributes<HTMLDivElement>;

const SRoot = styled.div<SRootProps>`
    position: relative;
    max-width: 100%;
    ${(props) => CSSBaseLayout(props.$styles.layout)};
`;

const SWrapper = styled.div<SWrapperProps>`
    position: relative;
    margin: 0 auto;
    ${(props) => CSSBoxLayout(props.$styles.layout)};
    ${CSSBaseLayoutStart};
    ${(props) =>
        CSSBackgroundEffect({
            defaultBg: props.$colors.layoutBox,
            bg: props.$wrapperBg,
            backgroundOpacity: props.$bgStyles?.backgroundOpacity,
        })}

    ${(props) => props.$bgStyles && CSSBlurEffect(props.$bgStyles)}
`;

export const BoxLayout = React.memo(
    React.forwardRef<HTMLDivElement, BoxLayoutProps>(
        ({ as: Root = 'div', bgStyles, wrapperProps, $styles, $colors, ...rest }, ref) => {
            const colors = useColorScheme($colors);
            const styles = useStyleScheme(['layout'], $styles);

            return (
                <SRoot as={Root} ref={ref} $styles={styles} {...rest}>
                    <SWrapper $styles={styles} $colors={colors} $bgStyles={bgStyles} {...wrapperProps}>
                        {rest.children}
                    </SWrapper>
                </SRoot>
            );
        }
    )
);

//export component
export const SBoxLayout = {
    Box: SRoot,
    Wrapper: SWrapper,
};

//export type
export namespace TBoxLayout {
    export type Styles = TypeStyles;
    export type Main = BoxLayoutProps;
    export type SRoot = SRootProps;
    export type SWrapper = SWrapperProps;
}
