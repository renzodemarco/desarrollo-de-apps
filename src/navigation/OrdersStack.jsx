import { StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../components/Header'
import Orders from '../components/Orders'
  
const Stack = createNativeStackNavigator()

const OrdersStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='Órdenes'
      screenOptions={({ route, navigation }) => {
        return {
          header: () => {
            return <Header
              navigation={navigation}
              title='Órdenes' />
          }
        }
      }}
    >
      <Stack.Screen name="Órdenes" component={Orders} />
    </Stack.Navigator>
  )
}

export default OrdersStack

const styles = StyleSheet.create({})