import {
    BaseCheckbox,
    BaseText,
    BoxLayout,
    Button,
    CircleLoading,
    Icon,
    MainButton,
    Paragraph,
    SubmitButton,
    Title,
} from '@src/lib';
import { IconButton } from '@src/lib/components/button/icon-button/IconButton';
import { BaseTextField, MainTextField, WrapperInput } from '@src/lib/components/input';
import { useState } from 'react';
import { styled } from 'styled-components';

const SBtn = styled.button`
    cursor: pointer;
    outline: none;
    border: none;
    background-color: transparent;
`;

export const PresentBox = () => {
    const [isShow, setIsShow] = useState(false);

    const loadingShow = () => {
        setIsShow(!isShow);
    };

    const onclickInp = () => {
        console.log('INPPPP');
    };

    return (
        <>
            <Title sizeVariant={'L'} mr={'m-6'}>
                Box
            </Title>
            <BoxLayout>
                <Title sizeVariant={'L'}>L ipsum, dolor sit amet consectetur</Title>
                <Title sizeVariant={'M'}>M ipsum, dolor sit amet consectetur</Title>
                <Title sizeVariant={'S'} mr={'mb-4'}>
                    S ipsum, dolor sit amet consectetur
                </Title>
                <BaseText>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque quaerat aliquid cum! Suscipit
                    consequatur rerum as ullam?
                </BaseText>
                <BaseText sizeVariant={'text'}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque quaerat aliquid cum! Suscipit
                    consequatur rerum as ullam?
                </BaseText>
                <Paragraph mr={'mt-4'} sizeVariant={'text'}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque quaerat aliquid cum! Suscipit
                    consequatur rerum as ullam?
                </Paragraph>
                <Paragraph mr={'mt-4'} sizeVariant={'subtext'}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque quaerat aliquid cum! Suscipit
                    consequatur rerum as ullam?
                </Paragraph>
                <CircleLoading />
                <Button onClick={loadingShow}>{isShow ? 'Show' : 'NonShow'}</Button>
                <MainButton icon={<Icon.AddCircle />} position={'left'} style={{ width: '200px' }}>
                    Lorem
                </MainButton>
                <SubmitButton isLoading={isShow}>Lorem</SubmitButton>
                <SubmitButton variant={'outlined'} isLoading={isShow}>
                    Lorem
                </SubmitButton>
                <SubmitButton icon={<Icon.AddCircle />} position={'left'} style={{ width: '300px' }} isLoading={isShow}>
                    Lorem
                </SubmitButton>
                <SubmitButton sizeVariant={'M'} isLoading={isShow}>
                    Lorem
                </SubmitButton>
                <SubmitButton sizeVariant={'M'} variant={'outlined'} isLoading={isShow}>
                    Lorem
                </SubmitButton>
                <SubmitButton disabled sizeVariant={'M'} isLoading={isShow}>
                    Lorem
                </SubmitButton>

                <IconButton borderRadius={'round'} color={'#EFF6FF'}>
                    <Icon.Phone color={'#000'} />
                </IconButton>

                <BaseTextField />

                <BaseTextField placeholder={'placeholder'} />
                <BaseTextField colorVariant={'error'} placeholder={'placeholder'} />
                <BaseTextField disabled placeholder={'placeholder'} />
                <MainTextField
                    placeholder={'placeholder'}
                    iconStart={<Icon.Phone />}
                    iconsEnd={[
                        <SBtn key={1} onClick={onclickInp}>
                            <Icon.Phone />
                        </SBtn>,
                        <Icon.AddCircle onClick={onclickInp} key={2} />,
                        <Icon.Phone onClick={onclickInp} key={3} />,
                        <Icon.AddCircle onClick={onclickInp} key={4} />,
                    ]}
                />

                <MainTextField colorVariant={'success'} disabled iconStart={<Icon.Phone onClick={onclickInp} />} />

                <WrapperInput
                    required
                    positionLabel={'top'}
                    id={'SimpleTextField'}
                    label={'SimpleTextField'}
                    message={{
                        text: 'SimpleTextField',
                    }}
                >
                    <MainTextField iconStart={<Icon.Phone />} />
                </WrapperInput>

                <WrapperInput required positionLabel={'top'} id={'BaseTextField'} label={'BaseTextField'}>
                    <BaseTextField placeholder={'Placeholder'} />
                </WrapperInput>
                <BaseCheckbox />
            </BoxLayout>
        </>
    );
};
