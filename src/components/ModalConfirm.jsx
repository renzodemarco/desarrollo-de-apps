import { View, Modal, Text, StyleSheet } from 'react-native'
import ButtonPrimary from './ButtonPrimary'
import colors from '../utils/colors'
import fonts from '../utils/fonts'

const ModalConfirm = ({ text, onConfirm, onClose, modalVisible }) => {

  return (
    <Modal
      visible={modalVisible}
      transparent={true}
      animationType='fade'
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.text}>{text}</Text>
          <ButtonPrimary title='Aceptar' onPress={onConfirm} buttonStyle={{paddingHorizontal: 20}} />
          <ButtonPrimary title='Cancelar' onPress={onClose} buttonStyle={{paddingHorizontal: 20, backgroundColor: colors.secondary}} />
        </View>
      </View>
    </Modal>
  )
}

export default ModalConfirm

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,0,0,0.7)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  content: {
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.overlay,
    padding: 30,
    gap: 20,
    borderRadius: 5
  },
  text: {
    fontSize: 18,
    color: "white",
    fontFamily: fonts.RobotoRegular
  }
})