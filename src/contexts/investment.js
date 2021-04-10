import React, { createContext, useState, useEffect } from 'react'
import { getInvestments, redeem } from '../core/investment-core'

const InvestmentContext = createContext({})

export const InvestmentProvider = ({ children }) => {
  const [investments, setInvestments] = useState([])
  const [message, setMessage] = useState('')

  const getDetailsInvestment = (name) => {
    return investments.find(({ nome }) => nome === name)
  }

  const redeemInvestment = (investment, redemptions) => {
    try {
      redeem(investment, redemptions)
      setMessage('Resgate efetuado!')
    } catch (error) {
      setMessage(error.message)
    }
  }

  const handleFeedback = () => {
    setMessage('')
  }

  const getTotalRedemptions = (redemptions) => {
    if (!redemptions) return '0'

    const values = Object.values(redemptions)
    const isEmpty = values.length === 0

    if (isEmpty) return '0'
    let total = 0

    values.forEach(({ value }) => {
      total = total + parseFloat(value)
    })

    return total
  }

  useEffect(() => {
    (async () => {
      try {
        const response = await getInvestments()
        setInvestments(response)
      } catch (error) {
        setMessage(error.message)
      }
    })()
  }, [])

  return (
    <InvestmentContext.Provider
      value={{
        handleFeedback,
        redeemInvestment,
        getDetailsInvestment,
        getTotalRedemptions,
        investments,
        message
      }}>
      {children}
    </InvestmentContext.Provider>
  )
}

export default InvestmentContext
