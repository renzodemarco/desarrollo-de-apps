import { StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Cart from '../components/Cart'
import Header from '../components/Header'
  
const Stack = createNativeStackNavigator()

const OrdersStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='Orders'
      screenOptions={({ route, navigation }) => {
        return {
          header: () => {
            return <Header
              navigation={navigation}
              title='Orders' />
          }
        }
      }}
    >
      <Stack.Screen name="Orders" component={Cart} />
    </Stack.Navigator>
  )
}

export default OrdersStack

const styles = StyleSheet.create({})