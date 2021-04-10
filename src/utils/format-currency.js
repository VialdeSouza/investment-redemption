export const BRLCurrency = value => {
  const fixed = value.toFixed(2)
  const string = fixed.toString().replace('.', ',')

  const currency = string.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  return currency
}
