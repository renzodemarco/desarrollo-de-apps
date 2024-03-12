import { FlatList, View, Text } from 'react-native'
import { useGetCategoriesQuery } from '../app/services/shop'
import CategoryCard from './CategoryCard'

const Categories = ({ navigation }) => {

  const { data: categories, isLoading } = useGetCategoriesQuery()

  if (isLoading) return <View><Text>Cargando....</Text></View>

  return (
    <FlatList
      data={categories}
      keyExtractor={item => item}
      renderItem={({item})=> <CategoryCard category={item} navigation={navigation}/>}
    />
  )
}

export default Categories