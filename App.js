/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import { InvestmentProvider } from './src/contexts/investment'
import Routes from './src/routes'

const App = () => {
  return (
    <InvestmentProvider>
      <Routes/>
    </InvestmentProvider>
  )
}
export default App
