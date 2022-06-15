import { memo } from 'react';

import { Box, Container } from '@mui/material';
import ContentLoader from 'react-content-loader';

const LoadingStores: React.FC = () => (
    <Container>
        <Box
            mt={4}
            sx={{
                display: { xs: 'none', sm: 'none', md: 'block', lg: 'block' },
            }}
        >
            <ContentLoader
                speed={2}
                width="100%"
                height={700}
                backgroundColor="#d4d3db"
                foregroundColor="#ece4e4"
            >
                <rect x="0" y="0" rx="10" ry="10" width="49%" height="55" />
                <rect x="51%" y="0" rx="10" ry="10" width="49%" height="55" />
                <rect x="0" y="80" rx="10" ry="10" width="49%" height="630" />
                <rect x="51%" y="80" rx="0" ry="0" width="49%" height="630" />
            </ContentLoader>
        </Box>
        <Box
            mt={4}
            sx={{
                display: { xs: 'none', sm: 'block', md: 'none', lg: 'none' },
            }}
        >
            <ContentLoader
                speed={2}
                width="100%"
                height={1390}
                backgroundColor="#d4d3db"
                foregroundColor="#ece4e4"
            >
                <rect x="0" y="0" rx="10" ry="10" width="49%" height="55" />
                <rect x="51%" y="0" rx="10" ry="10" width="49%" height="55" />
                <rect x="0" y="80" rx="10" ry="10" width="100%" height="630" />
                <rect x="0" y="735" rx="0" ry="0" width="100%" height="630" />
            </ContentLoader>
        </Box>
        <Box
            mt={4}
            sx={{
                display: { xs: 'block', sm: 'none', md: 'none', lg: 'none' },
            }}
        >
            <ContentLoader
                speed={2}
                width="100%"
                height={1460}
                backgroundColor="#d4d3db"
                foregroundColor="#ece4e4"
            >
                <rect x="0" y="0" rx="10" ry="10" width="100%" height="55" />
                <rect x="0" y="80" rx="10" ry="10" width="100%" height="55" />
                <rect x="0" y="160" rx="10" ry="10" width="100%" height="630" />
                <rect x="0" y="815" rx="0" ry="0" width="100%" height="630" />
            </ContentLoader>
        </Box>
    </Container>
);

export default memo(LoadingStores);
