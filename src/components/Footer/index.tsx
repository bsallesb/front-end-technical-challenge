import { memo } from 'react';

import { Container, Box } from '@mui/material';

import { Background } from './styles';

const Footer: React.FC = () => (
    <Background>
        <Container>
            <Box py={4} justifyContent="center" sx={{ display: 'flex' }}>
                site por{' '}
                <Box
                    component="a"
                    href="https://www.linkedin.com/in/brenosales/"
                    target="_blank"
                    rel="noreferrer"
                    title="LinkedIn: Breno Sales"
                    ml={1}
                >
                    Breno Sales
                </Box>
            </Box>
        </Container>
    </Background>
);

export default memo(Footer);
