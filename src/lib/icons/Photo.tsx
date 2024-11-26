import React from 'react';
import { IconSVGContainer, IconSVGContainerProps } from './IconSVGContainer';

export type PhotoProps = IconSVGContainerProps;

export const Photo: React.FC<PhotoProps> = ({ ...rest }) => {
    return (
        <IconSVGContainer viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
            <path
                d="M8.19033 4.16667L6.52366 5.83333H3.33366V15.8333H16.667V5.83333H13.477L11.8103 4.16667H8.19033ZM7.50033 2.5H12.5003L14.167 4.16667H17.5003C17.7213 4.16667 17.9333 4.25446 18.0896 4.41074C18.2459 4.56702 18.3337 4.77899 18.3337 5V16.6667C18.3337 16.8877 18.2459 17.0996 18.0896 17.2559C17.9333 17.4122 17.7213 17.5 17.5003 17.5H2.50033C2.27931 17.5 2.06735 17.4122 1.91107 17.2559C1.75479 17.0996 1.66699 16.8877 1.66699 16.6667V5C1.66699 4.77899 1.75479 4.56702 1.91107 4.41074C2.06735 4.25446 2.27931 4.16667 2.50033 4.16667H5.83366L7.50033 2.5ZM10.0003 15C8.78475 15 7.61896 14.5171 6.75942 13.6576C5.89988 12.798 5.41699 11.6322 5.41699 10.4167C5.41699 9.20109 5.89988 8.0353 6.75942 7.17576C7.61896 6.31622 8.78475 5.83333 10.0003 5.83333C11.2159 5.83333 12.3817 6.31622 13.2412 7.17576C14.1008 8.0353 14.5837 9.20109 14.5837 10.4167C14.5837 11.6322 14.1008 12.798 13.2412 13.6576C12.3817 14.5171 11.2159 15 10.0003 15ZM10.0003 13.3333C10.7739 13.3333 11.5157 13.026 12.0627 12.4791C12.6097 11.9321 12.917 11.1902 12.917 10.4167C12.917 9.64312 12.6097 8.90125 12.0627 8.35427C11.5157 7.80729 10.7739 7.5 10.0003 7.5C9.22678 7.5 8.48491 7.80729 7.93793 8.35427C7.39095 8.90125 7.08366 9.64312 7.08366 10.4167C7.08366 11.1902 7.39095 11.9321 7.93793 12.4791C8.48491 13.026 9.22678 13.3333 10.0003 13.3333V13.3333Z"
                fill="currentColor"
            />
        </IconSVGContainer>
    );
};
