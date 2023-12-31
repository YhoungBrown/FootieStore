import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from "../Screens/HomeScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import CartScreen from "../Screens/CartScreen";
import { Center, Pressable } from 'native-base';
import colors from '../color';
import {Entypo, AntDesign, FontAwesome, FontAwesome5, MaterialCommunityIcons} from "@expo/vector-icons";
import StackNav from './StackNav';


const Tab = createBottomTabNavigator()
const CustomTab = ({ children, onPress, }) => (
    <Pressable 
    onPress={onPress} 
    h={70} 
    w={70} 
    rounded={"full"} 
    bg={colors.main} 
    top={-30} 
    shadow={2}
    alignItems={"center"} 
    justifyContent={'center'}>
        {children}
    </Pressable>
)

const BottomNav = () => {
  return (
    <Tab.Navigator backBehavior='Main' initialRouteName='Main' screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {...styles.tab},
        headerShown: false,
        tabBarHideOnKeyboard: true
    }}>
        <Tab.Screen name='Main' component={StackNav} options={{
            tabBarIcon: ({focused}) => (
                <Center>
                    {focused ? (
                        <Entypo name='home' size={24} color={colors.main} />
                    ) : (
                        <AntDesign name='home' size={24} color={colors.black} />
                    )} 
                </Center>
            )
        }}/>
        {/**Cart */}
        <Tab.Screen name='Cart' component={CartScreen} options={{
            tabBarButton: (props) => <CustomTab {...props} />,
            tabBarIcon: ({focused}) => ( 
                <Center>
                {focused ? (
                    <FontAwesome5 name="shopping-basket" size={24} color={colors.white} /> // Check the FontAwesome5 icon name
                 ) : (
                    <MaterialCommunityIcons name="shopping-outline" size={24} color={colors.white} /> // Check the MaterialCommunityIcons icon name
                 )}
            </Center>)
        }}/>
        {/**Profile */}
        <Tab.Screen name='Profile' component={ProfileScreen} options={{
            tabBarIcon: ({focused}) => (
                <Center>
                    {focused ? (
                        <FontAwesome name='user' size={24} color={colors.main} />
                    ) : (
                        <AntDesign name='user' size={24} color={colors.black} />
                    )} 
                </Center>
            )
        }}/>
    </Tab.Navigator>
  );
};


const styles = StyleSheet.create({
    tab: {
        elevation: 0,
        backgroundColor: colors.white,
        height: 60,
    },
})
export default BottomNav