import React from 'react'
import CurrencyInput, { CurrencyInputOnChangeValues } from 'react-currency-input-field';

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
            defaultValue={100}
            decimalsLimit={2}
            decimalSeparator=","
            groupSeparator="."
            prefix="R$ "
            step={10}
            onValueChange={onValueChange    }
        />
    )
}

export default MoneyInput
