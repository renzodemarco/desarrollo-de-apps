import { StyleSheet, Text, View, Image } from 'react-native'
import products from '../data/products.json'
import { useEffect, useState } from 'react'
import fonts from '../utils/fonts'
import colors from '../utils/colors'

const ProductDetail = ({ route }) => {

  const { itemId } = route.params
  const [product, setProduct] = useState({})

  useEffect(() => {
    const productFound = products.find(product => product.id === itemId)
    setProduct(productFound)
  }, [itemId])

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
    height: 360
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
  }
})