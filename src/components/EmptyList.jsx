import { View, Text, StyleSheet } from 'react-native'
import fonts from '../utils/fonts'

const EmptyList = ({ message }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.errorMessage}>{message}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorMessage: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: fonts.RobotoBold
  },
})

export default EmptyList