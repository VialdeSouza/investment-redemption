import React, { useEffect, useState } from 'react'
import { Portal, Dialog, Paragraph } from 'react-native-paper'
import Button from '../../inputs/button'
import styles from './styles'

const Modal = ({ message, onDismiss }) => {
  const [visible, setVisible] = useState(false)

  const showModal = () => setVisible(true)
  const hideModal = () => {
    setVisible(false)
    onDismiss()
  }

  useEffect(() => {
    if (message) {
      showModal()
    }
  }, [message])
  return (

      <Portal>
        <Dialog visible={visible} onDismiss={hideModal} >
         <Dialog.Content>
          <Paragraph style={styles.paragraph}>{message}</Paragraph>
        </Dialog.Content>
          <Button onPress={hideModal}>
            Fechar
        </Button>
        </Dialog>

      </Portal>

  )
}

export default Modal
