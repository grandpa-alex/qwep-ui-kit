import React from 'react';
import { IconSVGContainerProps, IconSVGContainer } from './IconSVGContainer';
import { EIconProps, TIconProps } from '../types/TypeIcon';

export type UploadArrowProps = { position?: TIconProps.IconPosition } & IconSVGContainerProps;

export const UploadArrow: React.FC<UploadArrowProps> = ({ position = EIconProps.IconPosition.BOTTOM, ...rest }) => {
    const rotate = {
        [EIconProps.IconPosition.LEFT]: 'rotate(-90deg)',
        [EIconProps.IconPosition.BOTTOM]: 'rotate(180deg)',
        [EIconProps.IconPosition.TOP]: 'rotate(0deg)',
        [EIconProps.IconPosition.RIGHT]: 'rotate(90deg)',
    };
    return (
        <IconSVGContainer
            style={{ transform: rotate[position] }}
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...rest}
        >
            <path
                d="M3.75 23.75H26.25V26.25H3.75V23.75ZM16.25 7.285V21.25H13.75V7.285L6.16125 14.875L4.39375 13.1075L15 2.5L25.6063 13.1062L23.8387 14.8738L16.25 7.2875V7.285Z"
                fill="currentColor"
            />
        </IconSVGContainer>
    );
};
