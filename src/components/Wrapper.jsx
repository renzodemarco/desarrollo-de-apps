import { StyleSheet, View } from 'react-native'
import colors from '../utils/colors'

const Wrapper = ({ children, style }) => {
  return (
    <View style={[styles.container, style]}>
      {children}
    </View>
  )
}

export default Wrapper

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 60,
    backgroundColor: colors.background
  }
})