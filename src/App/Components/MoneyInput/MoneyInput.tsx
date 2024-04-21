import React from 'react'
import CurrencyInput, { CurrencyInputOnChangeValues } from 'react-currency-input-field';

import styles from './MoneyInput.module.scss'

interface MoneyInputProps {
    onValueChange: (value: string | undefined, name?: string | undefined, values?: CurrencyInputOnChangeValues | undefined) => void
}

const MoneyInput = ({ onValueChange }: MoneyInputProps) => {
    return(
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
            onValueChange={onValueChange}
            className={styles.input}
        />
    )
}

export default MoneyInput
