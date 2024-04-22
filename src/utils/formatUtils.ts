export const formatCurrency = (value: number, addPrefix: boolean = false) => {
    let formattedValue = parseFloat(String(value)).toFixed(2).replace('.', ',').replace(/\d(?=(\d{3})+,)/g, '$&.');
    formattedValue = formattedValue.endsWith(',00') ? formattedValue.slice(0, -3) : formattedValue;
    return addPrefix ? `R$ ${formattedValue}` : formattedValue;
}