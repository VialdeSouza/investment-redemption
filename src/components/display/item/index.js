import React from 'react'
import { Card, Divider, List, Subheading } from 'react-native-paper'
import styles from './styles'

const ListItem = props => {
  const { disabled, right } = props
  return (
    <Card>
      <List.Item
        {...props}
        style={disabled && styles.disabled}
        titleStyle={styles.title}
        right={() => <Subheading> {right} </Subheading>}
      />
      <Divider />
    </Card>
  )
}

export default ListItem
