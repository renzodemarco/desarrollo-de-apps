import { StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/Login'
import Register from '../screens/Register'
import Header from '../components/Header'

const Stack = createNativeStackNavigator()

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='Login'
      screenOptions={({ route, navigation }) => {
        return {
          header: () => {
            return <Header
              navigation={navigation}
              title={route.name == 'Login' ? 'Iniciar sesión' : 'Registrarse'} />
          }
        }
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  )
}

export default AuthStack

const styles = StyleSheet.create({})