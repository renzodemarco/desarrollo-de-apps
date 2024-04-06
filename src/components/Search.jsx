import { Pressable, StyleSheet, KeyboardAvoidingView, Platform, TextInput, View, Keyboard } from 'react-native'
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
    <>
      <View style={styles.container}>
        <TextInput
          placeholder='Buscar'
          placeholderTextColor={colors.primary}
          value={input}
          onChangeText={handleInput}
          style={styles.input}
        />
        <Pressable onPress={search}>
          <AntDesign name='search1' size={30} color={colors.primary} marginHorizontal={6} />
        </Pressable>
        <Pressable onPress={resetSearch}>
          <AntDesign name='closecircle' size={30} color={colors.primary} marginHorizontal={2} />
        </Pressable>
      </View>
    </>
  )
}

export default Search

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.overlay,
    flexDirection: "row",
    padding: 10,
    alignItems: "center"
  },
  input: {
    flex: 1,
    borderColor: colors.primary,
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5
  }
})