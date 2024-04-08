import { StyleSheet, Text, View, Pressable } from 'react-native'
import InputForm from '../components/InputForm'
import ButtonPrimary from '../components/ButtonPrimary'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import colors from '../utils/colors'
import fonts from '../utils/fonts'
import { useLoginMutation } from '../app/services/auth'
import { setUser } from '../features/auth/authSlice'
import { loginSchema } from '../utils/validations/authSchema'
import { deleteSession, insertSession } from '../database'
import Wrapper from '../components/Wrapper'

const Login = ({ navigation }) => {

  const dispatch = useDispatch()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorEmail, setErrorEmail] = useState("")
  const [errorPassword, setErrorPassword] = useState("")
  const [triggerLogin] = useLoginMutation()

  const onSubmit = async () => {
    try {
      loginSchema.validateSync({ email, password })
      const { data, error } = await triggerLogin({ email, password })
      if (error) return setErrorEmail('Email o contraseña inválidos')
      dispatch(setUser({ email: data.email, idToken: data.idToken, localId: data.localId }))
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
        <ButtonPrimary
          onPress={onSubmit}
          title="Iniciar Sesión"
          buttonStyle={{ paddingHorizontal: 20 }}
        />
        <Pressable onPress={() => navigation.navigate("Register")} >
          <Text style={styles.sub}>¿No tienes una cuenta?</Text>
        </Pressable>
      </View>
    </Wrapper>
  )
}

export default Login

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
  sub: {
    fontSize: 18,
    fontFamily: fonts.RobotoRegular,
    color: colors.primary,
    marginTop: 8
  }
})