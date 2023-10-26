import { View, Text } from 'native-base';
import React from 'react'
import { useState } from 'react';
import { useWindowDimensions, StyleSheet } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import Profile from './Profile';
import Orders from './Orders';
import colors from '../../color';



const renderScene = SceneMap ({
    first:Profile,
    second:Orders
})

const Tabs = () => {
    const layout = useWindowDimensions()
    const [index, setIndex] = useState(0)
    const [routes] = useState([
        {key:"first", title:"PROFILE"},
        {key:"second", title:"ORDERS"}
    ]);

    const renderTabsBar = (props) => (
        <TabBar {...props} 
        tabStyle={styles.tabStyle} 
        indicatorStyle={{backgroundColor:colors.black}} 
        activeColor={colors.main} 
        inactiveColor={colors.fadedAsh} 
        renderLabel={({route, color}) => (
            <Text style={{color, ...styles.text}}>{route.title}</Text>
        )}/>
    )
  return (
    <TabView 
    navigationState={{index, routes}} 
    renderScene={renderScene}
    onIndexChange={setIndex}
    initialLayout={{ width: layout.width}}
    renderTabBar={renderTabsBar}
    />
  )
}

const styles = StyleSheet.create({
    tabStyle:{
        backgroundColor: "black"
    },
    text:{
        fontSize: 13,
        fontWeight: "bold",
    },
});

export default Tabs