import { StatusBar, View, StyleSheet } from 'react-native'
import { useFonts } from "expo-font"
import { fontsCollection } from './src/utils/fonts'
import MainNavigator from './src/navigation/MainNavigator'

const App = () => {
  const [fontsLoaded] = useFonts(fontsCollection);

  if (!fontsLoaded) return null;
  
  return (
    <View style={styles.container}>
      <MainNavigator />
      <StatusBar hidden={true} />
    </View>
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