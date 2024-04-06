import { StyleSheet, View, Keyboard } from 'react-native'
import { useEffect, useState } from 'react';
import colors from '../utils/colors'

const Wrapper = ({ children, style }) => {

  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false)

  useEffect(() => {
    Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setIsKeyboardOpen(true);
      }
    );

    Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setIsKeyboardOpen(false);
      }
    )
  }, [isKeyboardOpen]);

  return (
    <View style={[styles.container, {paddingBottom: isKeyboardOpen ? 0 : 60}, style]}>
      {children}
    </View>
  )
}

export default Wrapper

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  }
})