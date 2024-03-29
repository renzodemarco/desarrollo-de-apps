import { StyleSheet, Text, View, Pressable } from 'react-native'
import InputForm from '../components/InputForm'
import SubmitButton from '../components/SubmitButton'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/auth/authSlice'
import { useRegisterMutation } from '../app/services/auth'
import colors from '../utils/colors'
import fonts from '../utils/fonts'
import { registerSchema } from '../utils/validations/authSchema'


const Register = ({ navigation }) => {

  const dispatch = useDispatch()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [errorEmail, setErrorEmail] = useState("")
  const [errorPassword, setErrorPassword] = useState("")
  const [triggerRegister] = useRegisterMutation()  // me traigo el método que creé para registrar usuarios

  const onSubmit = async () => {
    try {
      registerSchema.validateSync({ email, password, confirmPassword })  // valido los inputs con YUP
      const { data } = await triggerRegister({ email, password })  // hago la peticion y espero la respuesta en data
      dispatch(setUser({ email: data.email, idToken: data.idToken, localId: data.localId }))  // dentro de data tengo el idToken y mail
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
    <View style={styles.main}>
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
        <SubmitButton onPress={onSubmit} title="Registrarse" />
        <Pressable onPress={() => navigation.navigate("Login")} >
          <Text style={styles.sub}>Ya tengo una cuenta</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    width: "90%",
    backgroundColor: colors.secondary,
    gap: 15,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20
  },
  title: {
    fontSize: 22,
    fontFamily: fonts.RobotoMedium
  },
  sub: {
    fontSize: 16,
    fontFamily: fonts.RobotoBold,
    color: colors.primary
  }
})