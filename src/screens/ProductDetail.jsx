import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { useDispatch } from 'react-redux'
import { useGetProductQuery } from '../app/services/shop'
import { addProduct } from '../features/cart/cartSlice'
import fonts from '../utils/fonts'
import colors from '../utils/colors'

const ProductDetail = ({ route }) => {

  const { itemId } = route.params
  const { data: product, isLoading } = useGetProductQuery(Number(itemId) - 1)
  const dispatch = useDispatch()

  if (isLoading) return <View><Text>Cargando....</Text></View>

  return (
    <View style={styles.background}>
      <Image
        style={styles.image}
        source={{ uri: product?.images ? product.images[0] : null }}
        resizeMode='cover'
      />
      <View style={styles.container}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}>${product.price}</Text>
        <Pressable style={styles.button} onPress={()=> dispatch(addProduct(product))}>
          <Text style={styles.buttonText}>AGREGAR AL CARRITO</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default ProductDetail

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.background
  },
  image: {
    width: '100%',
    height: 260
  },
  container: {
    alignItems: 'flex-start',
    gap: 20,
    padding: 16
  },
  title: {
    fontFamily: fonts.RobotoBold,
    fontSize: 26
  },
  description: {
    fontFamily: fonts.RobotoLight,
    fontSize: 16
  },
  price: {
    fontFamily: fonts.RobotoBold,
    fontSize: 22
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: colors.secondary,
    alignSelf:'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: fonts.RobotoMedium
  }
})