import React from 'react'
import { Card, Divider, List } from 'react-native-paper'
import styles from './styles'

const ListItem = props => {
  const { disabled } = props
  return (
    <Card>
      <List.Item {...props} style={disabled && styles.disabled} titleStyle={styles.title} />
      <Divider />
    </Card>
  )
}

export default ListItem
