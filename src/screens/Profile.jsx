import { StyleSheet, View, Image } from 'react-native'
import AddButton from '../components/AddButton'
import fonts from '../utils/fonts'
import { useSelector } from 'react-redux'
import { useGetImageQuery } from '../app/services/profile'

const Profile = ({ navigation }) => {

  const localId = useSelector(state => state.auth.localId)
  const { data } = useGetImageQuery(localId)

  return (
    <View style={styles.container}>
      <Image
        source={data ? { uri: data.image } : require("../../assets/user.png")}
        style={styles.image}
        resizeMode='cover'
      />
      <AddButton
        title={data ? "Cambiar imagen de perfil" : "Agregar Imagen de perfil"}
        onPress={() => navigation.navigate('ImageSelector')}
      />
      <AddButton
        title="Agregar localización"
        onPress={() => navigation.navigate('LocationSelector')}
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
    fontFamily: fonts.RobotoBold,
    fontSize: 20
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