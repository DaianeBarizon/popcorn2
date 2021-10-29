import React from 'react';
import { Box } from 'components/Box';

interface Props {}

export const Menu = (props: Props) => {
    return (
        <Box
            p='10px'
            display='flex'
            alignItems='center'
            justifyContent='space-between'
        >
            <Box
                as='img'
                src='/images/popcorn-time.png'
                alt='Popcorn time logo'
                maxWidth='200px'
            />
            <Box>a</Box>
        </Box>
    );
};
