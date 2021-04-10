export const BRLCurrency = value => {
  if (!value) {
    return ''
  }
  const fixed = parseFloat(value).toFixed(2)
  const string = fixed.toString().replace('.', ',')

  const currency = string.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')

  return currency
}

export const removeMaskCurrency = (value) => {
  const clean = value.replace(/[^0-9,]*/g, '').replace(',', '.')
  return clean
}
