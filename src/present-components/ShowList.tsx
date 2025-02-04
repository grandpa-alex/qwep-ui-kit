import { Box, CardBox, Icon, MenuItemList, MenuList, Paragraph, Separator } from '@src/lib';
import { useColorScheme } from '@src/lib/general';
import React from 'react';
import { styled } from 'styled-components';

const MenuCard = styled(CardBox)`
    position: fixed;
    top: 0%;
    left: 10%;
    height: 100vh;
    width: 250px;
    grid-template-rows: min-content min-content max-content;
`;

const MenuCardHidden = styled(CardBox)`
    position: fixed;
    overflow: hidden;
    top: 0%;
    left: 0%;
    height: 100vh;
    width: 52px;
    grid-template-rows: min-content min-content max-content;
`;

const WorkspaceName = styled(Paragraph)`
    font-weight: 600;
`;

const parseNoWrapText = (text: string): JSX.Element => {
    const parts = text.split('/#br/');

    return (
        <React.Fragment>
            {parts.map((part, index) => (
                <React.Fragment key={index}>
                    {part}
                    {index < parts.length - 1 && <br />}
                </React.Fragment>
            ))}
        </React.Fragment>
    );
};

export const ShowList = () => {
    const colors = useColorScheme();

    return (
        <>
            <MenuCard boxDisplay={'grid'} boxShadowVariant={'M'}>
                <Box boxPaddingVariant={'p-3'}>
                    <WorkspaceName mr={'mb-3'} color={colors.lightElem}>
                        Сумотори
                    </WorkspaceName>
                    <Separator />
                </Box>
                <MenuList title={'ПРИЛОЖЕНИЯ'} boxPaddingVariant={'p-4'}>
                    <MenuItemList
                        role={'button'}
                        isNoWrapSubTitle
                        isNoWrapTitle
                        icon={<Icon.QWEPFilled />}
                        title={'QWEP'}
                        subTitle={parseNoWrapText('Проценка, прайсы,/#br/заказы, ассистент')}
                    />
                    <MenuItemList
                        isNoWrapSubTitle
                        isNoWrapTitle
                        icon={<Icon.BarChartFilled />}
                        title={'DATA'}
                        subTitle={parseNoWrapText('Аналитика цен,/#br/работа с аналогами')}
                    />
                    <MenuItemList
                        disabled
                        isNoWrapSubTitle
                        isNoWrapTitle
                        role={'button'}
                        icon={<Icon.UserFilled />}
                        title={'UCS'}
                        subTitle={parseNoWrapText('Контроль эффективности/#br/процесса закупок')}
                    />
                    <MenuItemList
                        isNoWrapSubTitle
                        isNoWrapTitle
                        role={'button'}
                        icon={<Icon.AppFilled />}
                        title={'Панель управления'}
                        subTitle={parseNoWrapText('Администрирование/#br/пользователей')}
                    />
                </MenuList>
                <MenuList title={'КОМПАНИИ'}>
                    <MenuItemList
                        isNoWrapSubTitle
                        isNoWrapTitle
                        role={'button'}
                        icon={<Icon.SettingsFilled />}
                        title={'Настройки компании'}
                        subTitle={'Редактирование компании'}
                    />
                    <MenuItemList
                        isNoWrapSubTitle
                        isNoWrapTitle
                        icon={<Icon.BuildingAltFilled />}
                        title={'Мои компании'}
                        subTitle={'Список ваших компаний'}
                    />
                </MenuList>

                <MenuList title={'ОБЩЕЕ'} mr={'mb-6'} style={{ marginTop: 'auto' }}>
                    <MenuItemList
                        isNoWrapSubTitle
                        isNoWrapTitle
                        role={'button'}
                        icon={<Icon.TabletFilled />}
                        title={'Лицензии и оплата'}
                        subTitle={parseNoWrapText('Активные подписки/#br/и продление')}
                    />
                    <MenuItemList icon={<Icon.QuestionFilled />} title={'Техподдержка'} subTitle={'Вопросы'} />
                </MenuList>
            </MenuCard>

            <MenuCardHidden boxDisplay={'grid'} boxShadowVariant={'M'}>
                <Box boxPaddingVariant={'p-3'}>
                    <WorkspaceName mr={'mb-3'} color={colors.lightElem}>
                        Сумотори
                    </WorkspaceName>
                    <Separator />
                </Box>
                <MenuList title={'O'} boxPaddingVariant={'p-4'}>
                    <MenuItemList
                        role={'button'}
                        isNoWrapSubTitle
                        isNoWrapTitle
                        icon={<Icon.QWEPFilled />}
                        title={'QWEP'}
                        subTitle={parseNoWrapText('Проценка, прайсы,/#br/заказы, ассистент')}
                    />
                    <MenuItemList
                        isNoWrapSubTitle
                        isNoWrapTitle
                        icon={<Icon.BarChartFilled />}
                        title={'DATA'}
                        subTitle={parseNoWrapText('Аналитика цен,/#br/работа с аналогами')}
                    />
                    <MenuItemList
                        disabled
                        isNoWrapSubTitle
                        isNoWrapTitle
                        role={'button'}
                        icon={<Icon.UserFilled />}
                        title={'UCS'}
                        subTitle={parseNoWrapText('Контроль эффективности/#br/процесса закупок')}
                    />
                    <MenuItemList
                        isNoWrapSubTitle
                        isNoWrapTitle
                        role={'button'}
                        icon={<Icon.AppFilled />}
                        title={'Панель управления'}
                        subTitle={parseNoWrapText('Администрирование/#br/пользователей')}
                    />
                </MenuList>
                <MenuList title={'O'}>
                    <MenuItemList
                        isNoWrapSubTitle
                        isNoWrapTitle
                        role={'button'}
                        icon={<Icon.SettingsFilled />}
                        title={'Настройки компании'}
                        subTitle={'Редактирование компании'}
                    />
                    <MenuItemList
                        isNoWrapSubTitle
                        isNoWrapTitle
                        icon={<Icon.BuildingAltFilled />}
                        title={'Мои компании'}
                        subTitle={'Список ваших компаний'}
                    />
                </MenuList>

                <MenuList title={'O'} mr={'mb-6'} style={{ marginTop: 'auto' }}>
                    <MenuItemList
                        isNoWrapSubTitle
                        isNoWrapTitle
                        role={'button'}
                        icon={<Icon.TabletFilled />}
                        title={'Лицензии и оплата'}
                        subTitle={parseNoWrapText('Активные подписки/#br/и продление')}
                    />
                    <MenuItemList icon={<Icon.QuestionFilled />} title={'Техподдержка'} subTitle={'Вопросы'} />
                </MenuList>
            </MenuCardHidden>
        </>
    );
};
