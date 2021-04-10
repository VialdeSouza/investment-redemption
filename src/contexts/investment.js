import React, { createContext, useState, useEffect } from 'react'
import { getInvestments } from '../core/investment-core'


const InvestmentContext = createContext({})

export const InvestmentProvider = ({ children }) => {
  const [investments, setInvestments] = useState([])
  const [error, setError] = useState(false)

  const getDetailsInvestment = (name) => {
    return investments.find(({ nome }) => nome === name)
  }
  const redeemInvestment = (investment, redemptions) => {

  }

  useEffect(() => {
    (async () => {
      try {
        const response = await getInvestments()
        setInvestments(response)
      } catch (error) {
        setError(true)
      }
    })()
  }, [])

  return (
    <InvestmentContext.Provider
      value={{
        redeemInvestment,
        getDetailsInvestment,
        investments,
        error
      }}>
      {children}
    </InvestmentContext.Provider>
  )
}

export default InvestmentContext
