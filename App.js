import { StatusBar, View, StyleSheet } from 'react-native'
import { useFonts } from "expo-font"
import { fontsCollection } from './src/utils/fonts'
import MainNavigator from './src/navigation/MainNavigator'
import { store } from './src/app/store'
import { Provider } from 'react-redux'
import { init } from './src/database'

init()

const App = () => {
  const [fontsLoaded] = useFonts(fontsCollection);

  if (!fontsLoaded) return null

  return (
    <View style={styles.container}>
      <Provider store={store}>
        <MainNavigator />
      </Provider>
      <StatusBar hidden={true} />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center'
  }
})