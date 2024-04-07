import { View, Text, StyleSheet } from 'react-native'
import ButtonPrimary from './ButtonPrimary'
import colors from '../utils/colors'

const Error = ({ message, textButton, onRetry }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.errorMessage}>{message}</Text>
      <ButtonPrimary title={textButton} onPress={onRetry} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background
  },
  errorMessage: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    color: colors.primary
  },
})

export default Error