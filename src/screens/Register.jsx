import { StyleSheet, Text, View, Pressable } from 'react-native'
import InputForm from '../components/InputForm'
import SubmitButton from '../components/SubmitButton'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import colors from '../utils/colors'
import fonts from '../utils/fonts'
import { useRegisterMutation } from '../app/services/auth'

const Register = ({ navigation }) => {

  const dispatch = useDispatch()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [password2, setPassword2] = useState("")
  const [errorEmail, setErrorEmail] = useState("")
  const [errorPassword, setErrorPassword] = useState("")
  const [errorPassword2, setErrorPassword2] = useState("")
  const [triggerRegister] = useRegisterMutation()  // me traigo el método que creé para registrar usuarios

  const onSubmit = () => {
    console.log({email, password})
    triggerRegister({email, password})
  }

  // const onSubmit = async () => {
  //   try {

  //     RegisterSchema.validateSync({ email, password })
  //     const { data } = await triggerRegister({ email, password })
  //     dispatch(setUser({ email: data.email, idToken: data.idToken, localId: data.localId }))

  //   } catch (error) {

  //     setErrorEmail("")
  //     setErrorPassword("")

  //     switch (error.path) {
  //       case "email":
  //         setErrorEmail(error.message)
  //         break
  //       case "password":
  //         setErrorPassword(error.message)
  //         break
  //       default:
  //         break
  //     }

  //   }

  // }

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
          value={password2}
          onChangeText={(t) => setPassword2(t)}
          isSecure={true}
          error={errorPassword2}
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