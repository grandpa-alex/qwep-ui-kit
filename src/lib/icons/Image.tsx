import React from 'react';
import { IconSVGContainerProps, IconSVGContainer } from './IconSVGContainer';

export type ImageProps = IconSVGContainerProps;

export const Image: React.FC<ImageProps> = ({ ...rest }) => {
    return (
        <IconSVGContainer viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
            <path
                d="M6.035 26.25L6.01 26.275L5.98375 26.25H3.74C3.41102 26.2497 3.09562 26.1187 2.86311 25.886C2.6306 25.6533 2.5 25.3377 2.5 25.0087V4.99125C2.50229 4.66297 2.63363 4.34877 2.86564 4.11652C3.09766 3.88427 3.41173 3.75262 3.74 3.75H26.26C26.945 3.75 27.5 4.30625 27.5 4.99125V25.0087C27.4977 25.337 27.3664 25.6512 27.1344 25.8835C26.9023 26.1157 26.5883 26.2474 26.26 26.25H6.035V26.25ZM25 18.75V6.25H5V23.75L17.5 11.25L25 18.75ZM25 22.285L17.5 14.785L8.535 23.75H25V22.285ZM10 13.75C9.33696 13.75 8.70107 13.4866 8.23223 13.0178C7.76339 12.5489 7.5 11.913 7.5 11.25C7.5 10.587 7.76339 9.95107 8.23223 9.48223C8.70107 9.01339 9.33696 8.75 10 8.75C10.663 8.75 11.2989 9.01339 11.7678 9.48223C12.2366 9.95107 12.5 10.587 12.5 11.25C12.5 11.913 12.2366 12.5489 11.7678 13.0178C11.2989 13.4866 10.663 13.75 10 13.75Z"
                fill="currentColor"
            />
        </IconSVGContainer>
    );
};
