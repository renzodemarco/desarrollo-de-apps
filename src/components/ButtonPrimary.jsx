import { StyleSheet, Text, Pressable } from 'react-native'
import colors from '../utils/colors'


const ButtonPrimary = ({ title, onPress }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}


export default ButtonPrimary


const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    width: "70%",
    paddingVertical: 8,
    margin: 10
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 18
  }
})