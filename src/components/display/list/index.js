import React from 'react'
import { StyleSheet } from 'react-native'
import { Divider, List } from 'react-native-paper'

const ListItem = props => {
  const { disabled } = props
  return (
    <>
      <List.Item {...props} style={disabled ? { opacity: 0.5 } : {}} />
      <Divider />
    </>
  )
}

export default ListItem

const styles = StyleSheet.create({})
