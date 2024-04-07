import { StyleSheet, Text, View, Pressable } from 'react-native'
import colors from '../utils/colors'
import fonts from '../utils/fonts'
import truncate from '../utils/truncate'

const CartItem = ({ order }) => {

  const items = truncate(order.order.items, 36)

  return (
    <View style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>${order.order.total}</Text>
        <Text style={styles.text2}>{items} </Text>
        <Text style={styles.text3}>{order.order.createdAt} </Text>
      </View>
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
    width: "100%",
    height: "100%",
    justifyContent: 'space-between',
  },
  text: {
    color: colors.primary,
    fontSize: 18,
    fontFamily: fonts.RobotoMedium
  },
  text2: {
    color: colors.primary,
    fontSize: 14,
    fontFamily: fonts.RobotoLight
  },
  text3: {
    marginTop: 6,
    color: '#fff',
    fontSize: 10,
    fontFamily: fonts.RobotoLight
  }
})