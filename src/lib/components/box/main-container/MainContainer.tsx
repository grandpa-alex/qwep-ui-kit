import { StyledScrollbarItem } from '@src/lib/common-styled-component/StyledBase';
import { useColorScheme } from '@src/lib/general';
import { TypeColorScheme } from '@src/lib/general/colors';
import React from 'react';
import { styled } from 'styled-components';

type ContainerProps = {
    as?: keyof JSX.IntrinsicElements;
    background?: string;
    $colors?: TypeColorScheme;
} & React.HTMLAttributes<HTMLDivElement>;

type SRootProps = {
    $background?: string;
    $colors: TypeColorScheme;
} & React.HTMLAttributes<HTMLDivElement>;

const SRoot = styled.div<SRootProps>`
    overflow-x: hidden;
    overflow-y: auto;
    position: relative;
    width: 100%;
    height: 100%;
    min-width: 100%;
    min-height: 100vh;
    background: ${(props) => props.$background ?? props.$colors.background};

    ${(props) =>
        StyledScrollbarItem({
            $colors: props.$colors,
        })}
`;

export const MainContainer = React.memo(
    React.forwardRef<HTMLDivElement, ContainerProps>(({ as: Component = 'div', background, $colors, ...rest }, ref) => {
        const colors = useColorScheme($colors);
        return (
            <SRoot ref={ref} as={Component} $background={background} $colors={colors} {...rest}>
                {rest.children}
            </SRoot>
        );
    })
);

//export component
export const SMainContainer = {
    Container: SRoot,
};

//export type
export namespace TMainContainer {
    export type Main = ContainerProps;
    export type SRoot = SRootProps;
}
