import { StyleSheet, Text, View, Pressable } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { deleteProduct } from '../features/cart/cartSlice'
import { useDispatch } from 'react-redux'
import colors from '../utils/colors'
import fonts from '../utils/fonts'
import { useState } from 'react'
import ModalConfirm from './ModalConfirm'

const CartItem = ({ item }) => {

  const dispatch = useDispatch()
  const [modalVisible, setModalVisible] = useState(false)

  const handleCloseModal = () => {
    setModalVisible(false)
  }

  const handleDeleteItem = () => dispatch(deleteProduct(item.id))

  return (
    <View style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{item.title}</Text>
        <Text style={styles.text2}>{item.artist}</Text>
        <Text style={styles.text3}>Cantidad: {item.quantity}</Text>
        <Text style={styles.text2}>Precio unitario: ${item.price} </Text>
      </View>
      <Pressable onPress={() => setModalVisible(true)}>
        <Entypo name="trash" size={30} color={colors.primary} />
      </Pressable>
      <ModalConfirm
        text="¿Desea eliminar este producto de su carrito?"
        modalVisible={modalVisible}
        onClose={handleCloseModal}
        onConfirm={handleDeleteItem}
      />
    </View>
  )
}

export default CartItem

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.overlay,
    padding: 18,
    marginTop: 8,
    marginHorizontal: 8,
    borderWidth: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    height: 100,
    alignItems: "center"
  },
  textContainer: {
    width: "70%"
  },
  text: {
    color: colors.primary,
    fontSize: 18,
    fontFamily: fonts.RobotoMedium
  },
  text2: {
    color: colors.secondary,
    fontSize: 14,
    fontFamily: fonts.RobotoRegular
  },
  text3: {
    color: colors.secondary,
    fontSize: 11,
    fontFamily: fonts.RobotoLight,
    marginTop: 2
  }
})