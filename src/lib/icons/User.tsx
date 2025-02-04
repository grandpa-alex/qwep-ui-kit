import React from 'react';
import { IconSVGContainerProps, IconSVGContainer } from './IconSVGContainer';

export type UserProps = IconSVGContainerProps;

export const User: React.FC<UserProps> = ({ ...rest }) => {
    return (
        <IconSVGContainer viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
            <g clipPath="url(#clip0_1632_554)">
                <path
                    d="M5 27.5C5 24.8478 6.05357 22.3043 7.92893 20.4289C9.8043 18.5536 12.3478 17.5 15 17.5C17.6522 17.5 20.1957 18.5536 22.0711 20.4289C23.9464 22.3043 25 24.8478 25 27.5H22.5C22.5 25.5109 21.7098 23.6032 20.3033 22.1967C18.8968 20.7902 16.9891 20 15 20C13.0109 20 11.1032 20.7902 9.6967 22.1967C8.29018 23.6032 7.5 25.5109 7.5 27.5H5ZM15 16.25C10.8562 16.25 7.5 12.8938 7.5 8.75C7.5 4.60625 10.8562 1.25 15 1.25C19.1438 1.25 22.5 4.60625 22.5 8.75C22.5 12.8938 19.1438 16.25 15 16.25ZM15 13.75C17.7625 13.75 20 11.5125 20 8.75C20 5.9875 17.7625 3.75 15 3.75C12.2375 3.75 10 5.9875 10 8.75C10 11.5125 12.2375 13.75 15 13.75Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath id="clip0_1632_554">
                    <rect width="30" height="30" fill="white" />
                </clipPath>
            </defs>{' '}
        </IconSVGContainer>
    );
};
