import React from 'react';
import { IconSVGContainerProps, IconSVGContainer } from './IconSVGContainer';

export type EditProps = IconSVGContainerProps;

export const Edit: React.FC<EditProps> = ({ ...rest }) => {
    return (
        <IconSVGContainer viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
            <path
                d="M4.16667 15.8334H5.345L13.1067 8.07174L11.9283 6.8934L4.16667 14.6551V15.8334ZM17.5 17.5001H2.5V13.9642L13.6958 2.7684C13.8521 2.61218 14.064 2.52441 14.285 2.52441C14.506 2.52441 14.7179 2.61218 14.8742 2.7684L17.2317 5.1259C17.3879 5.28218 17.4757 5.4941 17.4757 5.71507C17.4757 5.93604 17.3879 6.14796 17.2317 6.30424L7.7025 15.8334H17.5V17.5001ZM13.1067 5.71507L14.285 6.8934L15.4633 5.71507L14.285 4.53674L13.1067 5.71507Z"
                fill="currentColor"
            />
        </IconSVGContainer>
    );
};