import { getTotalRedemptions } from './investment-core'

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
