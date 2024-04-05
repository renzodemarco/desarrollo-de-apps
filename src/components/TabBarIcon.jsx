import { StyleSheet, Text, View } from 'react-native'
import {Entypo} from '@expo/vector-icons'
import colors from '../utils/colors'

const TabBarIcon = ({ title, icon, focused }) => {
  return (
    <View style={styles.container}>
      <Entypo name={icon} size={26} color={focused ? colors.tertiary : colors.primary }/>
      <Text style={[styles.text, {color: focused ? colors.tertiary : colors.primary}]} >{title}</Text>
    </View>
  )
}

export default TabBarIcon

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  text: {
    textAlign: "center",
    fontSize: 15
  }
})