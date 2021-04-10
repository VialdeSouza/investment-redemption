import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Investments from '../pages'
import InvestmentRedemption from '../pages/redeem'

const Stack = createStackNavigator()

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Investments" component={Investments} />
        <Stack.Screen name="InvestmentRedemption" component={InvestmentRedemption} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
