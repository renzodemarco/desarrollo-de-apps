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
import ButtonPrimary from '../components/ButtonPrimary'

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
        <View style={styles.buttonContainer}>
          <Text style={styles.price}>${product.price}</Text>
          <ButtonPrimary
            onPress={handleAddProduct}
            title='AGREGAR AL CARRITO'
            textStyle={styles.buttonText}
            buttonStyle={styles.button}
          />
        </View>

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
    aspectRatio: 1,
    width: '100%'
  },
  container: {
    alignItems: 'flex-start',
    gap: 20,
    padding: 16
  },
  title: {
    fontFamily: fonts.RobotoBold,
    color: colors.primary,
    fontSize: 28
  },
  description: {
    fontFamily: fonts.RobotoLight,
    color: '#fff',
    fontSize: 16,
    marginBottom: 20
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  price: {
    fontFamily: fonts.RobotoBold,
    fontSize: 22,
    color: colors.primary
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: colors.primary,
    alignSelf: 'center',
    fontSize: 10
  },
  buttonText: {
    fontSize: 16,
    fontFamily: fonts.RobotoMedium
  }
})