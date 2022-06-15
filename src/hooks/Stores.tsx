import {
    createContext,
    useCallback,
    useState,
    useContext,
    useMemo,
    useEffect,
} from 'react';
import { StoreType } from '../@types/Stores';
import { formatCurrency } from '../helpers';
import Api from '../services/Api';

interface StoreContextData {
    stores: StoreType[];
    isLoading: boolean;
    error: string | null;
    filteredStores: StoreType[];
    search: string;
    minValue: string;
    numericMinValue: number;
    setSearch: (value: string) => void;
    setMinValue: (value: string) => void;
}

export const StoresContext = createContext<StoreContextData>(
    {} as StoreContextData
);

export const useStores = (): StoreContextData => {
    const context = useContext(StoresContext);

    if (!context) {
        throw new Error('useStores must be within StoresProvider');
    }

    return context;
};

export const StoresProvider: React.FC = ({ children }) => {
    const [stores, setStores] = useState<StoreType[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [search, setSearch] = useState('');
    const [minValue, setMinValue] = useState('15000');

    const fetchStores = useCallback(async (): Promise<void> => {
        setIsLoading(true);
        setError(null);
        try {
            const {
                data: { stores: _stores },
            } = await Api.get('/');
            setStores(_stores);
        } catch {
            setStores([]);
            setError('Não foi possível conectar-se com a API');
        } finally {
            setIsLoading(false);
        }
    }, []);

    const formattedStores = useMemo(
        () =>
            stores.map((store, i) => ({
                ...store,
                id: i + 1,
                formattedRevenue: formatCurrency(store.revenue),
            })),
        [stores]
    );

    const filteredStores = useMemo(
        () => formattedStores.filter(store => store.name.includes(search)),
        [search, formattedStores]
    );

    const numericMinValue = useMemo(() => Number(minValue), [minValue]);

    useEffect(() => {
        fetchStores();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const providerValue = useMemo(
        () => ({
            stores,
            isLoading,
            error,
            search,
            minValue,
            numericMinValue,
            filteredStores,
            setSearch,
            setMinValue,
        }),
        [
            stores,
            isLoading,
            error,
            search,
            minValue,
            numericMinValue,
            filteredStores,
            setSearch,
            setMinValue,
        ]
    );

    return (
        <StoresContext.Provider value={providerValue}>
            {children}
        </StoresContext.Provider>
    );
};
