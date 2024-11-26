import React from 'react';
import { IconSVGContainerProps, IconSVGContainer } from './IconSVGContainer';

export type StopCircleProps = IconSVGContainerProps;

export const StopCircle: React.FC<StopCircleProps> = ({ ...rest }) => {
    return (
        <IconSVGContainer viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
            <path
                d="M15 27.5C8.09625 27.5 2.5 21.9037 2.5 15C2.5 8.09625 8.09625 2.5 15 2.5C21.9037 2.5 27.5 8.09625 27.5 15C27.5 21.9037 21.9037 27.5 15 27.5ZM15 25C17.6522 25 20.1957 23.9464 22.0711 22.0711C23.9464 20.1957 25 17.6522 25 15C25 12.3478 23.9464 9.8043 22.0711 7.92893C20.1957 6.05357 17.6522 5 15 5C12.3478 5 9.8043 6.05357 7.92893 7.92893C6.05357 9.8043 5 12.3478 5 15C5 17.6522 6.05357 20.1957 7.92893 22.0711C9.8043 23.9464 12.3478 25 15 25V25ZM11.25 11.25H18.75V18.75H11.25V11.25Z"
                fill="currentColor"
            />
        </IconSVGContainer>
    );
};
