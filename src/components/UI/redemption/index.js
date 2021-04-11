import React, { useState } from 'react'
import { Card, HelperText } from 'react-native-paper'
import { BRLCurrency } from '../../../utils/format-currency'
import ListItem from '../../display/item'
import MaskedInput from '../../inputs/maskedInput'
import styles from './styles'

const Redemption = ({ name, total, onChange }) => {
  const [redemption, setRedemption] = useState('')

  const isError = redemption > total

  const handleChange = value => {
    setRedemption(value)
    onChange(value)
  }
  return (
    <Card style={styles.card}>
      <ListItem title="Ação" right={name} />
      <ListItem title="Saldo acumulado" right={BRLCurrency(total)} />

      <MaskedInput
        label="Valor a resgatar"
        value={redemption}
        onChangeValue={handleChange}
      />

        <HelperText type='error' visible={isError}>
          Valor não poder ser maior que R${BRLCurrency(total)}
        </HelperText>

    </Card>
  )
}

export default Redemption
