import React from 'react'
import CurrencyInput from 'react-currency-input-field';

interface MoneyInputProps {
    value: number
}

const MoneyInput = ({ value }: MoneyInputProps) => {
    return(
        <CurrencyInput
            id="input-example"
            name="input-name"
            allowDecimals={true}
            allowNegativeValue={false}
            placeholder="R$ 0,00"
            defaultValue={10}
            decimalsLimit={2}
            decimalSeparator=","
            groupSeparator="."
            prefix="R$ "
            step={10}
            value={value}
        />
    )
}

export default MoneyInput
