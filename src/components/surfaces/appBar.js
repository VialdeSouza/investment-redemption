import React from 'react'
import { Appbar } from 'react-native-paper'

const AppBar = () => {
  return (
    <Appbar.Header>
        <Appbar.Content title="Resgate" titleStyle={{ textAlign: 'center' }} />
    </Appbar.Header>
  )
}

export default AppBar
