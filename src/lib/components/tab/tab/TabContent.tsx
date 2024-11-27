import * as T from '@radix-ui/react-tabs';
import { CSSBaseBox } from '@src/lib/common-styled-component/StyledComponentBox.ts';
import { getMargin } from '@src/lib/common/getMargin';
import { TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSBox, TypeSSMR } from '@src/lib/general/styleScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { TMargin } from '@src/lib/types/TypeBase';
import { TBoxDisplay, TBoxGapVariant, TBoxPaddingVariant, TBoxWidthVariant } from '@src/lib/types/TypeBox.ts';
import React from 'react';
import styled from 'styled-components';

type TypeStyles = {
    mr: TypeSSMR;
    box: TypeSSBox;
};

type TabContentProps = {
    boxWidthVariant?: TBoxWidthVariant;
    boxPaddingVariant?: TBoxPaddingVariant;
    boxGapVariant?: TBoxGapVariant;
    boxDisplay?: TBoxDisplay;
    mr?: TMargin;
    $styles?: TypeStyles;
    $colors?: TypeColorScheme;
} & React.ComponentPropsWithRef<typeof T.Content>;

type SRootProps = {
    $mr?: TMargin;
    $boxGapVariant?: TBoxGapVariant;
    $boxWidthVariant?: TBoxWidthVariant;
    $boxPaddingVariant?: TBoxPaddingVariant;
    $boxDisplay?: TBoxDisplay;
    $styles: TypeStyles;
} & React.ComponentPropsWithRef<typeof T.Content>;

const SRoot = styled(T.Content)<SRootProps>`
    ${(props) =>
        CSSBaseBox({
            $boxWidthVariant: props.$boxWidthVariant,
            $boxPaddingVariant: props.$boxPaddingVariant,
            $boxGapVariant: props.$boxGapVariant,
            $styles: props.$styles.box,
            $boxDisplay: props.$boxDisplay,
        })};
    ${(props) => getMargin(props.$styles.mr, props.$mr)};
`;

export const TabContent = React.memo(
    React.forwardRef<HTMLDivElement, TabContentProps>(
        ({ mr, boxWidthVariant, boxGapVariant = 'g-2', boxPaddingVariant, boxDisplay, $styles, ...rest }, ref) => {
            const styles = useStyleScheme(['mr', 'box'], $styles);

            return (
                <SRoot
                    ref={ref}
                    $mr={mr}
                    $boxGapVariant={boxGapVariant}
                    $styles={styles}
                    $boxWidthVariant={boxWidthVariant}
                    $boxPaddingVariant={boxPaddingVariant}
                    $boxDisplay={boxDisplay}
                    {...rest}
                >
                    {rest.children}
                </SRoot>
            );
        }
    )
);

//export component
export const STabContent = {
    Root: SRoot,
};

//export type
export namespace TTabContent {
    export type Main = TabContentProps;
    export type Styles = TypeStyles;
    export type SRoot = SRootProps;
}
