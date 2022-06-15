interface LoadingGateProps {
    waitFor: boolean;
    meanwhile: React.ReactNode;
}

const LoadingGate: React.FC<LoadingGateProps> = ({
    waitFor,
    meanwhile,
    children,
    // eslint-disable-next-line react/jsx-no-useless-fragment
}) => <>{waitFor ? children : meanwhile}</>;

export default LoadingGate;
