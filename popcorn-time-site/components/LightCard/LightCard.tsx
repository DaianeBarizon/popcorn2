import React, { ReactElement } from 'react';
import {
    ContainerWrapper,
    IconWrapper,
    ContentWrapper,
    TitleStyled,
    TextStyled,
} from './styles';

export const LightCard = ({
    icon,
    title,
    description,
    ...props
}): ReactElement => {
    return (
        <ContainerWrapper>
            <IconWrapper {...props}>{icon}</IconWrapper>
            <ContentWrapper>
                <TitleStyled>{title}</TitleStyled>
                <TextStyled>{description}</TextStyled>
            </ContentWrapper>
        </ContainerWrapper>
    );
};
