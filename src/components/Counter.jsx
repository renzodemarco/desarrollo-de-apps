import { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import fonts from '../utils/fonts'
import colors from '../utils/colors'

const Counter = () => {

  const [count, setCount] = useState(0)

  return (
    <View style={styles.container}>
      <Text style={styles.counter}>{count}</Text>
      <Pressable style={styles.button} onPress={()=> setCount(count + 1)} >
        <Text style={styles.buttonText}>AUMENTAR</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={()=> setCount(count - 1)} >
        <Text style={styles.buttonText}>DISMINUIR</Text>
      </Pressable>
    </View>
  )
}

export default Counter

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 10,
    marginTop: 10
  },
  counter: {
    fontSize: 30,
    fontFamily: fonts.RobotoBold
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: colors.secondary
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: fonts.RobotoMedium
  }
})