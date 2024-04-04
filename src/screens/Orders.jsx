import { FlatList } from 'react-native'
import OrderItem from '../components/OrderItem'
import EmptyList from '../components/EmptyList'
import fonts from '../utils/fonts'
import { useSelector } from 'react-redux'
import { useGetOrdersQuery } from '../app/services/orders'

const Orders = ({ navigation }) => {

  const localId = useSelector(state => state.auth.localId)
  const { data: orders } = useGetOrdersQuery(localId)

  return (
    <>
      {orders?.length == 0 ?
        <EmptyList message="Aún no has hecho ninguna orden." />
        :
        <FlatList
          data={orders}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <OrderItem order={item} navigation={navigation} />}
        />
      }
    </>
  )
}

export default Orders