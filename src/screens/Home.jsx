import Categories from '../components/Categories'
import { View, StyleSheet } from 'react-native'
import colors from '../utils/colors'

const Home = ({ navigation }) => {
  return (
    <View style={styles.background}>
      <Categories navigation={navigation}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.background
  }
})