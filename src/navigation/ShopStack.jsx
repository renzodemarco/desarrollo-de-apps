import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import ProductsByCategory from '../screens/ProductsByCategory'
import ProductDetail from '../screens/ProductDetail'
import AllProducts from '../screens/AllProducts'
import Header from '../components/Header'

const Stack = createNativeStackNavigator()

const ShopStack = () => {

  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={({ route, navigation }) => {
        return {
          header: () => {
            return <Header
              navigation={navigation}
              title={route.params?.title === 'all' ? 'Todos' : route.params?.title || 'Inicio'} />
          }
        }
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ProductsByCategory" component={ProductsByCategory} />
      <Stack.Screen name="AllProducts" component={AllProducts} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
    </Stack.Navigator>
  )
}

export default ShopStack
