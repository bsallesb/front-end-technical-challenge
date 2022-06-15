import { StoresProvider } from './hooks/Stores';
import Home from './pages/Home';
import { GlobalStyle } from './styles/global';

export const App: React.FC = () => (
    <>
        <StoresProvider>
            <Home />
        </StoresProvider>
        <GlobalStyle />
    </>
);

export default App;
