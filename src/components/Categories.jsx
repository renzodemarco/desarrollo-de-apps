import { FlatList } from 'react-native'
import categories from '../data/categories.json'
import CategoryCard from './CategoryCard'

const Categories = ({ navigation }) => {
  return (
    <FlatList
      data={categories}
      keyExtractor={item => item}
      renderItem={({item})=> <CategoryCard category={item} navigation={navigation}/>}
    />
  )
}

export default Categories