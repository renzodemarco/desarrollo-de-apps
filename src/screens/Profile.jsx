import { StyleSheet, View, Image, Text } from 'react-native'
import AddButton from '../components/AddButton'
import fonts from '../utils/fonts'
import { useDispatch, useSelector } from 'react-redux'
import { useGetImageQuery, useGetLocationQuery } from '../app/services/profile'
import { clearUser } from '../features/auth/authSlice'
import { deleteSession } from '../database'

const Profile = ({ navigation }) => {

  const localId = useSelector(state => state.auth.localId)
  const { data: imageData } = useGetImageQuery(localId)
  const { data: locationData } = useGetLocationQuery(localId)
  const dispatch = useDispatch()

  const handleLogout = async () => {
    await deleteSession()
    dispatch(clearUser())
  }

  return (
    <View style={styles.container}>
      <Image
        source={imageData ? { uri: imageData.image } : require("../../assets/user.png")}
        style={styles.image}
        resizeMode='cover'
      />
      <AddButton
        title={imageData ? "Cambiar imagen de perfil" : "Agregar imagen de perfil"}
        onPress={() => navigation.navigate('ImageSelector')}
      />
      {locationData ? <Text style={styles.text}>{locationData.address}</Text> : null}
      <AddButton
        title={locationData ? "Cambiar localización" : "Agregar localización"}
        onPress={() => navigation.navigate('LocationSelector')}
      />
      <AddButton
        title={"Cerrar sesión"}
        onPress={handleLogout}
      />
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 20
  },
  text: {
    fontFamily: fonts.RobotoLight,
    fontSize: 16,
    marginTop: 40,
    marginBottom: 10,
    textAlign: 'center'
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 26
  },
  listContainer: {
    height: 400
  }
})