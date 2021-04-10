import React, { useContext } from 'react'
import { View } from 'react-native'
import { Subheading } from 'react-native-paper'
import ListItem from '../components/display/list'
import Subheader from '../components/display/subheader'
import InvestmentContext from '../contexts/investment'
import { BRLCurrency } from '../utils/format-currency'

const Investments = () => {
  const { investments } = useContext(InvestmentContext)

  return (
    <View>
      <Subheader leftTitle="investimentos" rightTitle="R$" />
      {investments.map(
        ({ nome, objetivo, indicadorCarencia, saldoTotalDisponivel }) => {
          return (
            <ListItem
              key={nome}
              title={nome}
              description={objetivo}
              disabled={indicadorCarencia === 'S'}
              right={props => (
                <Subheading> {BRLCurrency(saldoTotalDisponivel)} </Subheading>
              )}
            />
          )
        }
      )}
    </View>
  )
}

export default Investments
