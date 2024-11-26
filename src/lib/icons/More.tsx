import React from 'react';
import { IconSVGContainerProps, IconSVGContainer } from './IconSVGContainer';

export type MoreProps = IconSVGContainerProps;

export const More: React.FC<MoreProps> = ({ ...rest }) => {
    return (
        <IconSVGContainer viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
            <path
                d="M6.25 12.5C4.875 12.5 3.75 13.625 3.75 15C3.75 16.375 4.875 17.5 6.25 17.5C7.625 17.5 8.75 16.375 8.75 15C8.75 13.625 7.625 12.5 6.25 12.5ZM23.75 12.5C22.375 12.5 21.25 13.625 21.25 15C21.25 16.375 22.375 17.5 23.75 17.5C25.125 17.5 26.25 16.375 26.25 15C26.25 13.625 25.125 12.5 23.75 12.5ZM15 12.5C13.625 12.5 12.5 13.625 12.5 15C12.5 16.375 13.625 17.5 15 17.5C16.375 17.5 17.5 16.375 17.5 15C17.5 13.625 16.375 12.5 15 12.5Z"
                fill="currentColor"
            />
        </IconSVGContainer>
    );
};
