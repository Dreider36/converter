const valueInputNode = document.querySelector('.js-value-input');
const currencyInputSelectorNode = document.querySelector('.js-base-selector');
const currencyOutputSelectorNode = document.querySelector('.js-currency-selector');
const outputNode = document.querySelector('.js-output');
const swapBtn = document.querySelector('.swap-btn');
const copyBtn = document.querySelector('.copy-btn');

function Convertion(){
    let inputCurrencyValue = Number(valueInputNode.value);
    let inputCurrency = currencyInputSelectorNode.value;
    let outputCurrency = currencyOutputSelectorNode.value;

    if (inputCurrency === outputCurrency) {
        currencyOutputSelectorNode.value = 'usd';
    }
    
    const result = convert(inputCurrency, inputCurrencyValue, outputCurrency);

    if (result < 0) result = 0;
    outputNode.innerText = result;
}


valueInputNode.addEventListener ('input', () => {
    Convertion();
});

currencyInputSelectorNode.addEventListener('change', () => {
    Convertion();
});

currencyOutputSelectorNode.addEventListener('change', () => {
    Convertion();
});

swapBtn.addEventListener ('click', () => {
    let inputCurrency = currencyInputSelectorNode.value;
    let outputCurrency = currencyOutputSelectorNode.value;
    currencyInputSelectorNode.value = outputCurrency;
    currencyOutputSelectorNode.value = inputCurrency;
});

outputNode.addEventListener ('click', () => {
    navigator.clipboard.writeText(outputNode.innerText);
})