import { Grid, TextField } from '@mui/material';
import CurrencyTextField from '@unicef/material-ui-currency-textfield';

import { useStores } from '../../hooks/Stores';

const Filters: React.FC = () => {
    const { search, minValue, setSearch, setMinValue } = useStores();

    return (
        <Grid container spacing={3} mb={3}>
            <Grid item xs={12} sm={6} md={6}>
                <TextField
                    label="Pesquisa"
                    variant="outlined"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <CurrencyTextField
                    label="Faturamento mínimo"
                    variant="outlined"
                    value={minValue}
                    currencySymbol="R$"
                    outputFormat="string"
                    onChange={(_, value) => setMinValue(value)}
                    fullWidth
                    decimalCharacter=","
                    digitGroupSeparator="."
                />
            </Grid>
        </Grid>
    );
};

export default Filters;
