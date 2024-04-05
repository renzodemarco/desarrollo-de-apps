import { FlatList, StyleSheet, View, Text } from 'react-native'
import { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import LoadingSpinner from '../components/LoadingSpinner'
import Error from '../components/Error'
import EmptyList from '../components/EmptyList'
import Search from '../components/Search'
import colors from '../utils/colors'
import { useGetProductsByCategoryQuery } from '../app/services/shop' 

const ProductsByCategory = ({ navigation, route }) => {

  const category = route.params.category.title
  const { data: products, isLoading, isError, isSuccess } = useGetProductsByCategoryQuery(category)
  const [filteredProducts, setFilteredProducts] = useState([])
  const [keyword, setKeyword] = useState("")

  const handleKeyword = (value) => {
    setKeyword(value)
  }
  
  useEffect(() => {
    setFilteredProducts(products)
    if (keyword) setFilteredProducts(products.filter(product => {
      const titleLower = product.title.toLowerCase()
      const keywordLower = keyword.toLowerCase()
      return titleLower.includes(keywordLower)
    }))
  }, [category, keyword, products])

  if (isLoading) return <LoadingSpinner />

  if (isError) return <Error
    message="Lo lamentamos, algo salió mal."
    textButton="Volver"
    onRetry={() => navigation.goBack()}
  />

  if (isSuccess && category === null) return <EmptyList message="No hay productos en esta categoría." />

  return (
    <View style={styles.background}>
      <Search handleKeyword={handleKeyword}/>
      <FlatList
        data={filteredProducts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ProductCard item={item} navigation={navigation}/>}
      />
    </View>
  )
}

export default ProductsByCategory

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.background
  }
})