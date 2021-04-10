import React, { useContext } from 'react'
import { View } from 'react-native'
import { Subheading } from 'react-native-paper'
import ListItem from '../components/display/item'
import Subheader from '../components/display/subheader'
import InvestmentContext from '../contexts/investment'
import { BRLCurrency } from '../utils/format-currency'

const Investments = ({ navigation }) => {
  const { investments } = useContext(InvestmentContext)

  const handleOnPress = nome => {
    navigation.navigate('InvestmentRedemption', { nome })
  }

  return (
    <View>
      <Subheader leftTitle="investimentos" rightTitle="R$" />
      {investments.map(
        ({ nome, objetivo, indicadorCarencia, saldoTotalDisponivel }) => {
          return (
            <ListItem
              onPress={() => handleOnPress(nome)}
              key={nome}
              title={nome}
              description={objetivo}
              disabled={indicadorCarencia === 'S'}
              right={BRLCurrency(saldoTotalDisponivel)}
            />
          )
        }
      )}
    </View>
  )
}

export default Investments
