import { StyleSheet, Text, Pressable } from 'react-native'
import colors from '../utils/colors'


const ButtonPrimary = ({ title, onPress, buttonStyle, textStyle }) => {
  return (
    <Pressable style={[styles.container, buttonStyle]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </Pressable>
  )
}


export default ButtonPrimary


const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    padding: 8,
  },
  text: {
    color: colors.overlay,
    textAlign: "center",
    fontSize: 18
  }
})