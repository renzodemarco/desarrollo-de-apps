import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useGetProductQuery } from '../app/services/shop'
import { addProduct } from '../features/cart/cartSlice'
import LoadingSpinner from '../components/LoadingSpinner'
import Error from '../components/Error'
import EmptyList from '../components/EmptyList'
import ModalAlert from '../components/ModalAlert'
import fonts from '../utils/fonts'
import colors from '../utils/colors'
import Wrapper from '../components/Wrapper'

const ProductDetail = ({ route }) => {

  const { itemId } = route.params
  const { data: product, isLoading, isError, isSuccess } = useGetProductQuery(Number(itemId) - 1)
  const dispatch = useDispatch()
  const [modalVisible, setModalVisible] = useState(false)

  const handleCloseModal = () => {
    setModalVisible(false)
  }

  const handleAddProduct = () => {
    dispatch(addProduct(product))
    setModalVisible(true)
  }

  if (isLoading) return <LoadingSpinner />

  if (isError) return <Error
    message="Lo lamentamos, algo salió mal."
    textButton="Volver"
    onRetry={() => navigation.goBack()}
  />

  if (isSuccess && product === null) return <EmptyList message="Producto no disponible." />

  return (
    <Wrapper>
      <Image
        style={styles.image}
        source={{ uri: product?.images ? product.images[0] : null }}
        resizeMode='cover'
      />
      <View style={styles.container}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}>${product.price}</Text>
        <Pressable style={styles.button} onPress={handleAddProduct}>
          <Text style={styles.buttonText}>AGREGAR AL CARRITO</Text>
        </Pressable>
      </View>
      <ModalAlert
        text={`Se ha agregado ${product.title} al carrito`}
        modalVisible={modalVisible}
        onClose={handleCloseModal}
      />
    </Wrapper>
  )
}

export default ProductDetail

const styles = StyleSheet.create({
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
    alignSelf: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: fonts.RobotoMedium
  }
})