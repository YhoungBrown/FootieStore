import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, Text, Box, Stack } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "./src/Screens/LoginScreen";
import RegisterScreen from "./src/Screens/RegisterScreen";
import OrderScreen from "./src/Screens/OrderScreen";
import BottomNav from './src/Navigations/BottomNav';



const StackNavigator = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
        <NavigationContainer>
            <StatusBar />
            <StackNavigator.Navigator initialRouteName='Login' screenOptions={{
              headerShown: false
            }}>
              <StackNavigator.Screen name='Login' component={LoginScreen} />
              <StackNavigator.Screen name='Register' component={RegisterScreen} />
              <StackNavigator.Screen name='Order' component={OrderScreen} />
              <StackNavigator.Screen name='Bottom' component={BottomNav} />
            </StackNavigator.Navigator>
        </NavigationContainer>
    </NativeBaseProvider>
  );
}

