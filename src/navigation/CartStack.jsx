import { StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Cart from '../screens/Cart'
import Header from '../components/Header'
  
const Stack = createNativeStackNavigator()

const CartStack = () => {

  return (
    <Stack.Navigator
      initialRouteName='Cart'
      screenOptions={({ route, navigation }) => {
        return {
          header: () => {
            return <Header
              navigation={navigation}
              title='Carrito' />
          }
        }
      }}
    >
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  )
}


export default CartStack

const styles = StyleSheet.create({})