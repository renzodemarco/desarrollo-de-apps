import { StyleSheet, Text, Image, Pressable } from 'react-native'
import React from 'react'
import colors from '../utils/colors'
import fonts from '../utils/fonts'

const ProductCard = ({ item, navigation }) => {
  return (
    <Pressable style={styles.container} onPress={() => navigation.navigate("ProductDetail", {itemId: item.id, title: item.title})}>
      <Text style={styles.text}>{item.id} {item.title}</Text>
      <Image style={styles.image} source={{ uri: item.thumbnail }} resizeMode="cover" />
    </Pressable>
  )
}

export default ProductCard

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    width: "80%",
    marginHorizontal: "10%",
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
    gap: 20
  },
  text: {
    width: "60%",
    fontSize: 16,
    fontFamily: fonts.RobotoMedium
  },
  image: {
    minHeight: 50,
    minWidth: 50,
    borderRadius: 5
  }
})