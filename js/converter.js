const RATEStoUSD = {
    usd: 1,
    uah: 0.027,
    eur: 0.94,
    pln: 0.23
};

const RATESfromUSD = {
    usd: 1,
    uah: 36.94,
    eur: 0.94,
    pln: 4.43
}



function convert (inputCurrency, inputCurrencyValue, outputCurrency) {
    if (!RATEStoUSD[inputCurrency]) return '500';
    if (!RATESfromUSD[outputCurrency]) return '500';
    return inputCurrencyValue * RATEStoUSD[inputCurrency] * RATESfromUSD[outputCurrency];
}