import React from 'react';
import { Text } from 'components/Text';
import { HeaderWrapper } from './styles';
import { Button } from 'components/Button';
import { movies } from 'popcorntime';

interface Props {}

export const Header = (props: Props) => {
    const options = {
        page: 1,
        sortby: 'seeds',
        genre: 'all',
        q: '', // It is useful to do a search or you can leave it empty
    };

    movies(options).then((data) => console.log(data));

    return (
        <HeaderWrapper>
            <Text as='h1' fontWeight='light' fontSize='45px' m='0'>
                Watch Movies and TV Shows Instantly
            </Text>
            <Text
                as='h2'
                fontWeight='light'
                fontSize='30px'
                color='gray.700'
                m='0'
            >
                Currently in Beta, but go ahead and try it!
            </Text>
            <Button mt='20px' onClick={() => alert('clique')}>
                <Text color='white' fontSize='25px' fontWeight='medium'>
                    Download Popcorn Time 4.4
                </Text>
            </Button>
            <Text
                as='small'
                fontWeight='light'
                fontSize='13px'
                color='gray.700'
                mt='13px'
            >
                For Windows 7 and above Other operating systems and platforms
            </Text>
        </HeaderWrapper>
    );
};
