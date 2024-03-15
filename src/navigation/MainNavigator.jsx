import { NavigationContainer } from '@react-navigation/native'
import { useState } from 'react';
import TabNavigator from './TabNavigator';
import AuthStack from './AuthStack';

const MainNavigator = () => {

  const [idToken, setIdToken] = useState('')

  return (
    <NavigationContainer>
      { idToken ? <TabNavigator/> : <AuthStack/> }
    </NavigationContainer>
  );
}

export default MainNavigator
