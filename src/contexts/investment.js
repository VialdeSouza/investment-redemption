import React, { createContext, useState, useEffect } from 'react'
import { getInvestments } from '../repository/investment-repository'

const InvestmentContext = createContext({})

export const InvestmentProvider = ({ children }) => {
  const [investments, setInvestments] = useState([])
  const [error, setError] = useState(false)

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
        investments,
        error
      }}>
      {children}
    </InvestmentContext.Provider>
  )
}

export default InvestmentContext
