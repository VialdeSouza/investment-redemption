import { StyleSheet } from 'react-native'

const styles = theme =>
  StyleSheet.create({
    header: {
      borderBottomColor: theme.colors.accent,
      borderBottomWidth: 3
    },
    title: { textAlign: 'center' }
  })
export default styles
