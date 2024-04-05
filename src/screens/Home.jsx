import Categories from '../components/Categories'
import Wrapper from '../components/Wrapper'

const Home = ({ navigation }) => {
  return (
    <Wrapper>
      <Categories navigation={navigation}/>
    </Wrapper>
  )
}

export default Home
