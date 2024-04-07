import { FlatList, StyleSheet, View, Text } from 'react-native'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../components/CartItem'
import ButtonPrimary from '../components/ButtonPrimary'
import EmptyList from '../components/EmptyList'
import ModalConfirm from '../components/ModalConfirm'
import { usePostOrderMutation } from '../app/services/orders'
import { deleteCart } from '../features/cart/cartSlice'
import fonts from '../utils/fonts'
import Wrapper from '../components/Wrapper'
import colors from '../utils/colors'

const Cart = ({ navigation }) => {

  const localId = useSelector(state => state.auth.localId)
  const cart = useSelector(state => state.cart)
  const [triggerPostOrder] = usePostOrderMutation()
  const dispatch = useDispatch()
  const [modalVisible, setModalVisible] = useState(false)

  const handleCloseModal = () => {
    setModalVisible(false)
  }

  const handleAddOrder = async () => {
    const createdAt = new Date().toLocaleString()
    const order = {
      createdAt,
      ...cart
    }
    const response = await triggerPostOrder({ order, localId })
    if (response.data) {
      dispatch(deleteCart())
      navigation.navigate("OrdersStack")
    }
  }

  return (
    <Wrapper>
      {
        (cart.items.length == 0) ?
          <EmptyList message='El carrito está vacío.' /> :
          <>
            <View style={styles.listContainer}>
              <FlatList
                data={cart.items}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <CartItem item={item} navigation={navigation} />}
              />
            </View>
            <View style={styles.container}>
              <Text style={styles.text}>Total: ${cart.total.toFixed(2)}</Text>
              <ButtonPrimary
                textStyle={styles.button}
                title="Comprar"
                onPress={() => setModalVisible(true)}
              />
            </View>
            <ModalConfirm
              text="¿Desea realizar esta compra?"
              modalVisible={modalVisible}
              onClose={handleCloseModal}
              onConfirm={handleAddOrder}
            />
          </>
      }
    </Wrapper>
  )
}

export default Cart

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 30,
    margin: 20
  },
  text: {
    fontFamily: fonts.RobotoRegular,
    fontSize: 20,
    color: '#fff'
  },
  listContainer: {
    height: 500
  },
  button: {
    paddingHorizontal: 20,
    fontSize: 20,
    fontFamily: fonts.RobotoMedium
  }
})