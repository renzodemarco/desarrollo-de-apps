import { useEffect, useState } from 'react'
import { StyleSheet, Image, View } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import ButtonPrimary from '../components/ButtonPrimary'
import ModalConfirm from '../components/ModalConfirm'
import { useGetImageQuery, usePutImageMutation } from '../app/services/profile';
import { useSelector } from 'react-redux';


const ImageSelector = ({ navigation }) => {

  const [image, setImage] = useState("")
  const [triggerImage] = usePutImageMutation()
  const localId = useSelector(state => state.auth.localId)
  const { data, isSuccess } = useGetImageQuery(localId)
  const [modalVisible, setModalVisible] = useState(false)

  useEffect(() => {
    if (isSuccess && data) setImage(data.image)
  }, [isSuccess, data])

  const handleCloseModal = () => {
    setModalVisible(false)
  }

  const pickImage = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync()  // esto me devuelve un booleano con la respuesta del user

    if (granted) {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        quality: .3,
        base64: true  // transforma la data a un formato que podemos guardar en una database
      })

      if (!result.canceled) {
        setImage('data:image/jpeg;base64,' + result.assets[0].base64)  // le agrego un string adelante para que al leerla se sepa que es una imagen en base64
      }
    }
  }

  const confirmImage = () => {
    triggerImage({ image, localId })
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <Image
        source={image ? { uri: image } : require("../../assets/user.png")}  // si hay una imagen se usará esa, de lo contrario va la imagen por defecto
        style={styles.image}
        resizeMode='cover'

      />
      <ButtonPrimary title="Tomar foto" onPress={pickImage} />
      <ButtonPrimary title="Confirm photo" onPress={() => setModalVisible(true)} />
      <ModalConfirm
        text="¿Desea cambiar la foto de perfil?"
        modalVisible={modalVisible}
        onClose={handleCloseModal}
        onConfirm={confirmImage}
      />
    </View>
  )
}


export default ImageSelector


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 20
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 26
  }
})