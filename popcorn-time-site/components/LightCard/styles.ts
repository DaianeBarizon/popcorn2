import styled from 'styled-components';
import { Box } from 'components/Box';

export const ContainerWrapper = styled(Box).attrs(() => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    p: '6',
}))``;

export const ContentWrapper = styled(Box).attrs(() => ({
    display: 'flex',
    flexDirection: 'column',
    px: '6',
}))``;

export const IconWrapper = styled(Box).attrs((props: any) => ({
    backgroundColor: props.backgroundColor || 'primary',
    borderRadius: 'md',
    largeSizes: 'md',
    p: '5',
    display: 'flex',
    alignItems: 'center',
}))``;

export const TitleStyled = styled(Box).attrs(() => ({
    as: 'h2',
    color: 'gray.50',
    fontSize: 'md',
    mt: '0',
}))``;

export const TextStyled = styled(Box).attrs(() => ({
    as: 'span',
    color: 'gray.50',
    fontSize: 'sm',
}))``;
