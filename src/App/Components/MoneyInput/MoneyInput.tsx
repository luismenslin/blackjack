import React from 'react'
import CurrencyInput, { CurrencyInputOnChangeValues } from 'react-currency-input-field';

import styles from './MoneyInput.module.scss'

interface MoneyInputProps {
    onValueChange: (value: number) => void
}

const MoneyInput = ({ onValueChange }: MoneyInputProps) => {
    const handleValueChange = (value: string | undefined, name?: string | undefined, values?: CurrencyInputOnChangeValues | undefined) => {
        if (value) {
            const numericValue = parseFloat(value.replace(/[^0-9.-]+/g,""));
            onValueChange(numericValue);
        }
    }

    return (
        <CurrencyInput
            id="input-example"
            name="input-name"
            allowDecimals={true}
            allowNegativeValue={false}
            placeholder="R$ 0,00"
            decimalsLimit={2}
            decimalSeparator=","
            groupSeparator="."
            prefix="R$ "
            step={10}
            onValueChange={handleValueChange}
            className={styles.input}
            maxLength={10}
        />
    )
}

export default MoneyInput
