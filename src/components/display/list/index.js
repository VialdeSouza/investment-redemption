import React from 'react'
import { Card, Divider, List } from 'react-native-paper'

const ListItem = props => {
  const { disabled } = props
  return (
    <Card>
      <List.Item {...props} style={disabled ? { opacity: 0.5 } : {}} />
      <Divider />
    </Card>
  )
}

export default ListItem
