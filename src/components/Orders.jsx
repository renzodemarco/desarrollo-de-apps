import { StyleSheet, Text, View, FlatList } from 'react-native'
import OrderItem from './OrderItem'
import fonts from '../utils/fonts'
import { useSelector } from 'react-redux'
import { useGetOrdersQuery } from '../app/services/orders'

const Orders = ({ navigation }) => {

  const localId = useSelector(state => state.auth.localId)
  const { data: orders } = useGetOrdersQuery(localId)

  return (
    <>
      {orders?.length > 0 ?
        <FlatList
          data={orders}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <OrderItem order={item} navigation={navigation} />}
        />
        :
        <View style={styles.container}>
          <Text style={styles.text}>No has hecho ninguna orden.</Text>
        </View>
      }
    </>
  )
}

export default Orders

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 20
  },
  text: {
    fontFamily: fonts.RobotoBold,
    fontSize: 20
  },
  listContainer: {
    height: 400
  }
})