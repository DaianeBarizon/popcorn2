import Head from 'next/head';
import { Box } from 'components/Box';
import { Text } from 'components/Text';
import { Button } from 'components/Button';
import { LightCard } from 'components/LightCard';

export default function Home() {
    return (
        <Box>
            <Head>
                <title>Create Next App</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <Button onClick={() => alert('clique')}>
                <Text color='white' fontSize='md'>
                    {' '}
                    Clique Aqui{' '}
                </Text>
            </Button>
            <LightCard
                icon={'icon'}
                title={'Título'}
                description={
                    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                }
                backgroundColor={'red.900'}
            />
        </Box>
    );
}
