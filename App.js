import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from './Screens/Main';
import Another from './Screens/Another';
import { useSelector } from 'react-redux';
const Tab = createBottomTabNavigator();

export default function App() {
  const { count } = useSelector((state) => state.count);
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen options={{ title: count.toString() }} name="Home" component={Main} />
        <Tab.Screen name="Another" component={Another} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}