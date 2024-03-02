import { StyleSheet, Text, Pressable, View } from 'react-native'
import capitalize from '../utils/capitalize'
import colors from '../utils/colors'
import fonts from '../utils/fonts'

const CategoryCard = ({ navigation, category }) => {
  return (
      <Pressable onPress={() => navigation.navigate("ProductsByCategory", {category, title: category})}>
        <View style={styles.container}>
          <Text style={styles.text}>{capitalize(category)}</Text>
        </View>
      </Pressable>
  )
}

export default CategoryCard

const styles = StyleSheet.create({
  container: {
    width: "80%",
    backgroundColor: colors.secondary,
    marginHorizontal: "10%",
    marginVertical: 10,
    padding: 20,
    alignItems: "center",
    borderRadius: 5
  },
  text: {
    fontSize: 16,
    color: '#000',
    fontFamily: fonts.RobotoMedium
  }
})