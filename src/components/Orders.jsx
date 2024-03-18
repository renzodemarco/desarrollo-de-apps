import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import fonts from '../utils/fonts'

const Orders = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No has hecho ninguna orden.</Text>
    </View>
  )
}

export default Orders

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 20
  },
  text: {
    fontFamily: fonts.RobotoBold,
    fontSize: 20
  },
  listContainer: {
    height: 400
  }
})