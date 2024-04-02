import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from './TabNavigator';
import AuthStack from './AuthStack';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchSession } from '../database';
import { setUser } from '../features/auth/authSlice';

const MainNavigator = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    (async () => {
      const session = await fetchSession()
      if (session.rows.length) {
        const user = session.rows._array[0]
        dispatch(setUser(user))
      }
    })()
  }, [])
  

  const user = useSelector((state) => state.auth)

  return (
    <NavigationContainer>
      { user.idToken ? <TabNavigator/> : <AuthStack /> }
    </NavigationContainer>
  );
}

export default MainNavigator
