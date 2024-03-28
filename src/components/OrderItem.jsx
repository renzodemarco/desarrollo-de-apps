import { StyleSheet, Text, View, Pressable } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { deleteProduct } from '../features/cart/cartSlice'
import { useDispatch } from 'react-redux'
import colors from '../utils/colors'
import fonts from '../utils/fonts'

const CartItem = ({ order }) => {

  const dispatch = useDispatch()

  return (
    <View style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{order.order.createdAt}</Text>
        <Text style={styles.text2}>${order.order.total} </Text>
      </View>
    </View>
  )
}

export default CartItem

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.secondary,
    padding: 18,
    marginTop: 8,
    marginHorizontal: 8,
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    height: 100,
    alignItems: "center"
  },
  textContainer: {
    width: "70%"
  },
  text: {
    color: '#111',
    fontSize: 18,
    fontFamily: fonts.RobotoMedium
  },
  text2: {
    color: '#222',
    fontSize: 14,
    fontFamily: fonts.RobotoLight
  }
})