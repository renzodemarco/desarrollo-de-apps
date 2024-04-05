import { Pressable, StyleSheet, Text, View } from 'react-native'
import { AntDesign } from "@expo/vector-icons"
import colors from '../utils/colors'
import capitalize from '../utils/capitalize'

const Header = ({ title, navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{capitalize(title)}</Text>
      {navigation.canGoBack() ?
        <Pressable style={styles.back} onPress={() => navigation.goBack()}>
          <AntDesign name='back' size={30} color="#fff" />
        </Pressable>
        : null
      }
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.overlay,
    height: 80,
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 30,
    color: '#fff'
  },
  back: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 30,
    height: 30
  }
})