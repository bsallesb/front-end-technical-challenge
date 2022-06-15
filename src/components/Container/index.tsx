import { Container as MUIContainer } from '@mui/material';

interface IContainer {
    className?: string;
}

const Container: React.FC<IContainer> = ({ className, children }) => (
    <MUIContainer className={`${className ?? ''}`} sx={{ flexGrow: 1 }}>
        {children}
    </MUIContainer>
);

export default Container;
