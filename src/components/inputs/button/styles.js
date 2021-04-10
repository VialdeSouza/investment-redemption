import { StyleSheet } from 'react-native'

const styles = theme =>
  StyleSheet.create({
    button: {
      height: 50,
      justifyContent: 'center'
    },
    label: {
      color: theme.colors.primary,
      fontWeight: 'bold'
    }
  })
export default styles
