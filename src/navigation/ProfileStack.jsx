import { StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../components/Header'
import Profile from '../screens/Profile'
import ImageSelector from '../screens/ImageSelector'
  
const Stack = createNativeStackNavigator()

const ProfileStack = () => {

  return (
    <Stack.Navigator
      initialRouteName='Profile'
      screenOptions={({ route, navigation }) => {
        return {
          header: () => {
            return <Header
              navigation={navigation}
              title='Perfil' />
          }
        }
      }}
    >
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="ImageSelector" component={ImageSelector} />
    </Stack.Navigator>
  )
}


export default ProfileStack

const styles = StyleSheet.create({})