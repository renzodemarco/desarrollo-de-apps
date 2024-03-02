import { FlatList } from 'react-native'
import { useEffect, useState } from 'react'
import products from '../data/products.json'
import ProductCard from '../components/ProductCard'
import Search from '../components/Search'

const ProductsByCategory = ({ navigation, route }) => {

  const {category} = route.params
  const [filteredProducts, setFilteredProducts] = useState([])
  const [keyword, setKeyword] = useState("")

  const handleKeyword = (value) => {
    setKeyword(value)
  }
  
  useEffect(() => {
    if (category) setFilteredProducts(products.filter(product => product.category === category))
    if (keyword) setFilteredProducts(filteredProducts.filter(product => {
      const titleLower = product.title.toLowerCase()
      const keywordLower = keyword.toLowerCase()
      return titleLower.includes(keywordLower)
    }))
  }, [category, keyword])

  return (
    <>
      <Search handleKeyword={handleKeyword}/>
      <FlatList
        data={filteredProducts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ProductCard item={item} navigation={navigation}/>}
      />
    </>
  )
}

export default ProductsByCategory
