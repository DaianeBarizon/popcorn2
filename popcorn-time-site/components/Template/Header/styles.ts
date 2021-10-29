import { Box } from 'components/Box';
import styled from 'styled-components';

export const HeaderWrapper = styled(Box)`
    background: url('/images/circle.png') no-repeat -13vw -30vw / 45vw 45vw,
        url('/images/circle.png') no-repeat 77vw 5vw / 45vw 45vw;
    background-color: #000;
    min-height: 90vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
