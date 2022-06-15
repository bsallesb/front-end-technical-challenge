/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
declare module '@unicef/material-ui-currency-textfield' {
    export interface CurrencyTextFieldProps {
        type?: 'text' | 'tel' | 'hidden';
        variant?: string;
        id?: string;
        className?: string;
        style?: object;
        disabled?: boolean;
        label?: string;
        textAlign?: 'right' | 'left' | 'center';
        tabIndex?: number;
        autoFocus?: boolean;
        placeholder?: string;
        value?: string | number;
        onChange?(
            e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
            value: string
        ): void;
        onFocus?(): void;
        onBlur?(): void;
        onKeyPress?(): void;
        onKeyUp?(): void;
        onKeyDown?(): void;
        currencySymbol?: string;
        decimalCharacter?: string;
        decimalCharacterAlternative?: string;
        decimalPlaces?: number;
        decimalPlacesShownOnBlur?: number;
        decimalPlacesShownOnFocus?: number;
        digitGroupSeparator?: string;
        fullWidth?: boolean;
        leadingZero?: 'allow' | 'deny' | 'keep';
        maximumValue?: string;
        minimumValue?: string;
        negativePositiveSignPlacement?: 'l' | 'r' | 'p' | 's';
        negativeSignCharacter?: string;
        outputFormat?: 'string' | 'number';
        selectOnFocus?: boolean;
        positiveSignCharacter?: string;
        readOnly?: boolean;
        preDefined?: object;
    }

    const CurrencyTextField: React.FC<CurrencyTextFieldProps> = () => null;

    export default CurrencyTextField;
}
