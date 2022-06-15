import { useCallback, useMemo } from 'react';

import { DataGrid, GridColDef } from '@mui/x-data-grid';

import { useStores } from '../../hooks/Stores';
import { TableContainer } from './styles';

const Table: React.FC = () => {
    const { filteredStores, numericMinValue: minValue } = useStores();

    const columns: GridColDef[] = useMemo(
        () => [
            { field: 'name', headerName: 'Loja', flex: 1 },
            { field: 'city', headerName: 'Cidade' },
            { field: 'state', headerName: 'Estado' },
            { field: 'formattedRevenue', headerName: 'Faturamento' },
        ],
        []
    );

    const getRowClassName = useCallback(
        params => (params.row.revenue >= minValue ? 'positive' : 'negative'),
        [minValue]
    );

    return (
        <TableContainer>
            <DataGrid
                rows={filteredStores}
                columns={columns}
                pageSize={10}
                getRowClassName={getRowClassName}
                rowsPerPageOptions={[10]}
            />
        </TableContainer>
    );
};

export default Table;
