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

export const getTotalRedemptions = (redemptions) => {
  const values = Object.values(redemptions)
  let total = 0
  values.forEach((value) => {
    if (!value) {
      return
    }
    total = total + parseFloat(value)
  })

  return total
}

export const redeem = (investment, redemptions) => {
  const totalRedemptions = getTotalRedemptions(redemptions)

  if (totalRedemptions === 0) {
    throw new Error('Valor total do resgate deve ser maior que R$ 00,00')
  }

  investment.acoes.forEach(share => {
    if (!redemptions[share.id] || !redemptions[share.id]) {
      return
    }
    const value = redemptions[share.id]
    if (value > share.valor) {
      throw new Error(
        `${share.nome}: O valor de resgate não pode ser maior que saldo acumulado`
      )
    }
  })
  return 'Resgate efetuado com sucesso!'
}
