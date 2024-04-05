import { FlatList } from 'react-native'
import { useGetCategoriesQuery } from '../app/services/shop'
import LoadingSpinner from './LoadingSpinner'
import Error from './Error'
import EmptyList from './EmptyList'
import CategoryCard from './CategoryCard'

const Categories = ({ navigation }) => {

  const { data: categories, isLoading, isError, isSuccess } = useGetCategoriesQuery()

  if (isLoading) return <LoadingSpinner />

  if (isError) return <Error
    message="Lo lamentamos, algo salió mal."
    textButton="Reintentar"
    onRetry={() => navigation.goBack()}
  />

  if (isSuccess && categories.length === 0) return <EmptyList message="No hay categorías." />

  return (
    <FlatList
      data={categories}
      keyExtractor={item => item.title}
      renderItem={({item})=> <CategoryCard category={item} navigation={navigation}/>}
    />
  )
}

export default Categories