import React from 'react'
import { TextInput } from 'react-native-paper'
import { TextInputMask } from 'react-native-masked-text'

const MaskedInput = props => {
  return (
    <TextInput
      {...props}
      keyboardType="numeric"
      render={props => (
        <TextInputMask
          {...props}
          type={'money'}
          options={{
            precision: 2,
            separator: ',',
            delimiter: '.',
            unit: 'R$',
            suffixUnit: ''
          }}
        />
      )}
    />
  )
}

export default MaskedInput
