import { StyleSheet, Text, Pressable, ImageBackground, View } from 'react-native'
import capitalize from '../utils/capitalize'
import fonts from '../utils/fonts'

const CategoryCard = ({ navigation, category }) => {
  return (
    <Pressable onPress={() => navigation.navigate("ProductsByCategory", { category, title: category.title })}>
      <View style={styles.container}>
        <ImageBackground source={{ uri: category.image }} style={styles.imageBackground}>
          <Text style={styles.text}>{category.title === 'all' ? "Todos" : capitalize(category.title)}</Text>
        </ImageBackground>
      </View>
    </Pressable>
  )
}

export default CategoryCard

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 130,
    alignItems: "center"
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  text: {
    padding: 20,
    fontSize: 30,
    color: '#fff',
    fontFamily: fonts.RobotoLight
  }
})