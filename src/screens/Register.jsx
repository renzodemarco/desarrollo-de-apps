import { StyleSheet, Text, View, Pressable } from 'react-native'
import InputForm from '../components/InputForm'
import ButtonPrimary from '../components/ButtonPrimary'
import ModalAlert from '../components/ModalAlert'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/auth/authSlice'
import { useRegisterMutation } from '../app/services/auth'
import colors from '../utils/colors'
import fonts from '../utils/fonts'
import { registerSchema } from '../utils/validations/authSchema'
import { deleteSession, insertSession } from '../database'
import Wrapper from '../components/Wrapper'


const Register = ({ navigation }) => {

  const dispatch = useDispatch()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [errorEmail, setErrorEmail] = useState("")
  const [errorPassword, setErrorPassword] = useState("")
  const [triggerRegister] = useRegisterMutation()  // me traigo el método que creé para registrar usuarios
  const [modalVisible, setModalVisible] = useState(false)

  const onSubmit = async () => {
    try {
      registerSchema.validateSync({ email, password, confirmPassword })  // valido los inputs con YUP
      const { data } = await triggerRegister({ email, password })  // hago la peticion y espero la respuesta en data
      await deleteSession()
      await insertSession(data)
      setModalVisible(true)
      setTimeout(() => {
        dispatch(setUser({ email: data.email, idToken: data.idToken, localId: data.localId }))
      }, 2000)
    }
    catch (error) {
      setErrorEmail('')
      setErrorPassword('')

      switch (error.path) {
        case "email":
          setErrorEmail(error.message)
          break
        case "password":
          setErrorPassword(error.message)
          break
        case "confirmPassword":
          setErrorPassword(error.message)
          break
        default:
          break
      }
    }
  }

  return (
    <Wrapper style={styles.main}>
      <View style={styles.container}>
        <InputForm
          label="Email"
          value={email}
          onChangeText={(t) => setEmail(t)}
          isSecure={false}
          error={errorEmail}
        />
        <InputForm
          label="Contraseña"
          value={password}
          onChangeText={(t) => setPassword(t)}
          isSecure={true}
          error={errorPassword}
        />
        <InputForm
          label="Repita la contraseña"
          value={confirmPassword}
          onChangeText={(t) => setConfirmPassword(t)}
          isSecure={true}
        />
        <ButtonPrimary
          onPress={onSubmit}
          title="Registrarse"
          buttonStyle={{paddingHorizontal: 20}}
        />
        <Pressable onPress={() => navigation.navigate("Login")} >
          <Text style={styles.sub}>Ya tengo una cuenta</Text>
        </Pressable>
      </View>
      <ModalAlert
        text='Se ha registrado el usuario correctamente'
        modalVisible={modalVisible}
      />
    </Wrapper>
  )
}

export default Register

const styles = StyleSheet.create({
  main: {
    paddingTop: '30%',
    alignItems: "center"
  },
  container: {
    width: "90%",
    backgroundColor: colors.overlay,
    gap: 15,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20
  },
  title: {
    fontSize: 22,
    fontFamily: fonts.RobotoMedium
  },
  sub: {
    fontSize: 18,
    fontFamily: fonts.RobotoRegular,
    color: colors.primary,
    marginTop: 8
  }
})