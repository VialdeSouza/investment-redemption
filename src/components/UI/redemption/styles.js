import { StyleSheet } from 'react-native'

const styles = theme =>
  StyleSheet.create({
    card: {
      marginVertical: 5
    },
    error: {
      marginHorizontal: 15,
      marginBottom: 5,
      color: theme.colors.error
    },
    input: {
      backgroundColor: theme.colors.surface
    }
  })
export default styles
