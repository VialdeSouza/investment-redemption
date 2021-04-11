import { StyleSheet } from 'react-native'

const styles = theme =>
  StyleSheet.create({
    field: {
      backgroundColor: theme.colors.surface,
      paddingHorizontal: 15,
      marginTop: 5,
    },
    input: {
      height: 45,
      fontSize: 16
    }
  })
export default styles
