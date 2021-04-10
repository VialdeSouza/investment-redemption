import React, { useEffect, useContext } from 'react'
import { View, Text } from 'react-native'
import InvestmentContext from '../contexts/investment'

const InvestmentRedemption = ({ route }) => {
  const { getDetailsInvestment } = useContext(InvestmentContext)
  const { nome } = route.params

  useEffect(() => {
    const investment = getDetailsInvestment(nome)
    console.log(investment)
  }, [nome])

  return (
    <View>
      <Text>Resgate de Investimento</Text>
    </View>
  )
}

export default InvestmentRedemption
