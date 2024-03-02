import { StatusBar, View, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useFonts } from "expo-font"
import { fontsCollection } from './src/utils/fonts'
import Home from './src/screens/Home'
import ProductsByCategory from './src/screens/ProductsByCategory'
import ProductDetail from './src/screens/ProductDetail'
import Header from './src/components/Header'
import colors from './src/utils/colors'

const App = () => {
  const [fontsLoaded] = useFonts(fontsCollection);

  if (!fontsLoaded) return null;

  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator
          initialRouteName='Home'
          screenOptions={({ route, navigation }) => {
            return {
              header: () => {
                return <Header
                  navigation={navigation}
                  title={route.params?.title || route.name} />
              }
            }
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ProductsByCategory" component={ProductsByCategory} />
          <Stack.Screen name="ProductDetail" component={ProductDetail} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center'
  }
})