import { StyleSheet, Text, Image, Pressable, View } from 'react-native'
import React from 'react'
import colors from '../utils/colors'
import fonts from '../utils/fonts'

const ProductCard = ({ item, navigation }) => {
  return (
    <Pressable style={styles.container} onPress={() => navigation.navigate("ProductDetail", { itemId: item.id, title: item.title })}>
      <View style={styles.nameContainer}>
        <Text style={styles.album}>{item.title}</Text>
        <Text style={styles.artist}>{item.artist}</Text>
      </View>
      <Image style={styles.image} source={{ uri: item.thumbnail }} resizeMode="cover" />
    </Pressable>
  )
}

export default ProductCard

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.overlay,
    width: "100%",
    borderBottomColor: colors.tertiary,
    borderBottomWidth: 1,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
  },
  nameContainer: {
    width: "70%",
    paddingLeft: 6
  },
  album: {
    color: colors.primary,
    fontSize: 17,
    fontFamily: fonts.RobotoMedium
  },
  artist: {
    color: '#fff',
    fontSize: 12,
    fontFamily: fonts.RobotoLight
  },
  image: {
    height: 70,
    width: 70
  }
})