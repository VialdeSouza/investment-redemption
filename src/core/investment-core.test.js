import { fakeInvestmentWithValue } from '../__mocks__/api'
import { getTotalRedemptions, redeem } from './investment-core'

describe('getTotalRedemptions', () => {
  test('should return total redemptions', () => {
    const redemptions = { 1: '1000.00', 2: '5000', 3: null, 4: '' }
    const total = getTotalRedemptions(redemptions)
    expect(total).toBe(6000)
  })
  test('should return zero if redemptions if empty', () => {
    const redemptions = {}
    const total = getTotalRedemptions(redemptions)
    expect(total).toBe(0)
  })
})

describe('redeem', () => {
  test('should throw if redemptions if empty', () => {
    const redemptions = {}
    expect(() => redeem(fakeInvestmentWithValue, redemptions)).toThrow(
      'Valor total do resgate deve ser maior que R$ 00,00'
    )
  })
  test('should throw if the redemption value is greater than the share value', () => {
    const redemptions = { 1: 15000, 2: 2000 }
    expect(() => redeem(fakeInvestmentWithValue, redemptions)).toThrow(
      'BBAS3: O valor de resgate não pode ser maior que saldo acumulado'
    )
  })

  test('should return success if redemption value is valid', () => {
    const redemptions = { 1: 11000, 2: 2000 }
    const response = redeem(fakeInvestmentWithValue, redemptions)
    expect(response).toBe('Resgate efetuado com sucesso!')
  })
})
