export const format = (number) => {
    const newNumber = Number(number).toFixed(2)
    return newNumber.toLocaleString('en')
}
