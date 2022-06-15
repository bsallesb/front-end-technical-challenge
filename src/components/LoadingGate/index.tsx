import { memo } from 'react';

interface ILoadingGateProps {
    waitFor: boolean;
    meanwhile: React.ReactNode;
    children: React.ReactNode;
}

const LoadingGate: React.FC<ILoadingGateProps> = ({
    waitFor,
    meanwhile,
    children,
    // eslint-disable-next-line react/jsx-no-useless-fragment
}) => <>{waitFor ? children : meanwhile}</>;

export default memo(LoadingGate);
