import React from 'react'
import { useTheme, Button as Btn } from 'react-native-paper'
import createStyle from './styles'

const Button = props => {
  const theme = useTheme()
  const styles = createStyle(theme)
  return (
    <Btn
      {...props}
      mode="contained"
      color={theme.colors.accent}
      style={styles.button}
      labelStyle={styles.label}
    />
  )
}

export default Button
