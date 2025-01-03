import { BoxMenu, Icon, IconButton, MainContainer, MenuItem } from '@src/lib';
import { General } from '@src/lib';
import { useState } from 'react';
import { ShowBox } from './ShowBox';
import { ShowPopup } from './ShowPopup';
import { ShowProfile } from './ShowProfile';
import { ShowMenu } from './ShowMenu';
import { ShowIcon } from './ShowIcon';

const pages = {
    box: <ShowBox />,
    popup: <ShowPopup />,
    profile: <ShowProfile />,
    menu: <ShowMenu />,
    icons: <ShowIcon />,
};

export const Main = () => {
    const [pageName, setPageName] = useState(localStorage.getItem('page') ?? 'box');
    const { currentColorThemeName, changeColorThemeHandler } = General.useThemeContext();

    const themeChange = () => {
        if (currentColorThemeName === 'light') {
            changeColorThemeHandler('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            changeColorThemeHandler('light');
            localStorage.setItem('theme', 'light');
        }
    };

    const menuHandler = (value: string) => {
        setPageName(value);
        localStorage.setItem('page', value);
    };

    return (
        <MainContainer>
            {/* <NotificationProvider> */}
            <BoxMenu
                style={{
                    display: 'flex',
                    position: 'absolute',
                    top: '10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                }}
                activeItem={pageName}
                itemSizeVariant={'M'}
                onChangeActiveItem={menuHandler}
            >
                <MenuItem value={'box'}>Box</MenuItem>
                <MenuItem value={'popup'}>Popup</MenuItem>
                <MenuItem value={'profile'}>Profile</MenuItem>
                <MenuItem value={'menu'}>Menu</MenuItem>
                <MenuItem value={'icons'}>Icons</MenuItem>
                <IconButton onClick={themeChange}>
                    {currentColorThemeName === 'light' ? <Icon.ThemeDark /> : <Icon.ThemeLight />}
                </IconButton>
            </BoxMenu>
            {/* @ts-ignore */}
            {pages[pageName]}
            {/* </NotificationProvider> */}
        </MainContainer>
    );
};
