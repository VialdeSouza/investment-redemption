import React from 'react'
import { Appbar, useTheme } from 'react-native-paper'
import createStyle from './styles'

const AppBar = () => {
  const theme = useTheme()
  const styles = createStyle(theme)
  return (
    <Appbar.Header style={styles.header}>
        <Appbar.Content title="Resgate" titleStyle={styles.titleStyle} />
    </Appbar.Header>
  )
}

export default AppBar
