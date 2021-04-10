import React from 'react'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#005AA5',
    accent: '#FAE128',
    surface: '#FFFFFF',
    background: '#F4F4F4'
  }
}

const ThemeProvider = ({ children }) => {
  return (
    <PaperProvider theme={theme}>
      {children}
    </PaperProvider>
  )
}
export default ThemeProvider
