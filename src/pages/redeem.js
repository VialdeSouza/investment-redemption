import React, { useEffect, useContext, useState } from 'react'
import { ScrollView } from 'react-native'
import ListItem from '../components/display/item'
import Subheader from '../components/display/subheader'
import Button from '../components/inputs/button'
import Redemption from '../components/UI/redemption'
import InvestmentContext from '../contexts/investment'
import { BRLCurrency } from '../utils/format-currency'

const InvestmentRedemption = ({ route }) => {
  const [investment, setInvestment] = useState()
  const [redemptions, setRedemptions] = useState()
  const { getDetailsInvestment, redeemInvestment } = useContext(InvestmentContext)
  const { nome } = route.params

  const handleRedemption = () => {
    redeemInvestment(investment, redemptions)
  }
  const handleChange = (values, share) => {
    if (!values.value || values.value === '') {
      const copied = redemptions
      delete copied[share]
      setRedemptions(copied)
      return
    }
    setRedemptions(prev => ({ ...prev, [share]: values }))
  }

  useEffect(() => {
    const response = getDetailsInvestment(nome)
    setInvestment(response)
  }, [nome])

  if (!investment) {
    return <></>
  }
  return (
    <ScrollView>
      <Subheader leftTitle="Dados do investimento" />
      <ListItem title="Nome" right={investment.nome} />
      <ListItem
        title="Saldo total disponível"
        right={BRLCurrency(investment.saldoTotalDisponivel)}
      />
      <Subheader leftTitle="Resgate do seu jeito" />

      {investment.acoes.map(share => {
        return (
          <Redemption
            key={share.id}
            name={share.nome}
            total={share.valor}
            onChange={(values) => handleChange(values, share.id)}
          />
        )
      })}
      <Button onPress={handleRedemption}>
        Confirmar Resgate
      </Button>
    </ScrollView>
  )
}

export default InvestmentRedemption
