import { Pressable, StyleSheet, Text, TextInput, View, Keyboard } from 'react-native'
import { useState } from 'react'
import { AntDesign } from "@expo/vector-icons"
import colors from '../utils/colors'

const Search = ({ handleKeyword }) => {
  const [input, setInput] = useState("")

  const handleInput = (value) => setInput(value)

  const search = () => {
    handleKeyword(input)
    Keyboard.dismiss()
  }

  const resetSearch = () => {
    handleKeyword("")
    handleInput("")
  }

  return (
    <View>
      <View style={styles.container}>
        <TextInput
          placeholder='Buscar'
          value={input}
          onChangeText={handleInput}
          style={styles.input}
        />
        <Pressable onPress={search}>
          <AntDesign name='search1' size={30} color='#000' />
        </Pressable>
        <Pressable onPress={resetSearch}>
          <AntDesign name='closecircle' size={30} color='#000' />
        </Pressable>
      </View>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green1,
    flexDirection: "row",
    padding: 10,
    alignItems: "center"
  },
  input: {
    flex: 1,
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5
  }
})