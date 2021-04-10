import React from 'react'
import { View } from 'react-native'
import { Subheading } from 'react-native-paper'
import styles from './styles'

const Subheader = ({ leftTitle, rightTitle }) => {
  return (
    <View style={styles.subheader}>
      <Subheading>{leftTitle.toUpperCase()}</Subheading>
      <Subheading>{rightTitle.toUpperCase()}</Subheading>
    </View>
  )
}

export default Subheader
