import { StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../components/Header'
import Counter from '../components/Counter'
  
const Stack = createNativeStackNavigator()

const OrdersStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='Contador'
      screenOptions={({ route, navigation }) => {
        return {
          header: () => {
            return <Header
              navigation={navigation}
              title='Contador' />
          }
        }
      }}
    >
      <Stack.Screen name="Contador" component={Counter} />
    </Stack.Navigator>
  )
}

export default OrdersStack

const styles = StyleSheet.create({})