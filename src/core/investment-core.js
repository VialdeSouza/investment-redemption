import { get } from '../repository/investment-repository'
import { validator } from '../utils/validator'

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
export const redeem = (investment, redemptions) => {
  if (!validator(redemptions)) {
    throw new Error('Valor total do resgate deve ser maior que R$ 00,00')
  }
  investment.acoes.forEach(share => {
    if (!redemptions[share.id]) {
      return
    }
    const { value } = redemptions[share.id]
    if (value > share.valor) {
      throw new Error(
        `${share.nome}: O valor de resgate não pode ser maior que saldo acumulado`
      )
    }
    if (!validator(value)) {
      throw new Error(
        `${share.nome}: O valor de resgate deve ser maior que R$ 00,00`
      )
    }
  })
}
