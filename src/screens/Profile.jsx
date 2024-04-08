import { StyleSheet, View, Image, Text } from 'react-native'
import { useState } from 'react'
import ButtonPrimary from '../components/ButtonPrimary'
import ModalConfirm from '../components/ModalConfirm'
import { useDispatch, useSelector } from 'react-redux'
import { useGetImageQuery, useGetLocationQuery } from '../app/services/profile'
import { clearUser } from '../features/auth/authSlice'
import { deleteSession } from '../database'
import Wrapper from '../components/Wrapper'
import colors from '../utils/colors'

const Profile = ({ navigation }) => {

  const localId = useSelector(state => state.auth.localId)
  const { data: imageData } = useGetImageQuery(localId)
  const { data: locationData } = useGetLocationQuery(localId)
  const dispatch = useDispatch()
  const [modalVisible, setModalVisible] = useState(false)

  const handleCloseModal = () => {
    setModalVisible(false)
  }

  const handleLogout = async () => {
    await deleteSession()
    dispatch(clearUser())
  }

  return (
    <Wrapper style={styles.container}>
      <Image
        source={imageData ? { uri: imageData.image } : require("../../assets/user.png")}
        style={styles.image}
        resizeMode='cover'
      />
      <ButtonPrimary
        title={imageData ? "Cambiar imagen de perfil" : "Agregar imagen de perfil"}
        onPress={() => navigation.navigate('ImageSelector')}
        buttonStyle={{width: 270, marginBottom: 20}}
      />
      {locationData ? <Text style={styles.text}>{locationData.address}</Text> : null}
      <ButtonPrimary
        title={locationData ? "Cambiar localización" : "Agregar localización"}
        onPress={() => navigation.navigate('LocationSelector')}
        buttonStyle={{width: 270}}
      />
      <ButtonPrimary
        title={"Cerrar sesión"}
        onPress={() => setModalVisible(true)}
        buttonStyle={{ marginTop: 60, width: 180, backgroundColor: colors.overlay}}
        textStyle={{color: colors.primary}}
      />
      <ModalConfirm
        text="¿Desea cerrar sesión?"
        modalVisible={modalVisible}
        onClose={handleCloseModal}
        onConfirm={handleLogout}
      />
    </Wrapper>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  image: {
    aspectRatio: 1,
    height: 200,
    margin: 20,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#fff'
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    padding: 20
  }
})