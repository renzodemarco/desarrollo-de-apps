import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShopStack from './ShopStack';
import CartStack from './CartStack';
import OrdersStack from './OrdersStack'
import TabBarIcon from '../components/TabBarIcon';

const Tab = createBottomTabNavigator();

const MainNavigator = () => {

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='ShopStack'
        screenOptions={{
          headerShown: false,  // Ocultamos el header que trae el Tab
          tabBarShowLabel: false,  // Ocultamos el título predeterminado
          tabBarHideOnKeyboard: true, // Ocultamos el Tab al abrir el teclado
          tabBarStyle: styles.tabBar  // Damos estilo a la barra
        }}
      >

        <Tab.Screen 
          name="ShopStack" 
          component={ShopStack} 
          options={{
            tabBarIcon: ({focused})=><TabBarIcon title='Shop' icon='home' focused={focused}/>
          }}
        />

        <Tab.Screen 
          name="CartStack" 
          component={CartStack}
          options={{
            tabBarIcon: ({focused})=><TabBarIcon title='Carrito' icon='shopping-cart' focused={focused}/>
          }}
        />

        <Tab.Screen 
          name="OrdersStack" 
          component={OrdersStack}
          options={{
            tabBarIcon: ({focused})=> <TabBarIcon title='Órdenes' icon='list' focused={focused}/>
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#fff',
    height: 60,
    borderRadius: 15,
    position: 'absolute',
    right: 20,
    left: 20,
    bottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.6,
    elevation: 7,
  }
})