
import React from 'react'
import Shop from './Shop';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StoreItemDetails from './StoreItemDetails';
import Cart from './Cart';

const Stack = createNativeStackNavigator();

const App = () => {
 

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Shop"
        >
          
        <Stack.Screen name='Shop' component={Shop}/>
        <Stack.Screen name="StoreItemDetails" component={StoreItemDetails}/>
        <Stack.Screen name="Cart" component={Cart}/>
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
