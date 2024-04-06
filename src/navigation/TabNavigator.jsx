import { StyleSheet } from 'react-native';
import ShopStack from './ShopStack';
import CartStack from './CartStack';
import OrdersStack from './OrdersStack'
import TabBarIcon from '../components/TabBarIcon';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileStack from './ProfileStack';
import colors from '../utils/colors';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (

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
          tabBarIcon: ({ focused }) => <TabBarIcon title='Shop' icon='home' focused={focused} />
        }}
      />

      <Tab.Screen
        name="CartStack"
        component={CartStack}
        options={{
          tabBarIcon: ({ focused }) => <TabBarIcon title='Carrito' icon='shopping-cart' focused={focused} />
        }}
      />

      <Tab.Screen
        name="OrdersStack"
        component={OrdersStack}
        options={{
          tabBarIcon: ({ focused }) => <TabBarIcon title='Órdenes' icon='list' focused={focused} />
        }}
      />

      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ focused }) => <TabBarIcon title='Perfil' icon='user' focused={focused} />
        }}
      />

    </Tab.Navigator>
  )
}

export default TabNavigator

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.overlay,
    height: 60,
    position: 'absolute',
    bottom: 0,
    borderTopColor: colors.overlay
  }
})