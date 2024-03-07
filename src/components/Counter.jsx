import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount, reset } from '../features/counter/counterSlice'
import fonts from '../utils/fonts'
import colors from '../utils/colors'
import { useState } from 'react'

const Counter = () => {

  const count = useSelector((state) => state.counter.value)  // Con esto seleccionamos el slice que vamos a utilizar y su valor
  const dispatch = useDispatch()  // Con esto disparamos las acciones para modificar el valor

  const [inputValue, setInputValue] = useState(0)

  const handleInputChange = (value) => {
    setInputValue(Number(value));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.counter}>{count}</Text>
      <Pressable style={styles.button} onPress={() => dispatch(increment())} >
        <Text style={styles.buttonText}>AUMENTAR UNO</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => dispatch(decrement())} >
        <Text style={styles.buttonText}>DISMINUIR UNO</Text>
      </Pressable>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Número a aumentar"
          inputMode='numeric'
          onChangeText={handleInputChange}
        />
        <Pressable
          style={styles.button}
          onPress={() => {
            dispatch(incrementByAmount(inputValue))
          }}
        >
          <Text style={styles.buttonText}>AUMENTAR POR NÚMERO</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => dispatch(reset())} >
          <Text style={styles.buttonText}>RESETEAR</Text>
        </Pressable>
      </View>
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
    backgroundColor: colors.secondary,
    margin: 6
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: fonts.RobotoMedium
  },
  inputContainer: {
    alignItems: 'center'
  },
  input: {
    textAlign: 'center',
    fontSize: 20,
    padding: 6
  }
})