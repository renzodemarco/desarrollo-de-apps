import { FlatList } from 'react-native'
import { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import LoadingSpinner from '../components/LoadingSpinner'
import Error from '../components/Error'
import EmptyList from '../components/EmptyList'
import Search from '../components/Search'
import Wrapper from '../components/Wrapper'
import { useGetAllProductsQuery } from '../app/services/shop' 

const AllProducts = ({ navigation }) => {

  const { data: products, isLoading, isError, isSuccess } = useGetAllProductsQuery()
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
  }, [keyword, products])

  if (isLoading) return <LoadingSpinner />

  if (isError) return <Error
    message="Lo lamentamos, algo salió mal."
    textButton="Volver"
    onRetry={() => navigation.goBack()}
  />

  if (isSuccess && products.length === 0) return <EmptyList message="No hay productos en esta categoría." />

  return (
    <Wrapper>
      <Search handleKeyword={handleKeyword}/>
      <FlatList
        data={filteredProducts}
        keyExtractor={item => item?.id}
        renderItem={({ item }) => <ProductCard item={item} navigation={navigation}/>}
      />
    </Wrapper>
  )
}

export default AllProducts
