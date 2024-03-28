import { FlatList, StyleSheet, View, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from './CartItem'
import SubmitButton from './SubmitButton'
import { usePostOrderMutation } from '../app/services/orders'
import { deleteCart } from '../features/cart/cartSlice'
import fonts from '../utils/fonts'

const Cart = ({ navigation }) => {

  const localId = useSelector(state => state.auth.localId)
  const cart = useSelector(state => state.cart)
  const [triggerPostOrder] = usePostOrderMutation()
  const dispatch = useDispatch()

  const handleAddOrder = async () => {
    const createdAt = new Date().toLocaleString()
    const order = {
      createdAt,
      ...cart
    }
    const response = await triggerPostOrder({ order, localId })
    if (response.data) {
      console.log(`Orden ${response.data.name} realizada con éxito`)
      dispatch(deleteCart())
    }
  }

  return (
    <>
      {
        (cart.items.length == 0) ?
          <View style={styles.container}>
            <Text style={styles.text}>El carrito está vacío.</Text>
          </View> :
          <>
            <View style={styles.listContainer}>
              <FlatList
                data={cart.items}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <CartItem item={item} navigation={navigation} />}
              />
            </View>
            <View style={styles.container}>
              <Text style={styles.text}>Total: ${cart.total}</Text>
              <SubmitButton
                title="Comprar"
                onPress={handleAddOrder}
              />
            </View>
          </>
      }
    </>
  )
}

export default Cart

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 20
  },
  text: {
    fontFamily: fonts.RobotoBold,
    fontSize: 20
  },
  listContainer: {
    height: 400
  }
})