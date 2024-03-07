import { FlatList, StyleSheet, View, Text } from 'react-native'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'
import fonts from '../utils/fonts'

const Cart = () => {

  const cart = useSelector((state) => state.cart)

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