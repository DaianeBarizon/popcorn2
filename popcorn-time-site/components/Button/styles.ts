import styled from 'styled-components';
import { Box } from 'components/Box';

export const ButtonWrapper = styled(Box).attrs((props: any) => ({
    as: 'button',
    backgroundColor: props.backgroundColor || 'primary',
    borderRadius: 'big',
    border: 'none',
    px: '6',
    py: '3',
}))``;
