import React from 'react';
import { IconSVGContainerProps, IconSVGContainer } from './IconSVGContainer';

export type AppFilledProps = IconSVGContainerProps;

export const AppFilled: React.FC<AppFilledProps> = ({ ...rest }) => {
    return (
        <IconSVGContainer viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
            <path
                d="M11.6667 9.09115V12.4245H8.33333V9.09115H11.6667ZM13.3333 9.09115H17.5V12.4245H13.3333V9.09115ZM11.6667 18.2578H8.33333V14.0911H11.6667V18.2578ZM13.3333 18.2578V14.0911H17.5V17.4245C17.5 17.6455 17.4122 17.8575 17.2559 18.0137C17.0996 18.17 16.8877 18.2578 16.6667 18.2578H13.3333ZM11.6667 3.25781V7.42448H8.33333V3.25781H11.6667ZM13.3333 3.25781H16.6667C16.8877 3.25781 17.0996 3.34561 17.2559 3.50189C17.4122 3.65817 17.5 3.87013 17.5 4.09115V7.42448H13.3333V3.25781ZM6.66667 9.09115V12.4245H2.5V9.09115H6.66667ZM6.66667 18.2578H3.33333C3.11232 18.2578 2.90036 18.17 2.74408 18.0137C2.5878 17.8575 2.5 17.6455 2.5 17.4245V14.0911H6.66667V18.2578ZM6.66667 3.25781V7.42448H2.5V4.09115C2.5 3.87013 2.5878 3.65817 2.74408 3.50189C2.90036 3.34561 3.11232 3.25781 3.33333 3.25781H6.66667Z"
                fill="currentColor"
            />
        </IconSVGContainer>
    );
};