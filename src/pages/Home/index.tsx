import { memo } from 'react';

import { Alert, Box, Container, Grid } from '@mui/material';

import Filters from '../../components/Filters';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import LoadingGate from '../../components/LoadingGate';
import LoadingStores from '../../components/LoadingStores';
import Map from '../../components/Map';
import Table from '../../components/Table';
import Wrapper from '../../components/Wrapper';
import { useStores } from '../../hooks/Stores';

const Home: React.FC = () => {
    const { error, isLoading } = useStores();

    return (
        <Wrapper>
            <Header />
            <Box sx={{ flexGrow: 1 }}>
                <LoadingGate waitFor={!isLoading} meanwhile={<LoadingStores />}>
                    <Container>
                        <Box py={5}>
                            {error && <Alert severity="error">{error}</Alert>}
                            {!error && (
                                <>
                                    <Filters />
                                    <Grid container spacing={3}>
                                        <Grid
                                            item
                                            xs={12}
                                            sm={12}
                                            md={6}
                                            lg={6}
                                        >
                                            <Table />
                                        </Grid>
                                        <Grid
                                            item
                                            xs={12}
                                            sm={12}
                                            md={6}
                                            lg={6}
                                        >
                                            <Map />
                                        </Grid>
                                    </Grid>
                                </>
                            )}
                        </Box>
                    </Container>
                </LoadingGate>
            </Box>
            <Footer />
        </Wrapper>
    );
};

export default memo(Home);
