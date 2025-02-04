import React from 'react';
import { IconSVGContainerProps, IconSVGContainer } from './IconSVGContainer';
import { EIconProps, TIconProps } from '../types/TypeIcon';
import { styled } from 'styled-components';

export type ArrowLineProps = {
    position?: TIconProps.IconPosition;
} & IconSVGContainerProps;

const IconSVGContainerArrowLine = styled(IconSVGContainer)<{ $rotate?: string }>`
    transform: ${(props) => props.$rotate};
`;

export const ArrowLine: React.FC<ArrowLineProps> = ({ position = EIconProps.IconPosition.TOP, ...rest }) => {
    const rotate = {
        [EIconProps.IconPosition.LEFT]: 'rotate(90deg)',
        [EIconProps.IconPosition.BOTTOM]: 'rotate(0deg)',
        [EIconProps.IconPosition.TOP]: 'rotate(180deg)',
        [EIconProps.IconPosition.RIGHT]: 'rotate(-90deg)',
    };
    return (
        <IconSVGContainerArrowLine
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            $rotate={rotate[position]}
            {...rest}
        >
            <path
                d="M16.2501 20.215L22.9551 13.51L24.7226 15.2775L15.0001 25L5.27759 15.2775L7.04509 13.51L13.7501 20.215V5H16.2501V20.215Z"
                fill="currentColor"
            />
        </IconSVGContainerArrowLine>
    );
};
