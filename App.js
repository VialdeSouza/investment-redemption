/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import { InvestmentProvider } from './src/contexts/investment'
import ThemeProvider from './src/contexts/theme'
import Routes from './src/routes'

const App = () => {
  return (
    <ThemeProvider>
      <InvestmentProvider>
        <Routes />
      </InvestmentProvider>
    </ThemeProvider>
  )
}
export default App
