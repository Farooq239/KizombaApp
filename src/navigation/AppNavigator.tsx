import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ColorSet } from '../styles';
import Splash from '../screen/Splash';
import Home from '../screen/main/Home';
import PartyHome from '../screen/main/PartyHome';
import SelectCountry from '../screen/main/SelectCountry';
import SelectedDj from '../screen/main/SelectedDj';
import ListMapView from '../screen/main/ListMapView';
import Login from '../screen/main/Login';
import Register from '../screen/main/Register';

const Stack = createNativeStackNavigator();

const AppNavigator: React.FC<{}> = ({ }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
          statusBarColor: ColorSet.backgroundColor,
        }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SelectedDj" component={SelectedDj} />
        <Stack.Screen name="PartyHome" component={PartyHome} />
        <Stack.Screen name="SelectCountry" component={SelectCountry} />
        <Stack.Screen name="ListMapView" component={ListMapView} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;
