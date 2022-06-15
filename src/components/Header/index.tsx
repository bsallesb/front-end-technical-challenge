import Box from '@mui/material/Box';

import { Background } from './styles';
import Container from '../Container';

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

export default Header;
