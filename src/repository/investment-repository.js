export const get = async () => {
  const response = await fetch('http://www.mocky.io/v2/5e76797e2f0000f057986099')
  const values = await response.json()
  const { listaInvestimentos } = values.response.data
  return listaInvestimentos
}
