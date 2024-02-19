export const convertToCrores = (inputString) => {
    if (inputString === 'None') return 'None';
    const numberValue = parseFloat(inputString.replace(/,/g, ''));

    if (isNaN(numberValue)) {
        return 'Invalid input';
    }
    const valueInCrores = numberValue / 10000000;
    return valueInCrores.toFixed(2);
}