import { StyleSheet, Text, View, TextInput } from 'react-native'
import fonts from '../utils/fonts'


const InputForm = ({ label, value, onChangeText, isSecure, error }) => {


  return (
    <View style={styles.inputContainer}>
      <Text style={styles.titleInput}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        secureTextEntry={isSecure}
      />
      {error ? <View><Text style={styles.error}>{error}</Text></View> : null}
    </View>
  )
}


export default InputForm


const styles = StyleSheet.create({
  inputContainer: {
    width: "100%"
  },
  input: {
    width: "90%",
    borderWidth: 0,
    borderBottomWidth: 3,
    borderBottomColor: "white",
    padding: 2,
    fontFamily: fonts.RobotoMedium,
    fontSize: 14,
    marginHorizontal: "5%",
    marginVertical: 10
  },
  titleInput: {
    width: "90%",
    marginHorizontal: "5%",
    fontSize: 16,
    fontFamily: fonts.RobotoBold
  },
  error: {
    fontSize: 14,
    color: '#FFE9A1',
    fontStyle: 'italic',
    fontFamily: fonts.RobotoRegular,
    marginLeft: 10
  }
})