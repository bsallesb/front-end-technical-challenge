export const formatCurrency = (n: number): string =>
    `R$ ${String(n).replace('.', ',')}`;
