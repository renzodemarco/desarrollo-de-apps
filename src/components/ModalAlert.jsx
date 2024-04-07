import { View, Modal, Text, StyleSheet } from 'react-native'
import ButtonPrimary from './ButtonPrimary'
import colors from '../utils/colors'
import fonts from '../utils/fonts'

const ModalAlert = ({ text, onClose, modalVisible }) => {

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
          <ButtonPrimary title='Aceptar' onPress={onClose} buttonStyle={{paddingHorizontal: 20}} />
        </View>
      </View>
    </Modal>
  )
}

export default ModalAlert

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,0,0,0.7)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  content: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.overlay,
    padding: 30,
    gap: 20,
    borderRadius: 5
  },
  text: {
    fontSize: 17,
    color: "white",
    textAlign: 'center',
    fontFamily: fonts.RobotoLight
  }
})