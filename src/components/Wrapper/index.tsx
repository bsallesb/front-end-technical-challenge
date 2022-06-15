import { memo } from 'react';

import { WrapperContainer } from './styles';

interface IWrapperProps {
    children: React.ReactNode;
}

const Wrapper: React.FC<IWrapperProps> = ({ children }) => (
    <WrapperContainer>{children}</WrapperContainer>
);

export default memo(Wrapper);
