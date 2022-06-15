import { memo } from 'react';

import { Container, Box } from '@mui/material';

import { Background } from './styles';

const Header: React.FC = () => (
    <Background>
        <Container>
            <Box
                component="h1"
                py={4}
                justifyContent="center"
                sx={{ display: 'flex', fontWeight: 'bold' }}
            >
                Desempenho das Lojas
            </Box>
        </Container>
    </Background>
);

export default memo(Header);
