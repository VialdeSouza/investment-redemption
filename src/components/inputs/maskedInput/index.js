import React from 'react'
import CurrencyInput from 'react-native-currency-input'
import { View } from 'react-native'
import { Divider, Text, useTheme } from 'react-native-paper'
import createStyle from './styles'

const MaskedInput = props => {
  const theme = useTheme()
  const styles = createStyle(theme)
  return (
    <>
    <View style= {styles.field}>
        <Text>{props.label}</Text>
        <CurrencyInput
          {...props}
            style={styles.input}
            precision = {2}
            separator= ','
            delimiter= '.'
            unit= 'R$'
        />
    </View>
    <Divider/>
    </>
  )
}

export default MaskedInput
