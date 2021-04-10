import React, { useState } from 'react'
import { Card, Text, useTheme } from 'react-native-paper'
import { BRLCurrency, removeMaskCurrency } from '../../../utils/format-currency'
import ListItem from '../../display/item'
import MaskedInput from '../../inputs/maskedInput'
import createStyle from './styles'

const Redemption = ({ name, total, onChange }) => {
  const theme = useTheme()
  const styles = createStyle(theme)
  const [redemption, setRedemption] = useState({ masked: '', value: '' })

  const isError = redemption.value > total

  const handleChange = masked => {
    const value = removeMaskCurrency(masked)
    setRedemption({ masked, value })
    onChange({ name, value })
  }
  return (
    <Card style={styles.card}>
      <ListItem title="Ação" right={name} />
      <ListItem title="Saldo acumulado" right={BRLCurrency(total)} />

      <MaskedInput
        style={styles.input}
        label="Valor a resgatar"
        value={redemption.masked}
        onChangeText={handleChange}
      />
      {isError && (
        <Text style={styles.error}>
          Valor não poder ser maior que R${BRLCurrency(total)}
        </Text>
      )}
    </Card>
  )
}

export default Redemption
