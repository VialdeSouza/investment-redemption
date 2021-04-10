import { get } from '../repository/investment-repository'

export const getInvestments = async () => {
  const response = await get()

  const investments = response.map(investment => {
    const acoes = investment.acoes.map(acao => {
      const valor = investment.saldoTotalDisponivel * (acao.percentual / 100)
      return { ...acao, valor }
    })
    return { ...investment, acoes }
  })

  return investments
}
